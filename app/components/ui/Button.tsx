interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'ghost';
}

export function Button({ onClick, children, className, variant = 'default' }: ButtonProps) {
  const baseClasses = 'py-2 px-1 md:px-2 rounded transition';
  const variantClasses = variant === 'ghost' ? 'bg-transparent text-blue-500 hover:bg-blue-100' : 'bg-blue-500 text-white hover:bg-blue-600';

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {children}
    </button>
  );
}