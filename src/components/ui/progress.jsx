import * as React from 'react';
import { cn } from '@/lib/utils';

const Progress = React.forwardRef(({ className, value = 0, ...props }, ref) => (
  <div
    ref={ref}
    role="progressbar"
    aria-valuenow={value}
    aria-valuemin={0}
    aria-valuemax={100}
    className={cn(
      'relative h-1.5 w-full overflow-hidden rounded-full bg-blue_slate-800/40',
      className,
    )}
    {...props}
  >
    <div
      className="h-full bg-gradient-to-r from-icy_aqua via-light_blue to-blue_slate transition-[width] duration-500 ease-out"
      style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
    />
  </div>
));
Progress.displayName = 'Progress';

export { Progress };
