import { useFormContext } from "react-hook-form";
import { usePriceInfo } from "../../usePriceInfo";
import AddonCard from "../AddonCard";
import { FormWrapper } from "./FormWrapper";

export function AccountForm() {
  const { getValues } = useFormContext();

  const { servicePrices, formatPrice } = usePriceInfo(
    getValues().yearly_billing
  );

  return (
    <FormWrapper
      title="Pick add-ons"
      infoText="Add-ons help enhance your gaming experience"
    >
      <AddonCard
        name="add_ons"
        id="online_service"
        title="Online Service"
        infoText="Access to multiplayer games"
        price={"+" + formatPrice(servicePrices.online_service)}
      />
      <AddonCard
        name="add_ons"
        id="larger_storage"
        title="Larger Storage"
        infoText="Extra 1TB of cloud save"
        price={"+" + formatPrice(servicePrices.larger_storage)}
      />
      <AddonCard
        name="add_ons"
        id="customizable_profile"
        title="Costomizable Profile"
        infoText="Custom theme on your profile"
        price={"+" + formatPrice(servicePrices.customizable_profile)}
      />
    </FormWrapper>
  );
}
