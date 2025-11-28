import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Security {
  symbol: string;
  name: string;
  currency: string;
  price: number;
  changePercentage: number;
  change: number;
}

interface MarketState {
  securities: Security[];
}

const initialSecurities: Security[] = [
  {
    symbol: "BTCUSD",
    name: "Bitcoin",
    currency: "BTC",
    price: 118741.16,
    changePercentage: -3.19,
    change: -3912.45,
  },
  {
    symbol: "ETHUSD",
    name: "Ethereum",
    currency: "ETH",
    price: 4856.42,
    changePercentage: 2.87,
    change: 135.67,
  },
  {
    symbol: "SOLUSD",
    name: "Solana",
    currency: "SOL",
    price: 298.74,
    changePercentage: 7.23,
    change: 20.14,
  },
  {
    symbol: "XAUUSD",
    name: "Gold Spot",
    currency: "XAU",
    price: 2684.55,
    changePercentage: 1.45,
    change: 38.21,
  },
  {
    symbol: "XAGUSD",
    name: "Silver Spot",
    currency: "XAG",
    price: 32.18,
    changePercentage: -2.11,
    change: -0.69,
  },
  {
    symbol: "USDRUB",
    name: "USD/RUB",
    currency: "RUB",
    price: 108.45,
    changePercentage: 0.87,
    change: 0.94,
  },
  {
    symbol: "EURUSD",
    name: "Euro",
    currency: "EUR",
    price: 1.17639,
    changePercentage: -0.09,
    change: -0.001,
  },
  {
    symbol: "GBPUSD",
    name: "British Pound",
    currency: "GBP",
    price: 1.37582,
    changePercentage: 0.45,
    change: 0.0062,
  },
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    currency: "USD",
    price: 223.45,
    changePercentage: -0.87,
    change: -1.96,
  },
  {
    symbol: "TSLA",
    name: "Tesla Inc.",
    currency: "USD",
    price: 418.32,
    changePercentage: 5.67,
    change: 22.45,
  },
  {
    symbol: "GOOGL",
    name: "Alphabet Class A",
    currency: "USD",
    price: 188.71,
    changePercentage: 1.23,
    change: 2.29,
  },
  {
    symbol: "SPX500",
    name: "S&P 500 Index",
    currency: "USD",
    price: 5823.41,
    changePercentage: -0.34,
    change: -19.87,
  },
];

const initialState: MarketState = {
  securities: initialSecurities,
};

export const marketSlice = createSlice({
  name: "market",
  initialState,
  reducers: {
    updateSecurityPrice: (
      state,
      action: PayloadAction<{
        symbol: string;
        price: number;
        changePercentage: number;
        change: number;
      }>
    ) => {
      const security = state.securities.find(
        (s) => s.symbol === action.payload.symbol
      );
      if (security) {
        security.price = action.payload.price;
        security.changePercentage = action.payload.changePercentage;
        security.change = action.payload.change;
      }
    },
  },
});

export const { updateSecurityPrice } = marketSlice.actions;
export default marketSlice.reducer;
