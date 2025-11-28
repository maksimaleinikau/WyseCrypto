import { createSlice } from "@reduxjs/toolkit";

type PortfolioState = {
  holdings: Record<string, number>;
};

const generateDemoPortfolio = (): Record<string, number> => ({
  BTC: Number((Math.random() * 1.5 + 0.1).toFixed(6)),
  ETH: Number((Math.random() * 8 + 0.01).toFixed(4)),
  SOL: Number((Math.random() * 30).toFixed(2)),
  USD: Number((Math.random() * 50000).toFixed(2)),
});

const initialState: PortfolioState = {
  holdings: generateDemoPortfolio(),
};

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {},
});

export default portfolioSlice.reducer;
