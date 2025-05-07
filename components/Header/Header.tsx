"use client";

import Link from "next/link";
import { AppLogo } from "../AppLogo/AppLogo"; // todo: use alias import
import type { User } from "@supabase/supabase-js";
import { Flex } from "@/components/ui/Flex/Flex";
import { createContext, PropsWithChildren, useContext } from "react";
import { signOutAction } from "@/app/actions";
import { Button } from "@/components/ui/button";

export type HeaderProps = {
  user: User | null;
} & PropsWithChildren;

// todo: share types
type HeaderContext = {
  user: User | null;
};

const HeaderContext = createContext<HeaderContext>({ user: null });

// todo: use hooks instead to consume context

export const Header = ({ children, user }: HeaderProps) => {
  return (
    <HeaderContext.Provider value={{ user }}>
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <Flex fullWidth className="max-w-5xl p-3 px-5">
          {children}
        </Flex>
      </nav>
    </HeaderContext.Provider>
  );
};

export const HeaderLogo = () => {
  return (
    <Link href={"/"} className="text-sm">
      <AppLogo />
    </Link>
  );
};

export const HeaderAuthSection = () => {
  const { user } = useContext(HeaderContext);

  return user ? (
    <div className="flex items-center gap-4">
      Hey, {user.email}!
      <form action={signOutAction}>
        <Button variant={"outline"} type="submit">
          Sign out
        </Button>
      </form>
    </div>
  ) : (
    <div className="flex gap-2">
      <Button asChild size="sm" variant={"outline"}>
        <Link href="/sign-in">Sign in</Link>
      </Button>
      <Button asChild size="sm" variant={"default"}>
        <Link href="/sign-up">Sign up</Link>
      </Button>
    </div>
  );
};
