export default function Button({ 
  children, 
  variant = 'primary', 
  href, 
  onClick, 
  className = '', 
  isExternal = false,
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 px-5 py-2.5 text-sm";
  
  const variants = {
    primary: "bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-500 shadow-sm shadow-emerald-500/20",
    secondary: "bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-900",
    outline: "border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 focus:ring-emerald-500",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#20bd5a] focus:ring-[#25D366] shadow-sm shadow-[#25D366]/20 font-semibold"
  };

  const combinedClasses = `${baseStyles} ${variants[variant] || variants.primary} ${className}`;

  if (href) {
    return (
      <a 
        href={href} 
        className={combinedClasses} 
        target={isExternal ? "_blank" : "_self"}
        rel={isExternal ? "noopener noreferrer" : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses} {...props}>
      {children}
    </button>
  );
}