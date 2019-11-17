import {
  useRequiredValidator,
  RequiredValidatorProps
} from "./useRequiredValidator";

export type NumberValidatorProps = RequiredValidatorProps & {
  min?: number;
  max?: number;
}

export const useNumberValidator = ({
  label,
  required,
  min,
  max
}: NumberValidatorProps): ((value: number) => string | null) => {
  const requiredValidator = useRequiredValidator({ label, required });

  return (value: number): string | null => {
    if (value && min && value < min) {
      return `${label} must be larger than  ${min}.`;
    }

    if (value && max && value > max) {
      return `${label} must be less than ${max}.`;
    }

    return requiredValidator(value);
  };
};
