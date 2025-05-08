import { Flex } from "@/components/ui/Flex/Flex";
import { Typography } from "@/components/ui/Typography/Typography";
import { Flame } from "lucide-react";

export const AppLogo = () => {
  return (
    <Flex className="gap-1">
      <Flame />
      <Typography font="semibold">Blazing Fire</Typography>
    </Flex>
  );
};
