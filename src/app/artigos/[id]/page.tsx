import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'

export default function ArticlePage() {
  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: 'Início', href: '/' },
          { label: 'Teorias', href: '/teorias' },
          { label: 'O que é Estrutural-Funcionalismo?' },
        ]}
      />

      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container">
          <h1 className="text-5xl font-bold mb-4">O que é Estrutural-Funcionalismo?</h1>
          <p className="text-lg text-gray-300">
            Uma abordagem teórica que explica como cada parte da sociedade funciona em conjunto para manter o equilíbrio e a coesão social.
          </p>
          <div className="flex gap-6 mt-8 text-sm">
            <div>📅 15 de setembro de 2024</div>
            <div>⏱️ 12 minutos de leitura</div>
            <div>👁️ 1.2k visualizações</div>
          </div>
        </div>
      </section>

      <main className="container py-16 grid grid-cols-3 gap-10">
        <article className="col-span-2 bg-white rounded-lg p-8 shadow-md">
          <div className="mb-8 h-96 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg"></div>

          <h2 className="text-3xl font-bold mt-8 mb-4 text-primary">Introdução</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            O estrutural-funcionalismo é uma das teorias mais importantes da sociologia moderna. Desenvolvida principalmente por Émile Durkheim no final do século XIX e complementada por pensadores como Talcott Parsons no século XX, essa abordagem oferece um jeito de entender como a sociedade se organiza e permanece estável.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
            <strong className="text-primary block mb-2">O que é estrutural-funcionalismo?</strong>
            <p className="text-gray-700">
              Uma teoria sociológica que vê a sociedade como um sistema integrado, onde cada instituição possui uma função específica que contribui para o funcionamento e estabilidade do todo.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-8 mb-4 text-primary">O conceito central</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Imagine a sociedade como um corpo humano. Assim como o coração bombeia sangue, os pulmões respiram e o cérebro coordena tudo, cada instituição social tem uma função específica:
          </p>

          <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700">
            <li><strong>Família:</strong> socializa as crianças e transmite valores culturais</li>
            <li><strong>Educação:</strong> prepara os indivíduos para papéis sociais</li>
            <li><strong>Economia:</strong> produz e distribui recursos</li>
            <li><strong>Política:</strong> estabelece normas e resolução de conflitos</li>
            <li><strong>Religião:</strong> fornece significado e coesão moral</li>
          </ul>

          <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-l-4 border-yellow-500 p-6 my-8">
            <strong className="text-primary block mb-2">📌 Exemplo: A função da educação</strong>
            <p className="text-gray-700">
              A escola não existe apenas para ensinar matemática ou história. Ela funciona para: preparar indivíduos para o mercado de trabalho, transmitir valores culturais, criar redes sociais e manter a estrutura hierárquica da sociedade.
            </p>
          </div>

          <blockquote className="border-l-4 border-blue-600 pl-6 py-4 text-lg italic text-gray-700 my-8">
            "A sociedade é mais que a soma de suas partes. É um sistema onde cada elemento contribui para o funcionamento do todo."
          </blockquote>
        </article>

        <aside>
          <div className="bg-white rounded-lg p-6 shadow-md mb-6">
            <h3 className="font-bold text-primary mb-4">🔗 Artigos Relacionados</h3>
            <div className="space-y-3">
              {['Durkheim e solidariedade social', 'Marxismo vs Funcionalismo', 'Por que normas sociais existem'].map((title, i) => (
                <div key={i} className="bg-gray-50 border-l-4 border-blue-600 p-3 rounded">
                  <a href="#" className="text-blue-600 font-semibold text-sm hover:underline">
                    {title}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="font-bold text-primary mb-4">👤 Autor em Destaque</h3>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mb-3"></div>
              <strong className="block">Émile Durkheim</strong>
              <p className="text-xs text-gray-500 mb-3">1858 - 1917</p>
              <p className="text-sm text-gray-700 mb-4">
                Sociólogo francês que fundou o estrutural-funcionalismo.
              </p>
              <a href="#" className="text-blue-600 text-sm font-semibold hover:underline">
                Ver perfil completo →
              </a>
            </div>
          </div>
        </aside>
      </main>

      <Footer />
    </>
  )
}
