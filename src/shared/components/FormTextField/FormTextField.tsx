import { useController, useFormContext } from "react-hook-form";
import { StyledTextField } from "./TextField.styles";

export interface FormTextFieldProps {
  name: string;
  placeholder: string;
}
const FormTextField = ({ name, placeholder, ...props }: FormTextFieldProps) => {
  const { control } = useFormContext();
  const {
    field: { onChange, onBlur, ref, name: fieldName, value },
    fieldState: { error },
  } = useController({ control, name });
  const hasError = !!error;
  return (
    <StyledTextField
      name={fieldName}
      onChange={onChange}
      inputRef={ref}
      value={value}
      error={hasError}
      onBlur={onBlur}
      {...props}
    />
  );
};

export default FormTextField;
