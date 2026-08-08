import { type Plugin } from 'graphql-yoga';
import { NoSchemaIntrospectionCustomRule } from 'graphql/validation/rules/custom/NoSchemaIntrospectionCustomRule';
import { isDefined } from 'twenty-shared/utils';

import { type GraphQLContext } from 'src/engine/api/graphql/graphql-config/graphql-config.service';
import { removeSuggestionInErrorsRule } from 'src/engine/core-modules/graphql/rules/remove-suggestion-in-errors.rule';

// Unauthenticated requests never get schema introspection or query
// suggestions, in every environment - this is API exposure hardening, not an
// Enterprise/licensing feature, so it must not be gated behind NODE_ENV.
export const useDisableIntrospectionAndSuggestionsForUnauthenticatedUsers =
  (): Plugin<GraphQLContext> => ({
    onValidate: ({ context, addValidationRule }) => {
      const isAuthenticated = isDefined(context.req.workspace);

      if (!isAuthenticated) {
        addValidationRule(NoSchemaIntrospectionCustomRule);
        addValidationRule(removeSuggestionInErrorsRule);
      }
    },
  });
