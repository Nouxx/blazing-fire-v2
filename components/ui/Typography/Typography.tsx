import { cn } from "@/lib/cn";
import { cva, VariantProps } from "class-variance-authority";

const typographyVariants = cva("", {
  variants: {
    font: {
      semibold: "font-semibold",
    },
  },
});

interface TypographyProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof typographyVariants> {}

export const Typography = ({ className, font, children }: TypographyProps) => {
  return (
    <p className={cn(typographyVariants({ font, className }))}>{children}</p>
  );
};
