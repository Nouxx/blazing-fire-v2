import { Flex } from "@/components/ui/Flex/Flex";
import { Typography } from "@/components/ui/Typography/Typography";

export const Footer = () => {
  const appVersion = process.env.NEXT_PUBLIC_APP_VERSION;

  return (
    <Flex
      as="footer"
      fullWidth
      className="border-t mx-auto text-center text-xs gap-8 py-16"
    >
      <Typography size="xs">version {appVersion}</Typography>
    </Flex>
  );
};
