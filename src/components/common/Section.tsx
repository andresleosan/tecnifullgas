interface SectionProps {
  id: string
  title: string
  subtitle?: string
  children: React.ReactNode
  backgroundColor?: string
  textColor?: string
}

export default function Section({
  id,
  title,
  subtitle,
  children,
  backgroundColor = 'bg-white',
  textColor = 'text-tf-dark',
}: SectionProps) {
  return (
    <section id={id} className={`px-6 sm:px-8 lg:px-12 py-16 sm:py-24 ${backgroundColor}`}>
      <div className="max-w-6xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && <h2 className={`section-title ${textColor}`}>{title}</h2>}
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
