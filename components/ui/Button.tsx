import Link from 'next/link'
import { clsx } from 'clsx'
import { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'rose' | 'ghost'

interface ButtonProps {
  variant?: Variant
  href?: string
  children: ReactNode
  className?: string
  external?: boolean
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  fullWidth?: boolean
}

const variantClasses: Record<Variant, string> = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  rose: 'btn-rose',
  ghost:
    'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-brown hover:text-brown-dark transition-colors duration-200 text-sm font-medium',
}

export function Button({
  variant = 'primary',
  href,
  children,
  className,
  external,
  onClick,
  type = 'button',
  disabled,
  fullWidth,
}: ButtonProps) {
  const classes = clsx(variantClasses[variant], fullWidth && 'w-full', className)

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(classes, disabled && 'opacity-50 cursor-not-allowed')}
    >
      {children}
    </button>
  )
}
