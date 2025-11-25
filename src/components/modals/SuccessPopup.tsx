import { Modal } from "react-native";
import { Box, Text, TickSquareIcon } from "../ui";
import { useNavigation } from "@react-navigation/native";

type SuccessPopupProps = {
  visible: boolean;
  onClose: () => void;
  side: "BUY" | "SELL";
  symbol: string;
  cryptoAmount: string;
};

export const SuccessPopup = ({
  visible,
  onClose,
  side,
  symbol,
  cryptoAmount,
}: SuccessPopupProps) => {
  const navigation = useNavigation();

  const handlePress = () => {
    onClose();
    navigation.goBack();
  };

  return (
    <Modal visible={visible} transparent animationType="fade">
      <Box flex={1} justifyContent="center" alignItems="center">
        <Box
          backgroundColor="successPopup"
          borderRadius={20}
          padding="3xl"
          alignItems="center"
          gap="l"
        >
          <Text variant="headerXXL2" color="textFourtiary">
            {side === "BUY" ? "Purchased" : "Sold"}
          </Text>
          <TickSquareIcon onPress={handlePress} />
          <Text variant="headerLarge2" color="successPopupLabel">{`Value of ${
            side === "BUY" ? "Purchase" : "Sale"
          }`}</Text>
          <Box flexDirection="row" gap="s">
            <Text variant="headerXXL" color="textFourtiary">
              {cryptoAmount}
            </Text>
            <Text variant="headerXXL" color="textFourtiary">
              {symbol}
            </Text>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};
