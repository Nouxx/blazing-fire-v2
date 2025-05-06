import Link from "next/link";
import { AppLogo } from "../AppLogo/AppLogo"; // todo: use alias import
import { HeaderAuth } from "../HeaderAuth/HeaderAuth";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";
import type { User } from "@supabase/supabase-js";
import { Flex } from "@/components/ui/Flex/Flex";

type HeaderProps = {
  user: User | null;
};

// todo: do not drill prop user

export const Header = ({ user }: HeaderProps) => {
  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
      <Flex fullWidth className="max-w-5xl p-3 px-5 text-sm">
        <Link href={"/"}>
          <AppLogo />
        </Link>
        <Flex className="gap-3">
          <HeaderAuth user={user} />
          <ThemeSwitcher />
        </Flex>
      </Flex>
    </nav>
  );
};
