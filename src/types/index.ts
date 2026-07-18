export interface Service {
  id: string;
  title: string;
  image: string;
  description: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ButtonProps {
  variant?: 'primary' | 'secondary';
  text: string;
  onClick?: () => void;
  href?: string;
  className?: string;
  target?: string;
  rel?: string;
}

export interface CardProps {
  title: string;
  description: string;
  image?: string;
  children?: React.ReactNode;
}
