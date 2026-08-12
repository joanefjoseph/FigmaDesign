export const WEB3_FORMS_TO_EMAIL = "contact@showstop.io";
export const WEB3_FORMS_FROM_NAME = "Show Stop Website";

export const WEB3_FORM_SUBJECTS = {
  demo: "New Request A Demo Submission",
  support: "New Get Support Submission",
  sales: "New Contact Sales Submission",
  partner: "New Become A Partner Submission",
} as const;

export function createWeb3FormsConfig(accessKey: string, subject: string) {
  return {
    accessKey,
    toEmail: WEB3_FORMS_TO_EMAIL,
    subject,
    fromName: WEB3_FORMS_FROM_NAME,
  };
}
