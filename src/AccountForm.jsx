import React from "react";
import { FormWrapper } from "./FormWrapper";

export function AccountForm({ email, password, updateFields }) {
  return (
    <FormWrapper title="Account">
      <label>Email</label>
      <input
        type="email"
        autoFocus
        required
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      />
      <label>Password</label>
      <input
        type="password"
        required
        value={password}
        onChange={(e) => updateFields({ password: e.target.value })}
      />
    </FormWrapper>
  );
}
