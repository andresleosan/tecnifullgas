import { WORK_PHOTOS } from '../data/workPhotos';

export default function WorkPhotos({
  service,
}: {
  service?: 'calentadores' | 'estufas' | 'fugas';
}) {
  const photos = service
    ? WORK_PHOTOS.filter((photo) => photo.services.includes(service))
    : WORK_PHOTOS;

  if (photos.length === 0) return null;

  return (
    <section className="bg-tf-bg-light px-6 py-14 sm:px-8 sm:py-16 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-tf-dark sm:text-4xl">Trabajos de Tecnifullgas</h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-tf-text sm:text-lg">
          Fotografías de revisiones y mantenimiento de equipos a gas.
        </p>

        <div
          className={`mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 ${photos.length > 2 ? 'lg:grid-cols-3' : ''}`}
        >
          {photos.map((photo) => (
            <figure
              key={photo.id}
              className="overflow-hidden rounded-2xl border border-tf-border bg-white"
            >
              <picture className="block aspect-[4/3] bg-slate-100">
                <source
                  srcSet={`${photo.src.replace(/\.webp$/, '-480.webp')} 480w, ${
                    photo.width > 960
                      ? `${photo.src.replace(/\.webp$/, '-960.webp')} 960w`
                      : `${photo.src} ${photo.width}w`
                  }`}
                  sizes="(min-width: 1024px) 368px, (min-width: 768px) calc((100vw - 88px) / 2), calc(100vw - 48px)"
                  type="image/webp"
                />
                <img
                  src={photo.fallback}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-contain"
                />
              </picture>
              <figcaption className="px-5 py-4 text-base font-semibold leading-7 text-tf-dark">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
