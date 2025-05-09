"use client";

import { Button } from "@/components/ui/button";
import { type ComponentProps } from "react";
import { useFormStatus } from "react-dom";

type Properties = ComponentProps<typeof Button> & {
  pendingText?: string;
};

export function SubmitButton({
  children,
  pendingText = "Submitting...",
  ...properties
}: Properties) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" aria-disabled={pending} {...properties}>
      {pending ? pendingText : children}
    </Button>
  );
}
