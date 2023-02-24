import React from "react";
import AddonCard from "./components/AddonCard";
import { FormWrapper } from "./FormWrapper";

export function AccountForm({ register }) {
  return (
    <FormWrapper
      title="Pick add-ons"
      infoText="Add-ons help enhance your gaming experience"
    >
      <AddonCard
        register={register}
        name="add-on"
        id="online-service"
        title="Online Service"
        info="Access to multiplayer games"
        price="+$1/mo"
      />
      <AddonCard
        register={register}
        name="add-on"
        id="larger-storage"
        title="Larger Storage"
        info="Extra 1TB of cloud save"
        price="+2/mo"
      />
      <AddonCard
        register={register}
        name="add-on"
        id="customizable-profile"
        title="Costomizable Profile"
        info="Custom theme on your profile"
        price="+2/mo"
      />
    </FormWrapper>
  );
}
