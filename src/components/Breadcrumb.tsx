interface BreadcrumbProps {
  items: Array<{ label: string; href?: string }>
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="bg-white border-b border-gray-200 py-3">
      <div className="container">
        <div className="flex gap-2 text-sm text-gray-600">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              {item.href ? (
                <a href={item.href} className="text-blue-600 hover:underline">
                  {item.label}
                </a>
              ) : (
                <span>{item.label}</span>
              )}
              {index < items.length - 1 && <span>/</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
