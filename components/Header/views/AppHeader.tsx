import {
  Header,
  HeaderAuthSection,
  HeaderLogo,
  type HeaderProperties,
} from "@/components/Header/Header";
import { ThemeSwitcher } from "@/components/ThemeSwitcher/ThemeSwitcher";
import { Flex } from "@/components/ui/Flex/Flex";

export const AppHeader = ({ user }: HeaderProperties) => {
  return (
    <Header user={user}>
      <HeaderLogo />
      <Flex className="gap-3">
        <HeaderAuthSection />
        <ThemeSwitcher />
      </Flex>
    </Header>
  );
};
