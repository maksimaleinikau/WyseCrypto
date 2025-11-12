import { AuthProvider } from "./src/contexts/AuthContext";
import { AppNavigator } from "./src/navigation";
import { ThemeProvider } from "@shopify/restyle";
import theme from "./src/theme/theme";
export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <AppNavigator />
      </ThemeProvider>
    </AuthProvider>
  );
}
