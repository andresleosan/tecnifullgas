import Card from './common/Card'
import Section from './common/Section'
import { SERVICES } from '../utils/constants'

export default function Services() {
  return (
    <Section
      id="servicios"
      title="Nuestros Servicios"
      subtitle="Soluciones completas para todas tus necesidades de gas"
      backgroundColor="bg-tf-bg-light"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.map((service) => (
          <Card
            key={service.id}
            title={service.title}
            icon={service.icon}
            description={service.description}
          />
        ))}
      </div>
    </Section>
  )
}
