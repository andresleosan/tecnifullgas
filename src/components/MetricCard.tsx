import { Metric } from '../types'

interface MetricCardProps {
  metric: Metric
}

export default function MetricCard({ metric }: MetricCardProps) {
  return (
    <div className="text-center">
      <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-tf-primary to-tf-accent bg-clip-text text-transparent">
        {metric.value}
      </div>
      <div className="text-sm text-tf-text mt-1">{metric.label}</div>
    </div>
  )
}
