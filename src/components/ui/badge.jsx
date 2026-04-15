import * as React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-3 py-0.5 text-xs font-medium uppercase tracking-[0.14em] transition-colors',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary text-primary-foreground',
        secondary: 'border-transparent bg-secondary text-secondary-foreground',
        accent: 'border-transparent bg-accent text-accent-foreground',
        outline: 'text-foreground border-border bg-card/60',
        success: 'border-transparent bg-icy_aqua-200 text-eggshell',
        destructive: 'border-transparent bg-powder_blush-300 text-eggshell',
      },
    },
    defaultVariants: { variant: 'default' },
  },
);

function Badge({ className, variant, ...props }) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
