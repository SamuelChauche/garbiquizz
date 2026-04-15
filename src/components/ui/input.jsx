import * as React from 'react';
import { cn } from '@/lib/utils';

const Input = React.forwardRef(({ className, type = 'text', ...props }, ref) => (
  <input
    type={type}
    ref={ref}
    className={cn(
      'flex h-12 w-full rounded-xl border border-input bg-card px-4 py-2 font-serif italic text-lg text-foreground placeholder:text-muted-foreground/60',
      'transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
      'disabled:cursor-not-allowed disabled:opacity-60',
      className,
    )}
    {...props}
  />
));
Input.displayName = 'Input';

export { Input };
