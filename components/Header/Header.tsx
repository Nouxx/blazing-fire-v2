import Link from "next/link";
import { AppLogo } from "../AppLogo/AppLogo"; // todo: use alias import
import { HeaderAuth } from "../HeaderAuth/HeaderAuth";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";
import { User } from "@supabase/supabase-js";

type HeaderProps = {
  user: User | null;
};

// todo: do not drill prop user

export const Header = ({ user }: HeaderProps) => {
  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
      <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
        <Link href={"/"}>
          <AppLogo />
        </Link>
        <div className="flex flex-row gap-3">
          <HeaderAuth user={user} />
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
};
