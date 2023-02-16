import React from "react";
import { FormWrapper } from "./FormWrapper";

export function UserForm() {
  return (
    <FormWrapper>
      <label>First Name</label>
      <input autofocus required type="text" />
      <label>Last Name</label>
      <input required type="text" />
      <label>Age</label>
      <input required min={1} type="number" />
    </FormWrapper>
  );
}
