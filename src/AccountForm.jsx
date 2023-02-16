import React from "react";
import { FormWrapper } from "./FormWrapper";

export function AccountForm() {
  return (
    <FormWrapper>
      <label>Email</label>
      <input type="email" autoFocus required />
      <label>Password</label>
      <input type="password" required />
    </FormWrapper>
  );
}
