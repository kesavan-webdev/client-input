import * as yup from "yup";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const schemaForBussinessInfo = yup.object().shape({
  companyName: yup.string().required("This is required field"),
  companyDisplayName: yup.string().required("This is required field"),
  clientId: yup
    .number()
    .label("Client Id")
    .typeError(({ label, type }) => `${label} must be a ${type}`)
    .required("This is required field"),
  clientShortName: yup.string().required("This is required field"),
  email: yup.string().email().required("This is required field"),
  contactNumber: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10, "too short")
    .max(10, "too long")
    .label("Contact Number")
    .typeError(({ label, type }) => `${label} must be a ${type}`)
    .required("This is required field"),
  federalId: yup
    .number()
    .label("Federal Id")
    .typeError(({ label, type }) => `${label} must be a ${type}`)
    .required("This is required field"),
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
