import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-wood-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-wood-800 text-white hover:bg-wood-700",
    secondary: "bg-wood-100 text-wood-900 hover:bg-wood-200",
    outline: "border-2 border-wood-800 text-wood-800 hover:bg-wood-50",
    ghost: "text-wood-800 hover:bg-wood-100",
  };

  const sizes = {
    sm: "h-11 md:h-9 px-4 text-sm min-h-[44px] md:min-h-0",
    md: "h-12 md:h-11 px-8 text-base min-h-[48px] md:min-h-0",
    lg: "h-14 px-10 text-lg min-h-[48px]",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
