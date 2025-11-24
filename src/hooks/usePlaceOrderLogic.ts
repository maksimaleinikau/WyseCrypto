import type { UseFormSetValue } from "react-hook-form";

export const usePlaceOrderLogic = (
  price: number,
  setValue: UseFormSetValue<{ usd: string; crypto: string }>
) => {
  const sync = (from: "usd" | "crypto", text: string) => {
    setValue(from, text);

    if (text.trim() === "") {
      const to = from === "usd" ? "crypto" : "usd";

      setValue(to, "");
      return;
    }
    if (text.endsWith(".")) {
      return;
    }

    const num = parseFloat(text);
    if (isNaN(num) || num <= 0) {
      return;
    }

    if (from === "usd") {
      const result = (num / price).toFixed(8).replace(/\.?0+$/, "");

      setValue("crypto", result || "0");
    } else {
      const result = (num * price).toFixed(2);

      setValue("usd", result);
    }
  };

  return sync;
};
