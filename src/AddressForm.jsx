import React from "react";
import { FormWrapper } from "./FormWrapper";

export function AddressForm({ street, city, updateFields }) {
  return (
    <FormWrapper title="Address Information">
      <label>Street</label>
      <input
        autoFocus
        required
        type="text"
        value={street}
        onChange={(e) => updateFields({ street: e.target.value })}
      />
      <label>City</label>
      <input
        required
        type="text"
        value={city}
        onChange={(e) => updateFields({ city: e.target.value })}
      />
    </FormWrapper>
  );
}
