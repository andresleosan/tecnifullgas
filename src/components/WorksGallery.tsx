import Section from './common/Section'

export default function WorksGallery() {
  return (
    <Section
      id="trabajos"
      title="Trabajos Realizados"
      subtitle="Proyectos que muestran nuestra calidad"
      backgroundColor="bg-tf-bg-light"
    >
      <div className="gallery-placeholder text-center">
        <div>
          <p className="text-lg font-semibold text-tf-dark">Galería de proyectos</p>
          <p className="text-sm text-tf-text mt-2">Las imágenes se cargarán aquí desde /public/trabajos/</p>
          <p className="text-xs text-tf-text mt-4">Formato: JPG o PNG | Mínimo: 800x600px</p>
        </div>
      </div>
    </Section>
  )
}
