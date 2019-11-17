import { useStringValidator } from "./useStringValidator";
import { RequiredValidatorProps } from "./useRequiredValidator";

const emailRegex: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const useEmailValidator = ({
  label,
  required = true
}: RequiredValidatorProps): ((value: string) => string | null) => {
  return useStringValidator({ label, required, regex: emailRegex });
};
