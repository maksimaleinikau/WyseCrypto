import * as yup from "yup";

export const placeOrderSchema = ({
  isBuy,
  usdtBalance,
  cryptoBalance,
  symbol,
}: {
  isBuy: boolean;
  usdtBalance: number;
  cryptoBalance: number;
  symbol: string;
}) => {
  return yup.object({
    usd: yup
      .string()
      .defined()
      .test("required", "Please enter an amount", (value) => {
        if (isBuy) return !!value?.trim();
        return true;
      })
      .test("valid-number", "Invalid amount", (value) => {
        if (!value || value === "." || value.trim() === "") return true;
        const num = parseFloat(value);
        return !isNaN(num) && num > 0;
      })
      .test("insufficient-usdt", `Insufficient USDT balance`, (value) => {
        if (!isBuy || !value) return true;
        const num = parseFloat(value);
        return !isNaN(num) && num <= usdtBalance;
      }),

    crypto: yup
      .string()
      .defined()
      .test("required", "Please enter an amount", (value) => {
        if (!isBuy) return !!value?.trim();
        return true;
      })
      .test("valid-number", "Invalid amount", (value) => {
        if (!value || value === "." || value.trim() === "") return true;
        const num = parseFloat(value);
        return !isNaN(num) && num > 0;
      })
      .test(
        "insufficient-crypto",
        `Insufficient ${symbol} balance`,
        (value) => {
          if (isBuy || !value) return true;
          const num = parseFloat(value);
          return !isNaN(num) && num <= cryptoBalance;
        }
      ),
  });
};
