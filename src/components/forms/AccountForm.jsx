import AddonCard from "../AddonCard";
import { FormWrapper } from "./FormWrapper";

export function AccountForm() {
  return (
    <FormWrapper
      title="Pick add-ons"
      infoText="Add-ons help enhance your gaming experience"
    >
      <AddonCard
        name="add_ons"
        id="online-service"
        title="Online Service"
        infoText="Access to multiplayer games"
        price="+$1/mo"
      />
      <AddonCard
        name="add_ons"
        id="larger-storage"
        title="Larger Storage"
        infoText="Extra 1TB of cloud save"
        price="+2/mo"
      />
      <AddonCard
        name="add_ons"
        id="customizable-profile"
        title="Costomizable Profile"
        infoText="Custom theme on your profile"
        price="+2/mo"
      />
    </FormWrapper>
  );
}
