
interface ButtonProps {
  text: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  bgColor?: string;
}

export const Button = ({ text, variant = 'primary', className, bgColor }: ButtonProps) => {
  const baseClasses = "rounded-md px-6 py-3 font-semibold transition-colors cursor-pointer";
  
  const getVariantClasses = () => {
    if (bgColor) {
      // Si se proporciona un bgColor personalizado, usarlo
      return variant === 'primary' 
        ? `text-white hover:opacity-90` 
        : `bg-white border-2 text-[${bgColor}] hover:bg-[${bgColor}] hover:text-white`;
    }
    
    // Comportamiento por defecto
    return variant === 'primary' 
      ? "bg-green text-white hover:bg-green/90" 
      : "bg-white border-2 border-green text-green hover:bg-white/90 ";
  };
  
  const backgroundColorStyle = bgColor && variant === 'primary' 
    ? { backgroundColor: bgColor } 
    : {};
    
  const borderColorStyle = bgColor && variant === 'secondary'
    ? { borderColor: bgColor }
    : {};
  
  return (
    <button 
      className={`${baseClasses} ${getVariantClasses()} ${className}`}
      style={{ ...backgroundColorStyle, ...borderColorStyle }}
    >
      {text}
    </button>
  );
};