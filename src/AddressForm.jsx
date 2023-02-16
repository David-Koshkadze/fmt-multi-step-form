import React from "react";
import { FormWrapper } from "./FormWrapper";

export function AddressForm() {
  return (
    <FormWrapper>
      <label>Street</label>
      <input autoFocus required type="text" />
      <label>City</label>
      <input required type="text" />
    </FormWrapper>
  );
}
