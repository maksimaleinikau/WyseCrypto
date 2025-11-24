import { useEffect } from "react";
import type { UseFormWatch, UseFormSetValue } from "react-hook-form";

type FormData = { usd: string; crypto: string };

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
    const activeField = isBuy ? usd : crypto;
    const calculatedField = isBuy ? "crypto" : "usd";

    if (activeField === undefined) {
      setValue(calculatedField, "", { shouldValidate: false });
      return;
    }

    if (!activeField?.trim() || activeField.endsWith(".")) {
      return;
    }

    const num = parseFloat(activeField);
    if (isNaN(num) || num <= 0) return;

    const result = isBuy
      ? (num / price).toFixed(8).replace(/\.?0+$/, "")
      : (num * price).toFixed(2);

    setValue(calculatedField, result || "0", { shouldValidate: false });
  }, [isBuy, price, usd, crypto, setValue]);
};
