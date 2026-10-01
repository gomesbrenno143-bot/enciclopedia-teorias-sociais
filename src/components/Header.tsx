import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-100 bg-primary text-white py-4 shadow-md">
      <div className="container flex justify-between items-center gap-5">
        <div className="text-2xl font-bold text-accent">📚 Teorias & Curiosidades</div>
        <nav className="flex gap-5 text-sm">
          <Link href="/" className="hover:text-accent">Início</Link>
          <Link href="/teorias" className="hover:text-accent">Teorias</Link>
          <Link href="/autores" className="hover:text-accent">Autores</Link>
          <Link href="/curiosidades" className="hover:text-accent">Curiosidades</Link>
          <Link href="/glossario" className="hover:text-accent">Glossário</Link>
          <Link href="/sobre" className="hover:text-accent">Sobre</Link>
          <Link href="/contato" className="hover:text-accent">Contato</Link>
        </nav>
      </div>
    </header>
  )
}
