import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  styles?: string;
  text?: string;
}

const Button: React.FC<ButtonProps> = ({
  leftIcon,
  rightIcon,
  styles,
  text,
  children,
  disabled,
  ...props
}) => {
  const buttonClasses = `
    text-lg font-medium flex items-center gap-1 rounded-lg p-1 md:px-2 transition-colors 
    ${disabled ? "bg-stone-700" : "bg-sky-700 hover:bg-sky-600"} 
    ${styles || ""}
  `;

  return (
    <button className={buttonClasses} disabled={disabled} {...props}>
      {leftIcon && <span>{leftIcon}</span>}
      {text && <span>{text}</span>}
      {children}
      {rightIcon && <span>{rightIcon}</span>}
    </button>
  );
};

export { Button };
