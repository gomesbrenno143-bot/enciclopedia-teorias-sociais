import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import ArticleCard from '@/components/ArticleCard'

export default function CategoryPage() {
  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: 'Início', href: '/' },
          { label: 'Teorias', href: '/teorias' },
          { label: 'Teorias Clássicas' },
        ]}
      />

      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container">
          <h1 className="text-5xl font-bold mb-4">Teorias Clássicas</h1>
          <p className="text-lg text-gray-300">
            Entenda as grandes correntes sociológicas que fundamentaram a análise da sociedade moderna.
          </p>
        </div>
      </section>

      <main className="container py-20">
        <div className="mb-10">
          <h2 className="text-4xl font-bold mb-4 text-primary">Artigos da categoria</h2>
          <p className="text-gray-600">Conceitos e temas essenciais para entender a base da sociologia.</p>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-20">
          {[
            { title: 'O que é Estrutural-Funcionalismo?', cat: 'Sociologia' },
            { title: 'Marx e a luta de classes', cat: 'Marxismo' },
            { title: 'Max Weber e a burocracia', cat: 'Weber' },
            { title: 'Solidariedade social', cat: 'Durkheim' },
            { title: 'O papel dos símbolos na sociedade', cat: 'Interacionismo' },
            { title: 'Quando a ordem social se rompe', cat: 'Sociedade' },
          ].map((art, i) => (
            <ArticleCard
              key={i}
              title={art.title}
              description="Descrição do artigo sobre teoria social"
              category={art.cat}
              href="/artigos/1"
            />
          ))}
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="font-bold text-primary mb-4">🎯 Temas em Destaque</h3>
            <div className="space-y-3">
              {[
                { name: 'Estrutura social', desc: 'Padrões e instituições que organizam a vida.' },
                { name: 'Divisão do trabalho', desc: 'Como funções diferentes geram interdependência.' },
                { name: 'Autoridade', desc: 'Poder legítimo e formas de comando social.' },
              ].map((tema, i) => (
                <div key={i} className="bg-gray-50 p-3 rounded border-l-4 border-blue-600">
                  <strong className="text-primary text-sm">{tema.name}</strong>
                  <p className="text-xs text-gray-600">{tema.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="font-bold text-primary mb-4">👤 Autores desta área</h3>
            <div className="space-y-3">
              {[
                { name: 'Émile Durkheim', desc: 'Solidariedade e fato social.' },
                { name: 'Karl Marx', desc: 'Classes sociais e materialismo.' },
                { name: 'Max Weber', desc: 'Racionalização e burocracia.' },
              ].map((autor, i) => (
                <div key={i} className="bg-gray-50 p-3 rounded border-l-4 border-blue-600">
                  <strong className="text-primary text-sm">{autor.name}</strong>
                  <p className="text-xs text-gray-600">{autor.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
