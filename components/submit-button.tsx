"use client";

import { type ComponentProps } from "react";
import { useFormStatus } from "react-dom";

import { Button } from "@/components/ui/button";

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
