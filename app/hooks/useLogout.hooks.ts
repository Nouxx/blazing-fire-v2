import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function useLogout() {
  const supabase = await createClient();

  const logout = async () => {
    await supabase.auth.signOut();
    return redirect("/sign-in");
  };

  return { logout };
}
