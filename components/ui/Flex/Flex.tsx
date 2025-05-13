import { cva, VariantProps } from "class-variance-authority";
import React, { JSX } from "react";

import { cn } from "@/lib/cn";

const flexVariants = cva("flex", {
  variants: {
    direction: {
      column: "flex-col",
      row: "flex-row",
    },
    justify: {
      between: "justify-between",
      center: "justify-center",
    },
    align: {
      center: "items-center",
    },
    fullWidth: {
      false: undefined,
      true: "w-full",
    },
  },
  defaultVariants: {
    direction: "row",
    justify: "center",
    align: "center",
    fullWidth: false,
  },
});

interface FlexProperties
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof flexVariants> {
  as?: keyof JSX.IntrinsicElements;
}

export const Flex = ({
  className,
  direction,
  justify,
  align,
  fullWidth,
  children,
  as = "div",
}: FlexProperties) => {
  const Component = as;
  return (
    <Component
      className={cn(
        flexVariants({ direction, justify, align, fullWidth, className }),
      )}
    >
      {children}
    </Component>
  );
};
