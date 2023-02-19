import React from "react";
import AddonCard from "./components/AddonCard";
import { FormWrapper } from "./FormWrapper";

export function AccountForm() {
  return (
    <FormWrapper
      title="Pick add-ons"
      infoText="Add-ons help enhance your gaming experience"
    >
      <AddonCard id="online-service" title="Online Service"/>
      <AddonCard id="larger-storage" title="Larger Storage"/>
      <AddonCard id="customizable-profile" title="Costomizable Profile"/>
    </FormWrapper>
  );
}
