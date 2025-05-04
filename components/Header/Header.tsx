import Link from "next/link";
import { AppLogo } from "../AppLogo/AppLogo"; // use alias import
import { HeaderAuth } from "../HeaderAuth/HeaderAuth";
import { ThemeSwitcher } from "../theme-switcher";

export const Header = () => {
  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
      <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
        <Link href={"/"}>
          <AppLogo />
        </Link>
        <div className="flex flex-row gap-3">
          <HeaderAuth />
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
};
