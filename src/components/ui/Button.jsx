export default function Button({ children, href, onClick, variant = 'primary', className = '' }) {
  const base = 'inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 cursor-pointer';
  const variants = {
    primary: 'bg-emerald-500 hover:bg-emerald-400 text-gray-950',
    outline: 'border border-emerald-500 text-emerald-400 hover:bg-emerald-500/10',
    ghost: 'text-gray-400 hover:text-white hover:bg-gray-800',
  };

  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
