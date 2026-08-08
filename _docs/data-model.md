# Real Estate Data Model (v3, India)

Data model for the Twenty-based real estate CRM, targeting the **Indian market**, covering
residential sale, rental, commercial, and property management.

Supersedes the US-oriented v2 and the rough sketch in `discussions.md` Section 4.

---

## 1. Why the US model does not transfer

The v2 model was built on US assumptions. Almost none of them hold in India.

| US assumption | India reality |
|---|---|
| MLS as a single source of listings | No MLS. Listings live on 99acres, MagicBricks, Housing.com, NoBroker, and direct. One property is listed on several portals at once, each with its own listing ID |
| Escrow company holds funds, escrow officer coordinates | No escrow. Token amount paid directly, then Agreement to Sell, then Sale Deed |
| Title company issues title insurance | No title insurance market. An advocate does a 30-year title search and issues a legal opinion. Encumbrance Certificate is the key document |
| Closing is a signing appointment | Closing is **registration at the Sub-Registrar Office**. Stamp duty and registration charges are paid there |
| Living area in square feet | Three different areas: carpet, built-up, super built-up. RERA mandates carpet area disclosure. Portals quote super built-up, inflated 20 to 30 percent |
| Bedrooms and bathrooms | BHK configuration (1BHK, 2.5BHK, 3BHK) is the primary unit of description |
| Contingency periods with waiver deadlines | No contingency framework. Risk is managed through legal due diligence, NOCs, and staged payments |
| Individual seller | For a large share of transactions the counterparty is a **builder** selling an under-construction unit inside a **project** |
| No transaction tax on the buyer | Buyer pays stamp duty (5 to 7 percent, state-dependent), registration charges (~1 percent), GST on under-construction (5 percent), and deducts 1 percent TDS on any sale above ₹50 lakh |

Three India-specific entities that did not exist in v2: **Project**, **Tenancy**, and a
completely different **Document** set.

---

## 2. Object map

| Object | Twenty type | Purpose |
|---|---|---|
| **Project** | New custom object | Builder development that contains many units. RERA registration lives here |
| **Property** | New custom object | The permanent physical unit or plot |
| **Listing** | New custom object | Time-boxed mandate to sell or rent, one per portal set |
| **Enquiry** | New custom object | Site visit and buyer interest, the India equivalent of a Showing |
| **Negotiation** | New custom object | Price negotiation and token, the India equivalent of an Offer |
| **Transaction** | **Extend standard `Opportunity`** (relabel "Transaction") | Sale or rental deal from token to registration |
| **Milestone** | New custom object | Dated legal, financial, and handover steps |
| **Tenancy** | New custom object | Ongoing lease lifecycle after a rental deal closes |
| **Document** | New custom object | Indian title chain, approvals, and statutory filings |
| **Maintenance Request** | New custom object | Property management module only |
| **Person** | Extend standard object | Buyers, sellers, tenants, landlords, leads, advocates, vendors |
| **Company** | Extend standard object | Builders, banks, law firms, societies, agencies |

### Why Transaction maps onto Opportunity

Twenty's email and calendar sync works **only on People, Companies, and Opportunities**. A custom
Transaction object would silently lose auto-logging of every email about the deal. Opportunity's
native fields map cleanly: `amount` = agreement value, `closeDate` = registration date, `stage` =
transaction stage.

### Objects deliberately NOT created

| Not built | Instead | Reason |
|---|---|---|
| `Lead` | Fields on Person | A lead is a person. A separate object means a lossy convert step and no email sync on leads |
| `Buyer` / `Seller` / `Tenant` | Multi-select on Person | Twenty's guidance: fields for categories. One person is often several of these |
| `Vendor` | `companyType` on Company | |
| `Commission` | Omitted per scope decision | Add later as fields on Transaction. See Section 8 |
| `Task` / `Note` | Native Twenty | Already on every object |

---

## 3. Project

Groups units in a builder development. Skipped for independent resale properties.

| Field | Type | Notes |
|---|---|---|
| `name` | TEXT | e.g. Prestige Lakeside Habitat |
| `builder` | RELATION to Company | |
| `reraNumber` | TEXT | **Legally required on every advertisement** |
| `reraExpiryDate` | DATE | |
| `projectType` | SELECT | Apartment, Villa, Plotted Development, Row House, Commercial Office, Retail, Mixed Use, Warehouse, Co-living |
| `status` | SELECT | New Launch, Pre-Launch, Under Construction, Nearing Possession, Ready to Move, Completed |
| `location` | ADDRESS | Locality, city, PIN |
| `totalTowers` / `totalUnits` / `totalFloors` | NUMBER | |
| `landArea` | NUMBER | Acres |
| `launchDate` / `promisedPossessionDate` / `revisedPossessionDate` | DATE | Delay tracking is a real buyer concern |
| `priceRangeMin` / `priceRangeMax` | CURRENCY | |
| `amenities` | MULTI_SELECT | Clubhouse, Gym, Swimming Pool, Kids Play Area, Power Backup, Security, Lift, Parking, Landscaped Garden, Sports Court, Jogging Track |
| `approvals` | MULTI_SELECT | RERA, Commencement Certificate, Occupancy Certificate, Completion Certificate, Fire NOC, Environment Clearance, BESCOM/Electricity, Water Board |
| `bankApprovals` | RELATION to Company (many) | Which banks pre-approved loans for this project. Sales-relevant |
| `brochure` / `floorPlans` | FILES | |

---

## 4. Property

The permanent physical unit. Never deleted, never duplicated.

| Field | Type | Notes |
|---|---|---|
| `project` | RELATION to Project | Nullable. Empty for independent resale |
| `unitNumber` | TEXT | Flat or plot number |
| `address` | ADDRESS | |
| `locality` / `subLocality` / `city` / `pinCode` | TEXT | Primary search dimension in India |
| `propertyCategory` | SELECT | Residential, Commercial, Industrial, Agricultural, Institutional, Other. **Drives which field groups appear.** See Section 4a |
| `propertyType` | SELECT | Full list in Section 4a |
| `bhkConfiguration` | SELECT | 1RK, 1BHK, 1.5BHK, 2BHK, 2.5BHK, 3BHK, 3.5BHK, 4BHK, 5BHK, 6BHK, 6+BHK. **Residential built units only.** Left blank for plots, shops, warehouses, and land |
| `bedrooms` / `bathrooms` / `balconies` | NUMBER | |
| **Area (all three required)** | | |
| `carpetArea` | NUMBER | RERA-mandated disclosure. The only honest number |
| `builtUpArea` | NUMBER | Carpet plus walls |
| `superBuiltUpArea` | NUMBER | What portals advertise. Includes common area share |
| `areaUnit` | SELECT | Sq Ft, Sq M, Sq Yard, Acre, Guntha, Cent, Bigha. Regional variation is real |
| `loadingFactor` | NUMBER | Computed: (super built-up minus carpet) / carpet. Buyers ask |
| `plotArea` / `plotDimensions` | NUMBER / TEXT | For plots and independent houses |
| **India-specific attributes** | | |
| `facing` | SELECT | North, North-East, East, South-East, South, South-West, West, North-West. Vastu matters to a large share of buyers |
| `vastuCompliant` | BOOLEAN | |
| `floorNumber` / `totalFloors` | NUMBER | Ground and top floor price differently |
| `furnishingStatus` | SELECT | Unfurnished, Semi-Furnished, Fully Furnished |
| `furnishingDetails` | MULTI_SELECT | Modular Kitchen, Wardrobes, ACs, Beds, Sofa, Fridge, Washing Machine, Geyser, Curtains, Light Fittings |
| `possessionStatus` | SELECT | Ready to Move, Under Construction, New Launch |
| `ageOfProperty` | SELECT | New, 0-1 yr, 1-5 yr, 5-10 yr, 10-15 yr, 15+ yr |
| `coveredParking` / `openParking` | NUMBER | |
| `waterSource` | MULTI_SELECT | Corporation, Borewell, Tanker |
| `powerBackup` | SELECT | None, Partial, Full |
| `liftAvailable` | BOOLEAN | |
| `gatedCommunity` | BOOLEAN | |
| **Legal and ownership** | | |
| `ownershipType` | SELECT | Freehold, Leasehold, Co-operative Society, Power of Attorney, Joint Ownership. **PoA properties carry real title risk, flag them** |
| `khataType` | SELECT | A Khata, B Khata, Not Applicable. Bangalore-specific and legally significant. B Khata blocks bank loans |
| `propertyTaxId` | TEXT | Khata / Patta / Property ID |
| `surveyNumber` | TEXT | |
| `circleRateValue` | CURRENCY | Government guidance value. Stamp duty is charged on the higher of this and the agreement value |
| `annualPropertyTax` | CURRENCY | |
| `maintenanceChargePerSqFt` | CURRENCY | |
| `societyName` | TEXT | |
| `mortgagedTo` | RELATION to Company | If under an existing loan, a bank NOC is needed to sell |
| `owner` | RELATION to Person | |
| `ownerCompany` | RELATION to Company | Trusts, HUFs, companies |
| `coOwners` | RELATION to Person (many) | Joint ownership is common. **All co-owners must sign the sale deed** |
| `photos` | FILES | |

Relations out: Listings, Enquiries, Negotiations, Transactions, Tenancies, Documents.

---

## 4a. Property types and category-specific fields

A flat, a shop, a warehouse, and five acres of farmland share almost nothing. `propertyCategory`
controls which group of fields is relevant, so the form is not cluttered with irrelevant inputs.

### Full property type list

**Residential**
Apartment / Flat, Independent House, Villa, Builder Floor, Row House, Duplex, Triplex, Penthouse,
Studio / 1RK, Serviced Apartment, Bungalow, Farmhouse (residential use), Chawl, Residential Plot,
PG / Hostel, Co-living Unit.

**Commercial**
Office Space, Co-working Space, Business Center, Retail Shop, Showroom, Commercial Complex Unit,
Restaurant / Cafe Space, Hotel / Resort, Banquet Hall, Clinic / Hospital Space, Commercial Plot.

**Industrial**
Warehouse / Godown, Factory, Industrial Shed, Manufacturing Unit, Cold Storage, Industrial Plot.

**Agricultural**
Agricultural Land, Farm Land, Orchard / Plantation, Poultry / Dairy Farm, Farmhouse with Land.

**Institutional**
School / College Building, Hospital Building, Religious / Trust Property, Institutional Plot.

**Other**
Parking Space, Hoarding / Advertising Site, Land for Joint Development, Redevelopment Opportunity.

### Fields shown for residential built units

BHK configuration, bedrooms, bathrooms, balconies, floor number, total floors, furnishing status and
details, facing and Vastu, carpet / built-up / super built-up area, covered and open parking, lift,
power backup, water source, gated community, society name, maintenance charge.

### Fields shown for any plot or land

| Field | Notes |
|---|---|
| `plotArea` / `areaUnit` | Sq Ft, Sq Yard, Acre, Guntha, Cent, Bigha, Hectare. Regional units matter |
| `plotDimensions` | Length x breadth in feet |
| `roadWidthFeet` | Width of the road the plot faces. Directly affects value and buildability |
| `numberOfOpenSides` | 1, 2, 3, 4 |
| `isCornerPlot` | Corner plots carry a premium |
| `boundaryWall` | None, Partial, Complete |
| `layoutApproval` | BDA, BMRDA, DTCP, CMDA, HMDA, MHADA, Gram Panchayat, Unapproved. **Unapproved layouts block bank loans** |
| `conversionStatus` | Agricultural, DC Converted, NA Converted, Not Required |
| `permissibleFloors` / `far` | Floor Area Ratio, controls what can be built |
| `waterConnection` / `electricityConnection` | BOOLEAN |

### Additional fields for agricultural land

| Field | Notes |
|---|---|
| `landClassification` | Dry, Wet, Irrigated, Garden, Plantation |
| `waterSourceAgri` | Borewell, Open Well, Canal, River, Lake, Rain-fed |
| `borewellCount` / `borewellDepth` | |
| `soilType` | Red, Black, Loamy, Sandy, Alluvial |
| `currentCrop` | Coconut, Areca, Mango, Sugarcane, Paddy, Vacant |
| `rtcPahaniNumber` | RTC / Pahani (Karnataka) or 7/12 Extract (Maharashtra). The core land record |
| `surveyNumber` / `hissaNumber` | |
| `buyerEligibilityRestricted` | **BOOLEAN. Critical.** Karnataka, Maharashtra, Gujarat and others restrict who may buy agricultural land. Some states require the buyer to already be an agriculturist or cap income. Getting this wrong voids the sale |
| `roadAccess` | Tar Road, Mud Road, No Direct Access |
| `fencing` | |
| `distanceFromHighwayKm` | |

### Additional fields for commercial

| Field | Notes |
|---|---|
| `frontageFeet` | Retail value is largely frontage |
| `ceilingHeightFeet` | |
| `fitOutStatus` | Bare Shell, Warm Shell, Fully Fitted, Plug and Play |
| `powerLoadKva` | |
| `washroomsPantry` | |
| `signageRights` | BOOLEAN |
| `parkingSpaces` | |
| `currentlyLeased` | If tenanted, the sale is an investment sale |
| `existingTenant` / `existingRent` / `leaseExpiryDate` | |
| `rentalYieldPct` | Computed. How commercial investors compare properties |

### Additional fields for industrial

| Field | Notes |
|---|---|
| `shedAreaSqFt` / `openLandSqFt` | Usually quoted separately |
| `eaveHeightFeet` | Determines racking capacity |
| `floorLoadCapacity` | Tonnes per square metre |
| `powerLoadKva` / `dgBackup` | |
| `dockLevellers` | Count |
| `containerAccess` | Whether a 40-foot trailer can reach the loading bay |
| `pollutionBoardCategory` | Red, Orange, Green, White. Determines what industries can operate there |
| `effluentTreatment` | BOOLEAN |

---

## 5. Listing

A time-boxed mandate to sell or rent. Multiple portal IDs because one property is listed everywhere.

| Field | Type | Notes |
|---|---|---|
| `property` | RELATION to Property | **Required** |
| `listingFor` | SELECT | Sale, Rent, Lease (commercial), PG/Co-living |
| `source` | SELECT | Our Mandate, External, Direct Owner, Builder Inventory |
| `mandateType` | SELECT | Exclusive, Non-Exclusive, Open |
| `status` | SELECT | Draft, Active, Under Negotiation, Token Received, Agreement Signed, Closed, Expired, Withdrawn, On Hold |
| `reraAgentNumber` | TEXT | **Legally required on every advertisement** |
| **Portal presence** | | |
| `portals` | MULTI_SELECT | 99acres, MagicBricks, Housing.com, NoBroker, Square Yards, Own Website, Facebook, WhatsApp Groups |
| `portal99acresId` / `portalMagicBricksId` / `portalHousingId` | TEXT | Separate fields so each can be linked and reconciled |
| **Pricing, sale** | | |
| `expectedPrice` | CURRENCY | |
| `pricePerSqFt` | CURRENCY | How Indian buyers compare |
| `priceNegotiable` | BOOLEAN | Effectively always true, but sellers signal firmness |
| `allInclusive` | BOOLEAN | Whether the quoted price includes registration, GST, parking, club charges |
| `otherCharges` | TEXT | PLC, EDC/IDC, car parking, club membership, maintenance deposit |
| **Pricing, rental** | | |
| `monthlyRent` | CURRENCY | |
| `securityDeposit` | CURRENCY | 2 to 3 months in the north, up to 10 months in Bangalore |
| `maintenanceCharges` | CURRENCY | |
| `maintenanceIncluded` | BOOLEAN | |
| `lockInPeriodMonths` / `noticePeriodMonths` | NUMBER | |
| `availableFrom` | DATE | |
| `tenantPreference` | MULTI_SELECT | Family, Bachelors, Company Lease, Students, Any |
| `petsAllowed` | BOOLEAN | |
| **Commercial** | | |
| `seatingCapacity` / `cabins` / `workstations` | NUMBER | |
| `leaseTermYears` / `rentEscalationPct` / `escalationFrequencyYears` | NUMBER | Typical: 5 percent every year, or 15 percent every 3 years |
| **Ops** | | |
| `assignedAgent` / `coAgent` | RELATION to WorkspaceMember | |
| `seller` / `landlord` | RELATION to Person | |
| `listedDate` / `expiryDate` | DATE | |
| `daysOnMarket` | NUMBER | Computed |
| `keyAvailableWith` | TEXT | Who holds the keys for site visits |
| `visitInstructions` | TEXT | |

---

## 6. Enquiry (site visit)

The India equivalent of a Showing. Points at **Property**, so buyer-side visits to properties we do
not have a mandate on are still tracked.

| Field | Type | Notes |
|---|---|---|
| `property` | RELATION to Property | **Required** |
| `listing` | RELATION to Listing | Nullable |
| `client` | RELATION to Person | |
| `agent` | RELATION to WorkspaceMember | |
| `enquiryType` | SELECT | Portal Enquiry, Phone Call, WhatsApp, Walk-in, Site Visit, Virtual Tour, Referral |
| `scheduledAt` | DATE_TIME | Drives the calendar view |
| `status` | SELECT | Requested, Scheduled, Visit Done, No Show, Cancelled, Rescheduled |
| `visitCount` | NUMBER | Second and third visits signal real intent |
| `interestLevel` | SELECT | Hot, Warm, Cold, Not Interested |
| `priceOpinion` | SELECT | Overpriced, Fair, Underpriced |
| `clientFeedback` / `agentNotes` | TEXT | One shareable with the owner, one not |
| `objections` | MULTI_SELECT | Price, Location, Vastu, Floor, Carpet Area, Condition, Legal/Khata, Loan Eligibility, Possession Timeline, Parking |
| `feedbackSharedWithOwner` | BOOLEAN | |
| `accompaniedByFamily` | BOOLEAN | Family involvement is a strong buying signal in India |

---

## 7. Negotiation

Price negotiation and token payment. Each counter is a **new record** linked to its parent.

| Field | Type | Notes |
|---|---|---|
| `property` | RELATION to Property | **Required** |
| `listing` | RELATION to Listing | Nullable |
| `client` | RELATION to Person | Buyer or prospective tenant |
| `dealType` | SELECT | Sale, Rent, Lease |
| `representationSide` | SELECT | We Represent Seller, We Represent Buyer, Both Sides |
| `offeredPrice` | CURRENCY | Or offered monthly rent |
| `status` | SELECT | Draft, Offered, Countered by Owner, Countered by Client, Verbally Agreed, Token Received, Accepted, Rejected, Withdrawn, Lapsed |
| `counterOf` | RELATION to Negotiation (self) | Preserves the negotiation trail |
| `counterRound` | NUMBER | |
| `tokenAmount` | CURRENCY | |
| `tokenPaidDate` | DATE | |
| `tokenReceiptNumber` | TEXT | |
| `tokenRefundable` | BOOLEAN | Forfeiture terms are a common dispute |
| `paymentMode` | SELECT | Bank Transfer, Cheque, UPI, Demand Draft, Home Loan |
| `loanRequired` | BOOLEAN | |
| `loanAmount` / `loanBank` | CURRENCY / RELATION to Company | |
| `proposedRegistrationDate` | DATE | Proposed. Actual lives on Transaction |
| `possessionTerms` | TEXT | |
| `inclusions` | TEXT | Fittings, wardrobes, ACs. A frequent source of last-minute disputes |
| `validUntil` | DATE | |
| `counterpartyAgent` | RELATION to Person | The other side's broker |

---

## 8. Transaction (extended Opportunity)

| Field | Type | Notes |
|---|---|---|
| `stage` | SELECT | Token Received, Agreement to Sell, Loan Processing, Legal Due Diligence, NOCs Pending, Ready for Registration, Registered, Possession Handed Over, Mutation Complete, Closed, Cancelled. **Kanban pipeline** |
| `amount` | CURRENCY | Agreement value (native field) |
| `dealType` | SELECT | Sale, Rent, Lease |
| `property` / `listing` / `acceptedNegotiation` | RELATION | |
| `transactionType` | SELECT | Resale, Primary/Builder Sale, Under Construction, Plot Sale, Rental, Commercial Lease, Distress/Auction, NRI Sale, Inherited/Probate |
| `representationSide` | SELECT | Seller Side, Buyer Side, Both Sides |
| `buyer` / `seller` | RELATION to Person | |
| **Money** | | |
| `agreementValue` | CURRENCY | |
| `circleRateValue` | CURRENCY | Stamp duty is charged on whichever is higher |
| `stampDutyAmount` | CURRENCY | 5 to 7 percent, state-dependent |
| `registrationCharges` | CURRENCY | Approximately 1 percent |
| `gstApplicable` | BOOLEAN | Under-construction only. Nil once the Occupancy Certificate is issued |
| `gstAmount` | CURRENCY | 5 percent, or 1 percent for affordable housing |
| `tdsApplicable` | BOOLEAN | Mandatory above ₹50 lakh |
| `tdsAmount` | CURRENCY | 1 percent, deducted by the buyer |
| `form26QBFiled` | BOOLEAN | Statutory filing, easy to forget, penalised |
| `totalCostToBuyer` | CURRENCY | Computed. Materially higher than the sticker price |
| **Loan** | | |
| `loanBank` | RELATION to Company | |
| `loanOfficer` | RELATION to Person | |
| `loanAmountSanctioned` / `loanSanctionDate` / `loanDisbursementDate` | CURRENCY / DATE | Disbursement is tranched for under-construction |
| `paymentPlan` | SELECT | Full Payment, Construction Linked (CLP), Possession Linked, Subvention, Flexi |
| **Legal and registration** | | |
| `advocate` | RELATION to Person | Handles title search and legal opinion |
| `agreementToSellDate` | DATE | |
| `agreementRegistered` | BOOLEAN | |
| `saleDeedNumber` | TEXT | |
| `registrationDate` | DATE | **The actual closing event** |
| `subRegistrarOffice` | TEXT | |
| `possessionDate` | DATE | Can be well after registration |
| `mutationDate` | DATE | Khata transfer into the buyer's name. The deal is not truly done until this happens |
| `encumbranceCertificateObtained` | BOOLEAN | |
| **Counterparties** | | |
| `counterpartyAgency` | RELATION to Company | |
| `counterpartyAgent` | RELATION to Person | |
| `transactionCoordinator` | RELATION to WorkspaceMember | |
| `cancellationReason` | SELECT | Loan Rejected, Title Defect, Buyer Backed Out, Seller Backed Out, Price Disagreement, Khata/Approval Issue, Funding Shortfall, Family Objection |
| `linkedTransaction` | RELATION to Opportunity (self) | Client selling one property to buy another, contingent on each other |

> **Brokerage and commission fields are intentionally omitted per scope decision.** Adding them later
> is a small change: `brokerageRatePct`, `brokerageAmount`, `brokerageReceivedFrom` (Buyer / Seller /
> Both), `brokerageInvoiceRaised`, `brokerageReceivedDate`, plus optional per-agent splits. Indian
> norms are 1 to 2 percent per side on sale and one month's rent on rental.

---

## 9. Milestone

Dated legal, financial, and handover steps. The operational spine of the transaction.

| Field | Type |
|---|---|
| `transaction` | RELATION to Opportunity (**required**) |
| `milestoneType` | SELECT (see below) |
| `dueDate` | DATE |
| `status` | SELECT: Pending, In Progress, Completed, Delayed, Waived, Blocked |
| `completedDate` | DATE |
| `isCritical` | BOOLEAN |
| `responsibleParty` | SELECT: Buyer, Seller, Our Agent, Counterparty Agent, Bank, Advocate, Builder, Society |
| `blockerNotes` | TEXT |

**Sale milestone set** (auto-generated on token receipt):

Token Receipt, Agreement to Sell Drafted, ATS Executed, ATS Registered, Loan Application Submitted,
Loan Sanction Letter, Title Search Started, Legal Opinion Received, Encumbrance Certificate Obtained,
Society NOC, Bank NOC (existing mortgage), Builder NOC, Sale Deed Drafted, Stamp Duty Paid, TDS Paid
(Form 26QB), Registration Appointment Booked, **Sale Deed Registered**, Loan Disbursed, Possession
Handover, Mutation / Khata Transfer, Electricity Meter Transfer, Water Connection Transfer, Society
Membership Transfer.

**Under-construction adds:** Allotment Letter, Builder-Buyer Agreement, Construction Milestone
Payments (recurring), Occupancy Certificate, Completion Certificate, Snag List, Final Handover.

**Rental set:** Token, Agreement Drafted, Police Verification, Agreement Executed, Agreement
Registered, Security Deposit Received, Handover / Inventory Check, Utility Transfer.

---

## 10. Tenancy

The ongoing lease lifecycle. A closed rental Transaction produces a Tenancy, which then lives for
years. This is what a closed Opportunity cannot represent.

| Field | Type | Notes |
|---|---|---|
| `property` | RELATION to Property | |
| `landlord` / `tenant` | RELATION to Person | |
| `originatingTransaction` | RELATION to Opportunity | |
| `agreementType` | SELECT | Leave and License (11 month), Lease Deed, Commercial Lease, PG Agreement |
| `startDate` / `endDate` | DATE | 11 months is standard, to stay outside rent control |
| `lockInPeriodMonths` / `noticePeriodMonths` | NUMBER | |
| `monthlyRent` | CURRENCY | |
| `securityDeposit` | CURRENCY | |
| `maintenancePaidBy` | SELECT | Tenant, Landlord, Shared |
| `rentDueDay` | NUMBER | Day of month |
| `rentEscalationPct` / `escalationFrequencyMonths` | NUMBER | Typically 5 to 10 percent every 11 or 12 months |
| `nextEscalationDate` | DATE | |
| `registered` | BOOLEAN | |
| `policeVerificationDone` | BOOLEAN | Mandatory in many cities |
| `status` | SELECT | Active, Expiring Soon, Renewal In Progress, Renewed, Notice Served, Vacated, Terminated, In Dispute |
| `renewalOf` | RELATION to Tenancy (self) | Renewal chain across years |
| `vacatedDate` | DATE | |
| `depositRefunded` | BOOLEAN |
| `depositDeductions` / `deductionReason` | CURRENCY / TEXT | The most common source of end-of-tenancy disputes |
| `inventoryList` | FILES | Photos and fixture list at handover, protects both sides |

---

## 11. Document

The Indian document set. Title in India is established by an unbroken chain of documents rather than
by insurance, so this object is load-bearing, not administrative.

| Field | Type |
|---|---|
| `documentType` | SELECT (see below) |
| `file` | FILES |
| `status` | SELECT: Not Started, Requested, Received, Under Review, Verified, Rejected, Expired |
| `documentDate` / `expiryDate` | DATE |
| `property` / `transaction` / `listing` / `tenancy` | RELATION |
| `requiredForCompliance` | BOOLEAN |
| `verifiedBy` | RELATION to Person (advocate) |
| `notes` | TEXT |

**Title chain:** Sale Deed, Mother Deed / Parent Documents (30 year chain), Encumbrance Certificate,
Khata Certificate, Khata Extract, Mutation Register Extract, Property Tax Paid Receipts, Survey
Sketch, Partition Deed, Gift Deed, Will / Succession Certificate, Power of Attorney.

**Approvals:** RERA Registration Certificate, Approved Building Plan, Commencement Certificate,
Occupancy Certificate, Completion Certificate, Fire NOC, Environment Clearance, Land Conversion
Certificate (agricultural to non-agricultural).

**Transaction:** Agreement to Sell, Allotment Letter, Builder-Buyer Agreement, Sale Deed Draft,
Possession Letter, Handover Checklist, No Objection Certificates (society, bank, builder).

**Financial and statutory:** Loan Sanction Letter, Disbursement Letter, Stamp Duty Challan,
Registration Receipt, Form 26QB (TDS), GST Invoice, Bank Statement / Payment Proof.

**Parties:** PAN Card, Address Proof, Photographs, Aadhaar (see the privacy warning in Section 14).

**Rental:** Leave and License Agreement, Police Verification Form, Inventory List, Deposit Receipt.

---

## 12. Person and Company extensions

### Person

| Field | Type | Notes |
|---|---|---|
| `contactType` | **MULTI_SELECT** | Buyer, Seller, Tenant, Landlord, Investor, NRI Client, Past Client, Sphere of Influence, Advocate, Broker, Builder Contact, Vendor, Referral Source. Must be multi |
| `leadSource` | SELECT | 99acres, MagicBricks, Housing.com, NoBroker, Website, Walk-in, Referral, Past Client, WhatsApp, Instagram, Facebook, Google Ads, Hoarding/Signage, Cold Call, Society Contact |
| `leadStatus` | SELECT | New, Attempting Contact, Contacted, Site Visit Scheduled, Site Visit Done, Negotiating, Token Paid, Closed Won, Nurture, Dead |
| `leadReceivedAt` / `firstContactedAt` | DATE_TIME | These two compute speed-to-lead, the single strongest conversion predictor |
| `assignedAgent` | RELATION to WorkspaceMember | |
| `referredBy` | RELATION to Person | |
| `preferredLanguage` | SELECT | Genuinely operational in India, drives agent assignment |
| `whatsappNumber` | PHONES | Primary channel. Often different from the calling number |
| **Buyer criteria** | | |
| `budgetMin` / `budgetMax` | CURRENCY | |
| `loanRequired` / `loanPreApproved` | BOOLEAN | |
| `preApprovedAmount` / `preApprovalBank` | CURRENCY / RELATION | |
| `desiredLocalities` | MULTI_SELECT | Primary search axis in India |
| `desiredBhk` | MULTI_SELECT | |
| `desiredPropertyTypes` | MULTI_SELECT | |
| `preferredFacing` | MULTI_SELECT | Vastu preference. Real, and a common deal-breaker |
| `vastuImportant` | BOOLEAN | |
| `possessionPreference` | SELECT | Ready to Move, Under Construction, Either |
| `purchasePurpose` | SELECT | Self Use, Investment, Rental Income, Second Home |
| `buyingTimeline` | SELECT | Immediate, 1-3 months, 3-6 months, 6-12 months, Exploring |
| `mustHaveFeatures` | MULTI_SELECT | |
| **Seller and landlord** | | |
| `ownedProperties` | RELATION to Property (many) | |
| `sellingTimeline` / `sellingMotivation` | SELECT / TEXT | |
| **NRI** | | |
| `isNri` | BOOLEAN | NRI transactions have extra requirements: 20 percent TDS instead of 1 percent, RBI/FEMA rules, repatriation limits, often a Power of Attorney holder in India |
| `countryOfResidence` | TEXT | |
| `poaHolder` | RELATION to Person | |
| **KYC** | | |
| `panNumber` | TEXT | Required for any transaction above ₹50 lakh |
| **Nurture** | | |
| `birthday` / `purchaseAnniversary` | DATE | |
| `doNotContact` | BOOLEAN | |

### Company

| Field | Type |
|---|---|
| `companyType` | MULTI_SELECT: Builder/Developer, Bank/NBFC, Law Firm, Brokerage, Housing Society, Property Management, Interior/Contractor, Packers and Movers, Photography, Valuation, Architect, Corporate Client (company leases) |
| `reraNumber` | TEXT |
| `gstNumber` | TEXT |
| `empanelledWith` | MULTI_SELECT | For banks: which projects they lend against |

---

## 13. Property management module

Build only if the agency manages properties on behalf of owners. Sits on top of Tenancy.

**Maintenance Request** object: property, tenancy, raisedBy (tenant), category (Plumbing, Electrical,
Carpentry, Appliance, Pest Control, Painting, Civil, Other), priority, status (Open, Assigned, In
Progress, Resolved, Closed), assignedVendor (Company), estimatedCost, actualCost, costBorneBy
(Tenant / Landlord), photos, resolvedDate.

**Rent collection** is handled through recurring Milestone records against the Tenancy rather than a
separate object: rent due, rent received, receipt number, late fee. A scheduled workflow generates
them monthly.

---

## 14. Legal and privacy cautions

1. **Do not store full Aadhaar numbers.** The Aadhaar Act restricts storage and sharing by private
   entities. Store a masked value or the last four digits only, or omit entirely and keep the scanned
   copy in Documents with restricted access.
2. **DPDP Act 2023** applies. Client data requires a lawful basis and a stated purpose, and data
   subjects have deletion rights. The CRM should support deleting a person and their data on request.
   Twenty's soft-delete plus hard-delete covers this if the workflow is documented.
3. **RERA advertising rule.** The agent RERA registration number must appear on every listing and
   advertisement. Keep it on Listing so it is never omitted.
4. **PoA-based sales carry title risk.** Flag `ownershipType = Power of Attorney` visually and require
   a legal opinion before proceeding.
5. **B Khata properties** typically cannot be financed by banks. Surfacing `khataType` early prevents
   wasted pipeline.
6. **Do not model any cash or off-books component of a transaction.** Only the registered agreement
   value belongs in the system.

---

## 15. Views, automations, and dashboards

**Views**
- Listings kanban by `status`, Transactions kanban by `stage`, Negotiations kanban by `status`
- Site visits calendar by `scheduledAt`, Milestones calendar by `dueDate`
- Leads table sorted by `leadReceivedAt`, filtered on `leadStatus`
- Tenancies expiring in 60 days, rent escalations due, deposits pending refund
- "Under construction with possession overdue", "B Khata or PoA properties needing legal review"

**Automations**
- New portal lead: auto-assign by locality and language, send WhatsApp/email intro, create a call task
- Token received: open Transaction, generate the full milestone set from the token date
- Milestone overdue or due in 3 days: notify agent and transaction coordinator
- Site visit completed: request feedback, roll into a weekly owner report
- Registration completed: create possession and mutation milestones, move client to Past Client
- Tenancy 60 days from expiry: start the renewal conversation. 30 days: escalate
- Rent escalation date reached: notify landlord and tenant
- New listing matches a buyer's saved criteria (locality, BHK, budget, facing): alert the agent
- Loan sanction not received 21 days after application: flag the deal as at risk

**Dashboards**
- Pipeline value by stage, expected registrations this month and quarter
- Speed-to-lead, lead to site visit, site visit to token, token to registration conversion
- Lead source ROI by portal
- Average days from token to registration, and where deals stall
- Agent leaderboard by closed value and site visits conducted
- Inventory ageing: listings by days on market and locality
- Rental book: active tenancies, occupancy rate, upcoming renewals

---

## 16. Known integration constraint: listing portals

This is the India equivalent of the MLS problem flagged in `discussions.md`.

99acres, MagicBricks, and Housing.com **do not offer open public APIs**. Options are:

1. **Manual entry with portal ID capture** (what this model assumes). Agents post to portals as they
   do today and record the listing ID against the Listing record. Zero integration risk.
2. **Partner or enterprise API access.** Available on some paid broker plans, negotiated per portal,
   with varying capability. Timeline depends on the portal's commercial process, not on engineering.
3. **Lead capture by email parsing.** Portals send lead notification emails. A workflow can parse
   those into Person records automatically. This is the highest value per unit of effort and does not
   require portal cooperation.
4. **Scraping.** Violates terms of service. Not recommended.

Recommendation: build option 1 now, add option 3 early since it automates lead capture without any
portal dependency, and treat option 2 as a separate project with its own timeline.

---

## 17. Suggested build order

| Phase | Contents |
|---|---|
| 1 | Property, Listing, Enquiry, Negotiation, Transaction, Milestone, Person and Company extensions. Core kanban and calendar views. INR currency |
| 2 | Document object with the Indian document set, compliance checklists per transaction type |
| 3 | Project and builder inventory, under-construction milestone sets |
| 4 | Tenancy, rental workflows, renewal and escalation automations |
| 5 | Commercial fields, portal lead-email parsing, dashboards |
| 6 | Property management: Maintenance Requests, rent collection cycles, owner statements |
