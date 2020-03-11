export const dataTypes = [
  { id: 1, name: "integer" },
  { id: 2, name: "string" },
  { id: 3, name: "boolean" },
  // { id:4, name: "decimal" },
  { id: 4, name: "date" },
  { id: 5, name: "master" },
  { id: 6, name: "select" }
];

export const columnFields = [
  {
    id: 1,
    name: "Primary Client First Name",
    value: "primary_client_name_first"
  },
  { id: 2, name: "Account Age In Days", value: "account_age_in_days" },
  { id: 3, name: "Affiliate Name", value: "affiliate_name" },
  { id: 4, name: "Friendly Id", value: "friendly_id" },
  { id: 5, name: "Enrolled Date", value: "enrolled_date" },
  { id: 6, name: "Loan Offer Date", value: "loans.offer_date" },
  { id: 7, name: "Contract Id", value: "contract_id" },
  { id: 8, name: "Id", value: "id" },
  { id: 9, name: "Reference", value: "reference" },
  { id: 10, name: "Status", value: "status" }
  // { id: 11, name: "Affiliate is Active", value: "affiliate_is_active" }
];

export const filterFields = [
  {
    id: 1,
    columnFieldId: 1,
    dataTypeId: 2,
    displayOrder: 1,
    status: "visible"
  },
  {
    id: 2,
    columnFieldId: 2,
    dataTypeId: 1,
    displayOrder: 2,
    status: "visible"
  },
  {
    id: 3,
    columnFieldId: 3,
    dataTypeId: 2,
    displayOrder: 3,
    status: "visible"
  },
  {
    id: 4,
    columnFieldId: 4,
    dataTypeId: 2,
    displayOrder: 4,
    status: "visible"
  },
  {
    id: 5,
    columnFieldId: 5,
    dataTypeId: 4,
    displayOrder: 5,
    status: "visible"
  },
  {
    id: 6,
    columnFieldId: 6,
    dataTypeId: 4,
    displayOrder: 6,
    status: "visible"
  },
  {
    id: 7,
    columnFieldId: 7,
    dataTypeId: 4,
    displayOrder: 7,
    status: "visible"
  },
  {
    id: 8,
    columnFieldId: 8,
    dataTypeId: 1,
    displayOrder: 8,
    status: "visible"
  },
  {
    id: 9,
    columnFieldId: 9,
    dataTypeId: 1,
    displayOrder: 9,
    status: "visible"
  },
  {
    id: 10,
    columnFieldId: 10,
    dataTypeId: 6,
    displayOrder: 10,
    status: "visible"
  }
  // {
  //   id: 11,
  //   columnFieldId: 11,
  //   dataTypeId: 2,
  //   displayOrder: 11,
  //   status: "visible"
  // }
];

export const operator = [
  { id: 1, name: ">", value: "gt" },
  { id: 2, name: "<", value: "lt" },
  { id: 3, name: ">=", value: "gte" },
  { id: 4, name: "<=", value: "lte" },
  { id: 5, name: "=", value: "eq" },
  { id: 6, name: "<>", value: "neq" },
  { id: 7, name: "Contains", value: "contains" },
  { id: 8, name: "Does Not Contains", value: "nt" },
  { id: 9, name: "In", value: "gt" },
  { id: 10, name: "Not In", value: "lt" },
  { id: 11, name: "Is Empty", value: "eq" },
  { id: 12, name: "Is Not Empty", value: "neq" }
];

export const fieldOperator = [
  { id: 1, operatorId: 1, dataTypeId: 1 },
  { id: 2, operatorId: 2, dataTypeId: 1 },
  { id: 3, operatorId: 3, dataTypeId: 1 },
  { id: 4, operatorId: 4, dataTypeId: 1 },
  { id: 5, operatorId: 5, dataTypeId: 1 },
  { id: 6, operatorId: 6, dataTypeId: 1 },
  { id: 7, operatorId: 5, dataTypeId: 2 },
  { id: 8, operatorId: 6, dataTypeId: 2 },
  { id: 9, operatorId: 7, dataTypeId: 2 },
  { id: 10, operatorId: 8, dataTypeId: 2 },

  { id: 11, operatorId: 11, dataTypeId: 2 },
  { id: 12, operatorId: 12, dataTypeId: 2 },

  { id: 11, operatorId: 5, dataTypeId: 3 },
  { id: 12, operatorId: 6, dataTypeId: 3 },

  { id: 13, operatorId: 1, dataTypeId: 4 },
  { id: 14, operatorId: 2, dataTypeId: 4 },
  { id: 15, operatorId: 3, dataTypeId: 4 },
  { id: 16, operatorId: 4, dataTypeId: 4 },
  { id: 17, operatorId: 5, dataTypeId: 4 },
  { id: 18, operatorId: 6, dataTypeId: 4 },
  { id: 19, operatorId: 9, dataTypeId: 4 },
  { id: 20, operatorId: 10, dataTypeId: 4 },

  { id: 21, operatorId: 5, dataTypeId: 5 },
  { id: 22, operatorId: 6, dataTypeId: 5 },
  { id: 23, operatorId: 5, dataTypeId: 6 },
  { id: 24, operatorId: 6, dataTypeId: 6 }
];

export const statuses = [
  { id: 1, text: "Active" },
  { id: 2, text: "Disabled" },
  { id: 3, text: "Deleted" },
  { id: 4, text: "Pending" }
];
