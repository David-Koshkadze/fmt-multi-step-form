import React from "react";
import { FormWrapper } from "./FormWrapper";

export function PersonalInfoForm({ register, errors }) {
  return (
    <FormWrapper
      title="User"
      infoText="Please provide your name, email address, and phone number."
    >
      <label>Name</label>
      <input
        autoFocus
        placeholder="Vanessa Mint"
        type="text"
        {...register("username", { required: true })}
        className="custom-input-field"
      />
      {errors.username && (
        <span className="text-sm text-strawberry-red">
          This field is required
        </span>
      )}

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
