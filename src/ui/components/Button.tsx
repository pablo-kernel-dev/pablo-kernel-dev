interface ButtonProps {
  children?: React.ReactNode;
  disabled?: boolean;
  leftIcon?: React.ReactElement;
  onClick?: () => void;
  rightIcon?: React.ReactElement;
  styles?: string;
  text?: string;
  title?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

const Button = ({
  children,
  disabled = false,
  leftIcon,
  onClick,
  rightIcon,
  styles,
  text,
  title,
  type = 'button'
}: ButtonProps) => {
  const buttonClasses = `
    transition-colors p-1 md:px-2 rounded-lg flex items-center gap-1
    ${styles}
    ${disabled ? 'bg-stone-700' : 'bg-sky-700 hover:bg-sky-600 text-stone-200 font-medium text-lg'}
  `;

  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      title={title}
      type={type}
    >
      {children || (
        <>
          {leftIcon && <span>{leftIcon}</span>}
          {text && <span>{text}</span>}
          {rightIcon && <span>{rightIcon}</span>}
        </>
      )}
    </button>
  )
}

export { Button };
