export default function SectionTitle({ badge, title, subtitle, center = true }) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : 'text-left'} max-w-2xl ${center ? 'mx-auto' : ''}`}>
      {badge && (
        <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-emerald-700 uppercase bg-emerald-100 rounded-full">
          {badge}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-slate-600 sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}