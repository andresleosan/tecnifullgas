import { CardProps } from '../../types'

export default function Card({ title, description, icon, image, children }: CardProps) {
  return (
    <div className="card">
      {icon && <div className="icon-placeholder mb-4">{icon}</div>}
      {image && <img src={image} alt={title} className="w-full h-48 object-cover rounded mb-4" />}
      <h3 className="text-xl font-bold text-tf-dark mb-3">{title}</h3>
      <p className="text-tf-text text-sm leading-relaxed">{description}</p>
      {children && <div className="mt-4">{children}</div>}
    </div>
  )
}
