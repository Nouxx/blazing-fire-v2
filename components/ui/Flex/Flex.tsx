import { cn } from "@/lib/cn";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const flexVariants = cva("flex", {
  variants: {
    direction: {
      column: "flex-col",
      row: "flex-row",
    },
    justify: {
      between: "justify-between",
    },
    align: {
      center: "items-center",
    },
    fullWidth: {
      false: null,
      true: "w-full",
    },
  },
  defaultVariants: {
    direction: "row",
    justify: "between",
    align: "center",
    fullWidth: false,
  },
});

interface FlexProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof flexVariants> {}

export const Flex = ({
  className,
  direction,
  justify,
  align,
  fullWidth,
  children,
  ...props
}: FlexProps) => {
  return (
    <div
      className={cn(
        flexVariants({ direction, justify, align, fullWidth, className }),
      )}
    >
      {children}
    </div>
  );
};
