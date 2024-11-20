interface TextProps {
  children?: React.ReactNode;
  color?: string;
  colorSecondary?: boolean;
  disabled?: boolean;
  size?: 'text-xs' | 'text-sm' | 'text-base' | 'text-lg' | 'text-xl' | 'text-2xl' | 'text-3xl' | 'text-4xl' | 'text-5xl';
  styles?: string;
  tag?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  text?: string;
  weight?: 'font-thin' | 'font-light' | 'font-normal' | 'font-medium' | 'font-semibold' | 'font-bold' | 'font-extrabold' | 'font-black';
}

const Text = ({
  children,
  color = 'text-stone-800 dark:text-stone-200',
  colorSecondary = false,
  disabled = false,
  size = 'text-lg',
  styles,
  tag: Tag = 'p',
  text,
  weight = 'font-medium'
}: TextProps) => {
  const colorText = (colorSecondary && 'text-stone-200') || (disabled ? 'text-stone-500' : color);

  return (
    <Tag className={`${colorText} ${weight} ${size} ${styles}`}>
      {children || text}
    </Tag>
  );
}

export { Text };
