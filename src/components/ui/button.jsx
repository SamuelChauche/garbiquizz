import * as React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground shadow hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-lg',
        cta:
          'bg-icy_aqua-200 text-eggshell shadow hover:bg-icy_aqua-100 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_rgba(27,145,121,0.55)]',
        salmon:
          'bg-powder_blush text-blue_slate-100 shadow hover:bg-powder_blush-400 hover:text-eggshell hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-10px_rgba(255,90,75,0.55)]',
        secondary:
          'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        outline:
          'border border-input bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        accent:
          'bg-accent text-accent-foreground shadow hover:bg-accent/80 hover:-translate-y-0.5',
        destructive:
          'bg-destructive text-destructive-foreground shadow hover:bg-destructive/90',
      },
      size: {
        default: 'h-11 px-6 py-2',
        sm: 'h-9 rounded-full px-4',
        lg: 'h-14 px-8 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  },
);

const Button = React.forwardRef(({ className, variant, size, ...props }, ref) => (
  <button ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />
));
Button.displayName = 'Button';

export { Button, buttonVariants };
