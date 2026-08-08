#!/bin/sh
# Dumps the Postgres database and uploads it to the same S3-compatible bucket
# used for file storage, under a backups/ prefix. Run daily via cron on the
# host (not inside a container) - see packages/twenty-docker/README section
# on backups for the crontab line.
#
# Requires the AWS CLI on the host (works against any S3-compatible endpoint,
# including OCI Object Storage, via --endpoint-url) and this directory's .env.

set -eu

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
# shellcheck disable=SC1091
. "$SCRIPT_DIR/.env"

if [ -z "${STORAGE_S3_NAME:-}" ] || [ -z "${STORAGE_S3_ENDPOINT:-}" ]; then
  echo "STORAGE_S3_NAME / STORAGE_S3_ENDPOINT not set in .env - nothing to back up to." >&2
  exit 1
fi

TIMESTAMP=$(date +%Y-%m-%d_%H-%M-%S)
DUMP_FILE="/tmp/twenty-backup-${TIMESTAMP}.sql.gz"

docker exec twenty-db-1 pg_dump -U "${PG_DATABASE_USER:-postgres}" default | gzip > "$DUMP_FILE"

AWS_ACCESS_KEY_ID="$STORAGE_S3_ACCESS_KEY_ID" \
AWS_SECRET_ACCESS_KEY="$STORAGE_S3_SECRET_ACCESS_KEY" \
aws s3 cp "$DUMP_FILE" \
  "s3://${STORAGE_S3_NAME}/backups/twenty-backup-${TIMESTAMP}.sql.gz" \
  --endpoint-url "$STORAGE_S3_ENDPOINT" \
  --region "${STORAGE_S3_REGION:-us-ashburn-1}"

rm -f "$DUMP_FILE"
echo "Backup uploaded: backups/twenty-backup-${TIMESTAMP}.sql.gz"

# Keep the last 30 days of backups, delete anything older (uncomment once you've
# confirmed the upload above works reliably for a few days):
# CUTOFF=$(date -d '30 days ago' +%Y-%m-%d 2>/dev/null || date -v-30d +%Y-%m-%d)
# aws s3 ls "s3://${STORAGE_S3_NAME}/backups/" --endpoint-url "$STORAGE_S3_ENDPOINT" \
#   | awk '{print $4}' | while read -r key; do
#     file_date=$(echo "$key" | grep -oE '[0-9]{4}-[0-9]{2}-[0-9]{2}')
#     if [ -n "$file_date" ] && [ "$file_date" \< "$CUTOFF" ]; then
#       aws s3 rm "s3://${STORAGE_S3_NAME}/backups/$key" --endpoint-url "$STORAGE_S3_ENDPOINT"
#     fi
#   done
