import React from "react";
import { FormWrapper } from "./FormWrapper";

export function PersonalInfoForm({
  username,
  emailAddress,
  phoneNumber,
  updateFields,
}) {
  return (
    <FormWrapper
      title="User"
      infoText="Please provide your name, email address, and phone number."
    >
      <label>Name</label>
      <input
        autoFocus
        required
        placeholder="Vanessa Mint"
        type="text"
        value={username}
        onChange={(e) => updateFields({ username: e.target.value })}
        className="custom-input-field"
      />
      <label>Email Address</label>
      <input
        required
        type="email"
        value={emailAddress}
        onChange={(e) => updateFields({ emailAddress: e.target.value })}
        className="custom-input-field"
      />
      <label>Phone Number</label>
      <input
        required
        type="text"
        value={phoneNumber}
        onChange={(e) => updateFields({ phoneNumber: e.target.value })}
        className="custom-input-field !ring-strawberry-red"
      />
    </FormWrapper>
  );
}
