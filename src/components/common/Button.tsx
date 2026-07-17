import { ButtonProps } from '../../types';

export default function Button({
  variant = 'primary',
  text,
  onClick,
  href,
  className = '',
  target,
  rel,
}: ButtonProps) {
  const baseClasses = 'font-semibold transition-all duration-300 rounded-lg';

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-tf-primary to-tf-accent text-white px-6 py-3 hover:shadow-lg hover:scale-[1.03]',
    secondary:
      'border-2 border-tf-primary text-tf-primary px-6 py-3 hover:bg-tf-hover hover:text-white',
  };

  const finalClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={finalClasses}>
        {text}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={finalClasses}>
      {text}
    </button>
  );
}
