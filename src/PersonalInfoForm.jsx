import React from "react";
import InputField from "./components/InputField";
import { FormWrapper } from "./FormWrapper";

export function PersonalInfoForm({ register, errors }) {
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
        error={errors.username}
      />

      <InputField
        label="Email Address"
        register={register("email", {
          required: true,
        })}
        error={errors.email}
      />

      <InputField 
        label="Age"
        register={register("age", {
          required: true,
        })}
        error={errors.age}
      />

    </FormWrapper>
  );
}
