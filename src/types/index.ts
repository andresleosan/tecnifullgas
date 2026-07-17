export interface Service {
  id: string
  title: string
  icon: string
  description: string
}

export interface WhyChooseUs {
  id: string
  title: string
  emoji: string
  description: string
}

export interface Step {
  number: number
  title: string
  description: string
}

export interface FAQItem {
  id: string
  question: string
  answer: string
}

export interface ButtonProps {
  variant?: 'primary' | 'secondary'
  text: string
  onClick?: () => void
  href?: string
  className?: string
  target?: string
  rel?: string
}

export interface CardProps {
  title: string
  description: string
  icon?: string
  image?: string
  children?: React.ReactNode
}


