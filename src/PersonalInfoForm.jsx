import React from "react";
import InputError from "./components/InputError";
import { FormWrapper } from "./FormWrapper";

export function PersonalInfoForm({ register, errors }) {
  return (
    <FormWrapper
      title="User"
      infoText="Please provide your name, email address, and phone number."
    >
      <div className="flex flex-col">
        <div className="flex justify-between mb-1">
          <label>Name</label>
          <InputError errors={errors.username} />
        </div>
        <input
          autoFocus
          placeholder="Vanessa Mint"
          type="text"
          {...register("username", {
            required: "This Field is required",
            maxLength: {
              value: 10,
              message: "Length must be less than ten charachters",
            },
          })}
          className={`custom-input-field ${
            errors.username && "!ring-strawberry-red"
          }`}
        />
      </div>

      <label>Email Address</label>
      <input
        className="custom-input-field"
        {...register("email", {
          required: true,
        })}
      />

      <label>Phone Number</label>
      <input
        type="text"
        className="custom-input-field !ring-strawberry-red"
        {...register("age", {
          required: true,
        })}
      />
    </FormWrapper>
  );
}
