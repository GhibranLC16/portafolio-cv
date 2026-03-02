export default function SectionTitle({ children, subtitle }) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
        {children}
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-lg max-w-xl mx-auto">{subtitle}</p>
      )}
      <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500" />
    </div>
  );
}
