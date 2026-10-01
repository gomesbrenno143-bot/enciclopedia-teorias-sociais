interface StatCardProps {
  label: string
  value: string | number
  change?: string
}

export default function StatCard({ label, value, change }: StatCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <div className="text-xs uppercase text-gray-600 font-semibold mb-2">
        {label}
      </div>
      <div className="text-4xl font-bold text-primary mb-2">{value}</div>
      {change && <div className="text-sm text-green-600 font-semibold">{change}</div>}
    </div>
  )
}
