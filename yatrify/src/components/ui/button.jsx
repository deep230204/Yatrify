import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap border border-transparent bg-clip-padding font-medium transition-all outline-none select-none cursor-pointer disabled:pointer-events-none disabled:opacity-50 active:not-aria-[haspopup]:translate-y-px focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",

        outline:
          "border-border bg-background hover:bg-muted hover:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",

        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",

        ghost:
          "hover:bg-muted hover:text-foreground dark:hover:bg-muted/50",

        destructive:
          "bg-destructive text-white hover:bg-destructive/90 shadow-sm",

        link:
          "text-primary underline-offset-4 hover:underline p-0 h-auto",
      },

      size: {
        default:
          "h-9 sm:h-10 gap-2 px-4 sm:px-5 text-xs sm:text-sm rounded-lg [&_svg:not([class*='size-'])]:size-4",

        xs:
          "h-7 sm:h-8 gap-1 px-2.5 sm:px-3 text-[11px] sm:text-xs rounded-md [&_svg:not([class*='size-'])]:size-3",

        sm:
          "h-8 sm:h-9 gap-1.5 sm:gap-2 px-3 sm:px-4 text-xs sm:text-sm rounded-lg [&_svg:not([class*='size-'])]:size-4",

        lg:
          "h-10 sm:h-11 md:h-12 gap-2 sm:gap-2.5 px-4 sm:px-5 md:px-6 text-sm sm:text-base rounded-xl [&_svg:not([class*='size-'])]:size-4 sm:[&_svg:not([class*='size-'])]:size-5",

        xl:
          "h-11 sm:h-12 md:h-14 gap-2 sm:gap-3 px-5 sm:px-6 md:px-8 text-sm sm:text-base md:text-lg rounded-xl md:rounded-2xl font-semibold [&_svg:not([class*='size-'])]:size-5 sm:[&_svg:not([class*='size-'])]:size-6",

        icon:
          "size-8 sm:size-10 rounded-lg [&_svg:not([class*='size-'])]:size-4 sm:[&_svg:not([class*='size-'])]:size-5",

        "icon-sm":
          "size-7 sm:size-8 rounded-md [&_svg:not([class*='size-'])]:size-3 sm:[&_svg:not([class*='size-'])]:size-4",

        "icon-lg":
          "size-10 sm:size-12 rounded-xl [&_svg:not([class*='size-'])]:size-5 sm:[&_svg:not([class*='size-'])]:size-6",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };