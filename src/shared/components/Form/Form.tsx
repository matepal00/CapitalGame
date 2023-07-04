import { HTMLProps, PropsWithChildren } from "react";
import {
  FieldValues,
  FormProvider,
  FormProviderProps,
  SubmitHandler,
} from "react-hook-form";
import { StyledForm } from "./Form.styles";
export interface FormProps<T extends FieldValues = FieldValues>
  extends FormProviderProps<T> {
  onSubmit: SubmitHandler<T>;
  formProps?: Partial<HTMLProps<HTMLFormElement>>;
}
const Form = <T extends FieldValues>({
  onSubmit,
  formProps,
  ...props
}: PropsWithChildren<FormProps<T>>) => {
  return (
    <StyledForm role="form" onSubmit={props.handleSubmit(onSubmit)}>
      <FormProvider {...props} />
    </StyledForm>
  );
};

export default Form;
