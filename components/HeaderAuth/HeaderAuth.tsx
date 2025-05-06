// todo: move under /Header with composition
import { signOutAction } from "@/app/actions";
import Link from "next/link";
import { Button } from "../ui/button";
import type { User } from "@supabase/supabase-js";

type HeaderAuthProps = {
  user: User | null;
};

export const HeaderAuth = ({ user }: HeaderAuthProps) => {
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
