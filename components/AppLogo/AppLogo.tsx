import { Flame } from "lucide-react";

import { Flex } from "@/components/ui/Flex/Flex";
import { Typography } from "@/components/ui/Typography/Typography";

export const AppLogo = () => {
  return (
    <Flex className="gap-1">
      <Flame />
      <Typography font="semibold">Blazing Fire</Typography>
    </Flex>
  );
};
