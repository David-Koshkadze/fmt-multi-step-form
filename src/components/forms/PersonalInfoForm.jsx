import InputField from "../InputField";
import { FormWrapper } from "./FormWrapper"

import { useFormContext } from "react-hook-form";

export function PersonalInfoForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <FormWrapper
      title="User"
      infoText="Please provide your name, email address, and phone number."
    >
      <InputField
        label="Name"
        register={register("username", {
          required: true,
          maxLength: {
            value: 10,
            message: "Length must be less than ten charachters",
          },
        })}
        error={errors?.username}
      />

      <InputField
        label="Email Address"
        register={register("email", {
          required: true,
        })}
        error={errors?.email}
      />

      <InputField
        label="Age"
        register={register("age", {
          required: true,
        })}
        error={errors?.age}
      />
    </FormWrapper>
  );
}
