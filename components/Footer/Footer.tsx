import { Flex } from "@/components/ui/Flex/Flex";
import { Typography } from "@/components/ui/Typography/Typography";

export const Footer = () => {
  return (
    <Flex
      as="footer"
      fullWidth
      className="border-t mx-auto text-center text-xs gap-8 py-16"
    >
      <Typography size="xs">
        Powered by{" "}
        <Typography size="xs" as="span" font="semibold">
          Supabase
        </Typography>
      </Typography>
    </Flex>
  );
};
