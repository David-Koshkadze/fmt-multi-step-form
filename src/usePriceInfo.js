import { useEffect, useState } from "react";

const defaultPrices = {
  arcade: 9,
  advanced: 12,
  pro: 15,
};

const defaultServicePrices = {
  online_service: 1,
  larger_storage: 2,
  customizable_profile: 2,
};

export function usePriceInfo(isYearly) {
  const [prices, setPrices] = useState(defaultPrices);
  const [servicePrices, setServicePrices] = useState(defaultServicePrices);

  const formatPrice = (price, hasPlus = false) => {
    return `${hasPlus ? "$" : ""}$${price}/${isYearly ? "yr" : "mo"}`;
  };

  useEffect(() => {
    if (isYearly) {
      setPrices({
        arcade: 90,
        advanced: 120,
        pro: 150,
      });

      setServicePrices({
        online_service: 10,
        larger_storage: 20,
        customizable_profile: 20,
      });
    } else {
      setPrices(defaultPrices);
      setServicePrices(defaultServicePrices);
    }
  }, [isYearly]);

  return {
    prices,
    servicePrices,
    formatPrice,
  };
}
