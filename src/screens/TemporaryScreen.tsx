import { Box } from "../components/ui/Box";
import { Text } from "../components/ui/Text";

export const TemporaryScreen = () => {
  return (
    <Box
      flex={1}
      backgroundColor="mainBackground"
      padding="l"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        backgroundColor="secondary"
        justifyContent="center"
        alignItems="center"
        borderRadius={10}
        padding="xl"
      >
        <Text color="primary">Test color</Text>
        <Text variant="headerLarge">Test text variant</Text>
      </Box>
    </Box>
  );
};
