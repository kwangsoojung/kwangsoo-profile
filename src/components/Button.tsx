import type { AnchorHTMLAttributes, ButtonHTMLAttributes, PropsWithChildren } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

type SharedButtonProps = PropsWithChildren<{
  variant?: ButtonVariant;
  className?: string;
}>;

type ButtonOnlyProps = SharedButtonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> & {
    href?: undefined;
  };

type AnchorButtonProps = SharedButtonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className'> & {
    href: string;
  };

type ButtonProps = ButtonOnlyProps | AnchorButtonProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'border-brand-700 bg-brand-700 text-ivory-50 hover:bg-brand-900',
  secondary: 'border-ink-950 bg-transparent text-ink-950 hover:bg-ink-950 hover:text-ivory-50',
  ghost: 'border-transparent bg-transparent text-ink-700 hover:text-brand-700',
};

function isAnchorButton(props: ButtonProps): props is AnchorButtonProps {
  return typeof props.href === 'string';
}

export function Button(props: ButtonProps) {
  const { children, className = '', variant = 'primary' } = props;
  const classes = [
    'inline-flex min-h-11 items-center justify-center gap-2 rounded-full border px-5 text-sm font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700',
    variantClasses[variant],
    className,
  ].join(' ');

  if (isAnchorButton(props)) {
    const { children: _children, className: _className, variant: _variant, ...anchorProps } = props;

    return (
      <a className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const {
    children: _children,
    className: _className,
    variant: _variant,
    type,
    ...buttonProps
  } = props;

  return (
    <button className={classes} {...buttonProps} type={type ?? 'button'}>
      {children}
    </button>
  );
}
