import { cva, VariantProps } from "class-variance-authority";
import { JSX } from "react";

import { cn } from "@/lib/cn";

const typographyVariants = cva("", {
  variants: {
    font: {
      semibold: "font-semibold",
      normal: "font-normal",
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
    },
  },
  defaultVariants: {
    font: "normal",
    size: "sm",
  },
});

interface TypographyProperties
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof typographyVariants> {
  as?: keyof JSX.IntrinsicElements;
}

export const Typography = ({
  className,
  font,
  children,
  size,
  as = "p",
}: TypographyProperties) => {
  const Component = as;
  return (
    <Component className={cn(typographyVariants({ font, size, className }))}>
      {children}
    </Component>
  );
};
