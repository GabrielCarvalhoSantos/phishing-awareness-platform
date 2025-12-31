import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'danger' | 'warning' | 'info';
  size?: 'sm' | 'md';
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center font-medium rounded-full',
          {
            'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200': variant === 'default',
            'bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300': variant === 'success',
            'bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-300': variant === 'danger',
            'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-300': variant === 'warning',
            'bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300': variant === 'info',
          },
          {
            'px-2 py-0.5 text-xs': size === 'sm',
            'px-3 py-1 text-sm': size === 'md',
          },
          className
        )}
        {...props}
      />
    );
  }
);

Badge.displayName = 'Badge';

export { Badge };