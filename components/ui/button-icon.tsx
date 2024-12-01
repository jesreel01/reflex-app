import * as React from 'react';
import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { cn } from '~/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonIconVariants = cva(
  'flex items-center justify-center rounded-full web:ring-offset-background web:transition-colors web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'bg-primary web:hover:opacity-90 active:opacity-90',
        destructive: 'bg-destructive web:hover:opacity-90 active:opacity-90',
        outline: 'border border-input bg-background web:hover:bg-accent web:hover:text-accent-foreground active:bg-accent',
        secondary: 'bg-secondary web:hover:opacity-80 active:opacity-80',
        ghost: 'web:hover:bg-accent web:hover:text-accent-foreground active:bg-accent',
      },
      size: {
        default: 'h-10 w-10',
        sm: 'h-8 w-8',
        lg: 'h-12 w-12',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

type ButtonIconProps = React.ComponentPropsWithoutRef<typeof Pressable> &
  VariantProps<typeof buttonIconVariants> & {
    iconName: keyof typeof Ionicons.glyphMap;
    iconSize?: number;
    iconColor?: string;
  };

const ButtonIcon = React.forwardRef<React.ElementRef<typeof Pressable>, ButtonIconProps>(
  ({ className, variant, size, iconName, iconSize = 24, iconColor = 'white', ...props }, ref) => {
    return (
      <Pressable
        className={cn(
          props.disabled && 'opacity-50 web:pointer-events-none',
          buttonIconVariants({ variant, size, className })
        )}
        ref={ref}
        role='button'
        {...props}
      >
        <Ionicons name={iconName} size={iconSize} color={iconColor} />
      </Pressable>
    );
  }
);

ButtonIcon.displayName = 'ButtonIcon';

export { ButtonIcon, buttonIconVariants };
export type { ButtonIconProps };
