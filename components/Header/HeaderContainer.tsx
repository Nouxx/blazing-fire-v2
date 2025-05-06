import { createClient } from "@/utils/supabase/server";
import { Header } from "./Header";

export const HeaderContainer = async () => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser(); // todo: put this in a context

  return <Header user={user} />;
};
