interface ArticleCardProps {
  title: string
  description: string
  category: string
  href: string
}

export default function ArticleCard({
  title,
  description,
  category,
  href,
}: ArticleCardProps) {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:translate-y-[-8px] transition-all">
      <div className="h-44 bg-gradient-to-br from-blue-100 to-blue-200"></div>
      <div className="p-6">
        <span className="inline-block text-xs font-bold uppercase bg-blue-50 text-blue-800 rounded-full px-3 py-1 mb-3">
          {category}
        </span>
        <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
        <a href={href} className="text-blue-600 font-semibold hover:underline">
          Ler artigo →
        </a>
      </div>
    </article>
  )
}
