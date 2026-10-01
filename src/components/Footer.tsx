import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-400 py-10 mt-10">
      <div className="container flex justify-between gap-5 flex-wrap">
        <div>
          <strong className="text-white">Teorias & Curiosidades</strong>
          <br />
          Enciclopédia da sociedade e do comportamento humano
        </div>
        <div className="flex gap-5 flex-wrap text-sm">
          <Link href="/" className="hover:text-accent">Início</Link>
          <Link href="/teorias" className="hover:text-accent">Teorias</Link>
          <Link href="/autores" className="hover:text-accent">Autores</Link>
          <Link href="/curiosidades" className="hover:text-accent">Curiosidades</Link>
          <Link href="/glossario" className="hover:text-accent">Glossário</Link>
          <Link href="/contato" className="hover:text-accent">Contato</Link>
        </div>
      </div>
    </footer>
  )
}
