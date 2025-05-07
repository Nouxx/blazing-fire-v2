import { createClient } from "@/utils/supabase/server";
import { AppHeader } from "@/components/Header/views/AppHeader";

export const AppHeaderContainer = async () => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser(); // todo: put this in a context

  return <AppHeader user={user} />;
};
