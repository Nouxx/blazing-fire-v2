import { Construction } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";

export default function LandingPage() {
  return (
    <Alert>
      <Construction className="h-4 w-4" />
      <AlertTitle>Under construction!</AlertTitle>
      <AlertDescription>
        There is not much to show at the moment.
      </AlertDescription>
    </Alert>
  );
}
