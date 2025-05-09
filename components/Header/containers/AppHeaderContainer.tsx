import { AppHeader } from "@/components/Header/views/AppHeader";
import { createClient } from "@/utils/supabase/server";

export const AppHeaderContainer = async () => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser(); // todo: put this in a context

  const normalizedUser = user ?? undefined;

  return <AppHeader user={normalizedUser} />;
};
