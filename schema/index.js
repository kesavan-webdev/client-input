import * as yup from "yup";

export const schemaForBussinessInfo = yup.object().shape({
  companyName: yup.string().required("This is required field"),
  companyDisplayName: yup.string().required("This is required field"),
  clientId: yup.string().required("This is required field"),
  clientShortName: yup.string().required("This is required field"),
  email: yup.string().email().required("This is required field"),
  contactNumber: yup.string().required("This is required field"),
  federalId: yup.string().required("This is required field"),
  website: yup.string().url().required("This is required field"),
  netTerms: yup.string().required("This is required field"),
  jobTerminationNotice: yup.object().required("This is required field"),
  fax: yup.string().required("This is required field"),
  clientStatus: yup.object().required("This is required field"),
  clientCategory: yup.object().required("This is required field"),
  clientOwnership: yup.string().required("This is required field"),
});

export const schemaForBillingInfo = yup.object().shape({
  netTerms: yup.string().required("This is required field"),
  commissionType: yup.string().required("This is required field"),
  billAddress1StreetName: yup.string().required("This is required field"),
  billAddress1County: yup.string().required("This is required field"),
  billAddress1State: yup.string().required("This is required field"),
  billAddress1ZipCode: yup.string().required("This is required field"),
  billAddress1Country: yup.string().required("This is required field"),
  billAddress2StreetName: yup.string().required("This is required field"),
  billAddress2County: yup.string().required("This is required field"),
  billAddress2State: yup.string().required("This is required field"),
  billAddress2ZipCode: yup.string().required("This is required field"),
  billAddress2Country: yup.string().required("This is required field"),
});
