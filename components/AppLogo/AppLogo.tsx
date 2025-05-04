import { Flame } from "lucide-react";

// todo: create typography component
// todo: create a flex component

export const AppLogo = () => {
  return (
    <div className="flex items-center gap-1">
      <Flame />
      <p className="font-semibold">Blazing Fire</p>
    </div>
  );
};
