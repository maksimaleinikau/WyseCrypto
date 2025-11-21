import { Box, Text, Button, Card, AlertCircleIcon } from "../components/ui";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootParamList } from "../navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  FormProvider,
  useForm,
  useWatch,
  useController,
} from "react-hook-form";
import { FormInput } from "../components/forms/FormInput";
import { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { placeOrderSchema } from "../components/forms/validation/placeOrderSchema";

type PlaceOrderRouteProp = NativeStackScreenProps<RootParamList, "PlaceOrder">;

type FormData = {
  crypto: string;
  usd: string;
};

export const PlaceOrderScreen = ({
  route,
  navigation,
}: PlaceOrderRouteProp) => {
  const { side, title, price, symbol } = route.params;
  const isBuy = side === "BUY";

  const balances = {
    USDT: 15234.56,
    BTC: 0.5234,
    ETH: 4.821,
    BNB: 12.5,
    JPY: 1.01234,
    NZD: 0.555,
    CAD: 134.4,
  };

  const cryptoBalance = balances[symbol as keyof typeof balances] || 0;

  const schema = placeOrderSchema({
    isBuy,
    usdtBalance: balances.USDT,
    cryptoBalance,
    symbol,
  });
  const methods = useForm<FormData>({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      crypto: "",
      usd: "",
    },
  });

  const {
    control,
    setValue,
    formState: { errors, isValid },
  } = methods;

  const usdValue = useWatch({ control, name: "usd" });
  const cryptoValue = useWatch({ control, name: "crypto" });

  useEffect(() => {
    if (!usdValue || usdValue === "" || usdValue === ".") {
      setValue("crypto", "");
      return;
    }

    let usd = parseFloat(usdValue);
    if (isNaN(usd) || usd <= 0) {
      setValue("crypto", "");
      return;
    }

    if (isBuy && usd > balances.USDT) {
      usd = balances.USDT;
      setValue("usd", usd.toString());
    }

    const cryptoAmount = usd / price;

    const formattedCrypto = Number(cryptoAmount.toFixed(8)).toString();
    setValue("crypto", formattedCrypto, { shouldValidate: false });
  }, [usdValue, price, setValue, isBuy]);

  useEffect(() => {
    if (!cryptoValue || cryptoValue === "" || cryptoValue === ".") {
      setValue("usd", "");
      return;
    }

    let crypto = parseFloat(cryptoValue);
    if (isNaN(crypto) || crypto <= 0) {
      setValue("usd", "");
      return;
    }

    const maxCrypto = (balances as any)[symbol] || 0;
    if (!isBuy && crypto > maxCrypto) {
      crypto = maxCrypto;
      setValue("crypto", crypto.toString());
    }

    const usd = crypto * price;
    setValue("usd", Number(usd.toFixed(2)).toString());
  }, [cryptoValue, price, setValue, isBuy, symbol]);

  const handleAll = () => {
    if (isBuy) {
      setValue("usd", balances.USDT.toString());
    } else {
      setValue("crypto", cryptoBalance.toString());
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box flex={1} padding="m" justifyContent="center" alignItems="center">
        <Text variant="headerXL" marginBottom="m">
          {side} {symbol}
        </Text>

        <Box width="100%" gap="m">
          <Card>
            <Box
              flexDirection="row"
              width="100%"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box flexDirection="row" alignItems="center" gap="m">
                <Box
                  width={40}
                  height={40}
                  backgroundColor="mainBackground"
                  borderRadius={10}
                />
                <Text variant="input">
                  {isBuy
                    ? `${balances.USDT} USDT`
                    : `${(balances as any)[symbol] || 0} ${symbol}`}
                </Text>
              </Box>

              <Button
                variant="smallAction"
                onPress={handleAll}
                label={isBuy ? "BUY ALL" : "SELL ALL"}
              />
            </Box>
          </Card>
          <FormProvider {...methods}>
            {isBuy ? (
              <>
                <FormInput
                  name="usd"
                  placeholder="0.00"
                  keyboardType="decimal-pad"
                  label="Amount USDT"
                />
                <FormInput
                  name="crypto"
                  placeholder="0.00"
                  keyboardType="decimal-pad"
                  variant="calculated"
                  label={`Amount ${symbol}`}
                />
              </>
            ) : (
              <>
                <FormInput
                  name="crypto"
                  placeholder="0.00"
                  keyboardType="decimal-pad"
                  label={`Amount ${symbol}`}
                />
                <FormInput
                  name="usd"
                  placeholder="0.00"
                  keyboardType="decimal-pad"
                  label="Amount USDT"
                  variant="calculated"
                />
              </>
            )}
          </FormProvider>
        </Box>
        <Card
          backgroundColor="cardBackgroundInactive"
          alignItems="center"
          gap="m"
          marginHorizontal="m"
        >
          <AlertCircleIcon />
          <Text variant="cardInactive">
            {isBuy
              ? "Purchases will reduce the balance in this application, make sure your balance is sufficient."
              : "Sales proceeds will be sent to the balance in this application."}
          </Text>
        </Card>

        <Button
          label={`Confirm ${side}`}
          variant={isBuy ? "primary" : "confirm"}
          onPress={() => alert(`${side} order placed!`)}
        />
      </Box>
    </SafeAreaView>
  );
};
