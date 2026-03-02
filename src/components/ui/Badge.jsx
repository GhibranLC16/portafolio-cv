export default function Badge({ children, variant = 'default' }) {
  const variants = {
    default: 'bg-emerald-900/40 text-emerald-300 border border-emerald-700/50',
    gray: 'bg-gray-800 text-gray-300 border border-gray-700',
    blue: 'bg-blue-900/40 text-blue-300 border border-blue-700/50',
  };

  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
