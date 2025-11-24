import { useEffect } from "react";
import type { UseFormSetValue, UseFormWatch } from "react-hook-form";

type FormData = { crypto: string; usd: string };

export const usePlaceOrderLogic = ({
  isBuy,
  price,
  watch,
  setValue,
}: {
  isBuy: boolean;
  price: number;
  watch: UseFormWatch<FormData>;
  setValue: UseFormSetValue<FormData>;
}) => {
  const usd = watch("usd");
  const crypto = watch("crypto");

  useEffect(() => {
    if (isBuy) {
      if (!usd?.trim() || usd === ".") {
        setValue("crypto", "", { shouldValidate: false });
        return;
      }
      if (usd.endsWith(".")) return; //

      const num = parseFloat(usd);
      if (!isNaN(num) && num > 0) {
        const result = (num / price).toFixed(8).replace(/\.?0+$/, "");
        setValue("crypto", result || "0", { shouldValidate: false });
      }
      return;
    }

    if (!isBuy) {
      if (!crypto?.trim() || crypto === ".") {
        setValue("usd", "", { shouldValidate: false });
        return;
      }
      if (crypto.endsWith(".")) return;

      const num = parseFloat(crypto);
      if (!isNaN(num) && num > 0) {
        const result = (num * price).toFixed(2);
        setValue("usd", result, { shouldValidate: false });
      }
    }
  }, [isBuy, price, usd, crypto, setValue]);

  return {};
};
