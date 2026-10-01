import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ArticleCard from '@/components/ArticleCard'

export default function Home() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container grid grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6">
              Entenda a sociedade, o comportamento humano e as ideias que a movem.
            </h1>
            <p className="text-lg mb-8 text-gray-300">
              Explore teorias sociais clássicas e contemporâneas, autores fundamentais, curiosidades do cotidiano e conceitos que ajudam a compreender o mundo.
            </p>
            <div className="flex gap-4">
              <button className="bg-accent text-primary px-6 py-3 rounded-lg font-bold hover:opacity-90">
                🚀 Explorar teorias
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white/10">
                💡 Ler curiosidades
              </button>
            </div>
          </div>
          
          <div className="bg-white/10 rounded-lg p-8">
            <input
              type="text"
              placeholder="Buscar por teoria, autor ou tema..."
              className="w-full px-4 py-3 rounded-lg mb-4 text-primary"
            />
            <button className="w-full bg-accent text-primary px-4 py-3 rounded-lg font-bold">
              Buscar
            </button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container py-20">
        <div className="mb-10">
          <h2 className="text-4xl font-bold mb-4 text-primary">Categorias em Destaque</h2>
          <p className="text-gray-600">Uma visão geral das áreas que conectam teoria, cultura, poder e comportamento social.</p>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {[
            { title: 'Teorias Clássicas', desc: 'Durkheim, Marx, Weber e os pilares da sociologia.' },
            { title: 'Pensadores', desc: 'Biografias e ideias centrais dos maiores autores.' },
            { title: 'Comportamento Humano', desc: 'Por que seguimos normas e padrões sociais.' },
            { title: 'Conceitos Sociais', desc: 'Habitus, anomia, capital social e mais.' },
          ].map((cat, i) => (
            <ArticleCard
              key={i}
              title={cat.title}
              description={cat.desc}
              category="Categoria"
              href="#"
            />
          ))}
        </div>
      </section>

      {/* Featured Articles */}
      <section className="bg-white py-20">
        <div className="container">
          <div className="mb-10">
            <h2 className="text-4xl font-bold mb-4 text-primary">Artigos em Destaque</h2>
            <p className="text-gray-600">Leituras fundamentais para entender como a sociedade se organiza.</p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {[
              {
                title: 'O que é Estrutural-Funcionalismo?',
                desc: 'Como cada parte da sociedade contribui para o equilíbrio do sistema.',
                cat: 'Sociologia',
              },
              {
                title: 'Classe Social e Conflito',
                desc: 'Como as desigualdades econômicas moldam relações de poder.',
                cat: 'Marxismo',
              },
              {
                title: 'Por que Normas Sociais são Tão Fortes?',
                desc: 'O papel da socialização e pressão coletiva no comportamento.',
                cat: 'Cultura',
              },
            ].map((art, i) => (
              <ArticleCard key={i} title={art.title} description={art.desc} category={art.cat} href="#" />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container py-20">
        <div className="grid grid-cols-4 gap-6">
          <StatCard label="Artigos Públicos" value="248" change="↑ 12% este mês" />
          <StatCard label="Visualizações" value="18.4K" change="↑ 20% este mês" />
          <StatCard label="Usuários" value="3.2K" change="↑ 8% este mês" />
          <StatCard label="Categorias" value="12" change="Temas principais" />
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container flex justify-between items-center gap-10">
          <div>
            <h3 className="text-3xl font-bold mb-3">Receba Novas Ideias</h3>
            <p className="text-gray-300">Inscreva-se e receba artigos sobre sociologia diretamente na sua caixa de entrada.</p>
          </div>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Seu e-mail"
              className="px-4 py-3 rounded-lg w-80 text-primary"
            />
            <button className="bg-accent text-primary px-6 py-3 rounded-lg font-bold hover:opacity-90">
              Inscrever
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
