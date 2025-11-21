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
      .test("required", "Please enter an amount", (value) => !!value?.trim())
      .test("valid-number", "Please enter a valid amount", (value) => {
        if (!value || value === "." || value === "") return false;
        const num = parseFloat(value);
        return !isNaN(num) && num > 0;
      })
      .test(
        "insufficient-usdt",
        `Insufficient USDT balance. Available: ${usdtBalance.toLocaleString()} USDT`,
        (value) => {
          if (!isBuy || !value) return true;
          return parseFloat(value) <= usdtBalance;
        }
      ),

    crypto: yup
      .string()
      .defined()
      .test("required", "Please enter an amount", (value) => !!value?.trim())
      .test("valid-number", "Please enter a valid amount", (value) => {
        if (!value || value === "." || value === "") return false;
        const num = parseFloat(value);
        return !isNaN(num) && num > 0;
      })
      .test(
        "insufficient-crypto",
        `Insufficient ${symbol} balance. Available: ${cryptoBalance.toFixed(
          8
        )} ${symbol}`,
        (value) => {
          if (isBuy || !value) return true;
          return parseFloat(value) <= cryptoBalance;
        }
      ),
  });
};
