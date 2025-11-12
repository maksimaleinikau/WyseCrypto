import { Box } from "./Box";
import { Text } from "./Text";
import Badge from "./Badge";
import { Security } from "../../navigation";
import { memo } from "react";

type ListItemContentProps = {
  item: Security;
};

export const ListItemContent = memo(({ item }: ListItemContentProps) => {
  const isPositive = item.change24h >= 0;
  const changeLabel = `${isPositive ? "+" : ""}${item.change24h}%`;

  return (
    <Box flexDirection="row" justifyContent="space-between" alignItems="center">
      <Box>
        <Text variant="headerLarge">{item.name}</Text>
        <Text variant="subtitle">${item.price.toLocaleString()}</Text>
      </Box>
      <Badge label={changeLabel} variant={isPositive ? "success" : "failure"} />
    </Box>
  );
});
