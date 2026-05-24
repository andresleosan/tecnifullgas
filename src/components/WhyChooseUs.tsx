import { WHY_CHOOSE_US } from '../utils/constants'

export default function WhyChooseUs() {
  return (
    <section id="por-que-elegirnos" className="px-6 sm:px-8 lg:px-12 py-16 sm:py-24 bg-tf-dark text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title text-white">¿Por qué TecnifullGas?</h2>
          <p className="text-xl font-semibold text-tf-accent mt-2">4 razones para confiar en nosotros</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {WHY_CHOOSE_US.map((item) => (
            <div
              key={item.id}
              className="bg-tf-dark bg-opacity-50 border border-tf-primary border-opacity-20 rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold text-tf-accent mb-3">
                {item.emoji} {item.title}
              </h3>
              <p className="text-gray-100 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
