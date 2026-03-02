export default function Card({ children, className = '' }) {
  return (
    <div
      className={`bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-emerald-700/50 transition-colors duration-300 ${className}`}
    >
      {children}
    </div>
  );
}
