import { useEffect, useRef, useState } from 'react'

const Container = ({ children, className = '' }) => (
  <div className={`max-w-[1200px] mx-auto px-6 md:px-10 lg:px-20 ${className}`}>{children}</div>
)

const Header = () => {
  return (
    <header className="w-full h-[80px] bg-[#e8f5ff] border-b border-[#c3e3fd]">
      <Container className="h-full flex items-center justify-between">
        <div className="flex items-center">
          <img src="logo.png" alt="Logo" className="h-[60px] w-auto ml-10" />
        </div>
        <nav className="flex items-center">
          <a href="#home" className="text-[#0b2e55] text-lg font-medium mx-6">Home</a>
          <a href="#sobre" className="text-[#0b2e55] text-lg font-medium mx-6">Sobre mim</a>
          <a href="#projetos" className="text-[#0b2e55] text-lg font-medium mx-6">Projetos</a>
          <a href="#contato" className="text-[#0b2e55] text-lg font-medium mx-6">Contato</a>
          <div className="flex items-center ml-6 space-x-4">
            <a href="https://twitter.com" aria-label="Twitter" className="text-[#0b2e55] hover:text-[#6eb8f5]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43.36a9 9 0 0 1-2.83 1.08A4.51 4.51 0 0 0 11.5 6.53 12.82 12.82 0 0 1 1.64 2 4.51 4.51 0 0 0 2.9 8.53 4.47 4.47 0 0 1 .88 8v.06A4.51 4.51 0 0 0 4.5 12.47a4.52 4.52 0 0 1-2 .08 4.51 4.51 0 0 0 4.21 3.13A9 9 0 0 1 0 19.54a12.76 12.76 0 0 0 6.92 2c8.3 0 12.84-6.87 12.84-12.82 0-.2 0-.39-.01-.58A9.22 9.22 0 0 0 23 3z"/></svg>
            </a>
            <a href="https://behance.net" aria-label="Behance" className="text-[#0b2e55] hover:text-[#6eb8f5]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M4 7h5.2a3.4 3.4 0 0 1 0 6.8H4V7zm1.8 2v2.8h3.3a1.4 1.4 0 0 0 0-2.8H5.8zM4 14.8h5.6a3.4 3.4 0 1 1 0 6.8H4v-6.8zm1.8 2v2.8h3.7a1.4 1.4 0 0 0 0-2.8H5.8zM15.8 9.5h6v1.5h-6V9.5zm-1 2.5c.6-.9 1.7-1.4 3.2-1.4 2.8 0 4.1 1.4 4.1 4.1v.7h-6.2c.2 1 .9 1.5 2.3 1.5 1 0 1.8-.3 2.4-1l1.3.9c-.8 1.2-2.1 1.8-3.8 1.8-2.7 0-4.3-1.4-4.3-3.7 0-.8.2-1.5.6-2zM18 13c-1.1 0-1.8.5-2 1.3h4c-.1-.9-.8-1.3-2-1.3z"/></svg>
            </a>
          </div>
          <a href="/curriculo.pdf" download className="ml-6 h-[40px] px-6 bg-[#2196f3] hover:bg-[#6eb8f5] text-white font-semibold rounded-lg shadow-md flex items-center">Baixar Currículo</a>
        </nav>
      </Container>
    </header>
  )
}

const Hero = () => {
  return (
    <section id="home" className="w-full" style={{ height: 720 }}>
      <Container className="grid grid-cols-1 lg:grid-cols-2 h-full">
        <div className="mt-[120px] lg:ml-20 px-0">
          <p className="text-2xl text-[#0b2e55] mb-3">Hello, I’m John,</p>
          <h1 className="text-6xl font-extrabold text-[#2196f3] mb-6 md:text-5xl lg:text-6xl">Product Designer</h1>
          <p className="text-xl text-[#0b2e55] mb-10">based in Netherland.</p>
          <img src="/images/resume-btn.png" alt="Resume" className="w-[180px] h-[56px] mt-2" />
        </div>
        <div className="relative flex items-center justify-center">
          <div className="relative">
            <img src="/images/photo.jpg" alt="Foto" className="w-[320px] h-[320px] rounded-full object-cover mx-auto md:w-[240px] md:h-[240px]" />
            <img src="/estrelinha.png" alt="Decor 1" className="w-8 h-8 absolute -top-10 -right-[60px]" />
            <img src="/iconlistras.png" alt="Decor 2" className="w-6 h-6 absolute -bottom-[30px] -left-[80px]" />
          </div>
        </div>
      </Container>
    </section>
  )
}

const SectionTitle = ({ children }) => (
  <h2 className="text-5xl font-extrabold text-[#2196f3] mb-10 md:text-4xl">{children}</h2>
)

const SobreMim = () => {
  return (
    <section id="sobre" className="min-h-screen py-20">
      <Container>
        <SectionTitle>sobre mim</SectionTitle>
        <p className="max-w-[680px] text-lg text-[#0b2e55] leading-relaxed mb-[60px]">
          Sou um Product Designer focado em criar experiências funcionais e esteticamente agradáveis,
          combinando pesquisa, prototipação e validações com usuários.
        </p>
        <div className="space-y-8">
          {[{ ano: '2023', desc: 'Senior Product Designer na Empresa X.' }, { ano: '2021', desc: 'Product Designer na Startup Y.' }, { ano: '2019', desc: 'UX/UI Designer Freelancer.' }].map((item) => (
            <div key={item.ano} className="flex items-start space-x-4">
              <div className="mt-1 w-3 h-3 rounded-full bg-[#2196f3]"></div>
              <div>
                <div className="text-xl font-semibold text-[#0b2e55]">{item.ano}</div>
                <p className="max-w-[640px] text-[#0b2e55] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

const useEscToClose = (onClose) => {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])
}

const Carousel = ({ items, onOpen }) => {
  const [index, setIndex] = useState(0)
  const touchStartX = useRef(null)

  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length)
  const next = () => setIndex((i) => (i + 1) % items.length)

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (dx > 50) prev()
    if (dx < -50) next()
    touchStartX.current = null
  }

  return (
    <div className="relative w-full h-[420px]">
      <div className="absolute left-10 top-[90%] md:top-1/2 -translate-y-1/2 z-10">
        <button onClick={prev} className="w-12 h-12 rounded-full bg-[#2196f3] hover:bg-[#6eb8f5] text-white shadow-xl flex items-center justify-center">{'<'}</button>
      </div>
      <div className="absolute right-10 top-[90%] md:top-1/2 -translate-y-1/2 z-10">
        <button onClick={next} className="w-12 h-12 rounded-full bg-[#2196f3] hover:bg-[#6eb8f5] text-white shadow-xl flex items-center justify-center">{'>'}</button>
      </div>
      <div className="w-full h-full overflow-hidden" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <div className="w-full h-full flex items-center justify-center">
          <div className="flex">
            {items[index].map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt={img.alt}
                className="w-full h-auto md:w-[540px] md:h-[360px] object-cover rounded-lg shadow-lg mx-5"
                onClick={() => onOpen(img)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const ModalImage = ({ item, onClose }) => {
  useEscToClose(onClose)
  if (!item) return null
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50" onClick={onClose}>
      <div className="max-w-3xl" onClick={(e) => e.stopPropagation()}>
        <img src={item.src} alt={item.alt} className="max-h-[80vh] rounded-lg" />
        <p className="text-white text-lg mt-4">{item.caption}</p>
      </div>
    </div>
  )
}

const ModalPdf = ({ item, onClose }) => {
  useEscToClose(onClose)
  if (!item) return null
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50" onClick={onClose}>
      <div className="w-[90vw] max-w-5xl h-[80vh] bg-white rounded-lg p-4" onClick={(e) => e.stopPropagation()}>
        <div className="w-full h-full">
          <iframe src={item.pdf} title={item.alt} className="w-full h-full"></iframe>
        </div>
        <div className="mt-4 text-[#0b2e55] text-md">{item.caption} <a className="text-[#2196f3] font-semibold ml-2" href={item.pdf} download>Baixar PDF</a></div>
      </div>
    </div>
  )
}

const Projetos = () => {
  const [openItem, setOpenItem] = useState(null)
  const slides = [
    [
      { src: '/projects/p1a.jpg', alt: 'Projeto 1 A', caption: 'Projeto 1 — Tela A com descrição detalhada.' },
      { src: '/projects/p1b.jpg', alt: 'Projeto 1 B', caption: 'Projeto 1 — Tela B com destaques e resultados.' },
    ],
    [
      { src: '/projects/p2a.jpg', alt: 'Projeto 2 A', caption: 'Projeto 2 — Estudos e protótipos.' },
      { src: '/projects/p2b.jpg', alt: 'Projeto 2 B', caption: 'Projeto 2 — Telas finais.' },
    ],
  ]

  return (
    <section id="projetos" className="min-h-screen py-20">
      <Container>
        <SectionTitle>projetos</SectionTitle>
        <Carousel items={slides} onOpen={(img) => setOpenItem(img)} />
        <ModalImage item={openItem} onClose={() => setOpenItem(null)} />
      </Container>
    </section>
  )
}

const Certificados = () => {
  const [openItem, setOpenItem] = useState(null)
  const slides = [
    [
      { cover: '/certs/c1.jpg', alt: 'Certificado 1', caption: 'Certificado de UX Avançado', pdf: '/certs/c1.pdf' },
      { cover: '/certs/c2.jpg', alt: 'Certificado 2', caption: 'Design Systems', pdf: '/certs/c2.pdf' },
    ],
    [
      { cover: '/certs/c3.jpg', alt: 'Certificado 3', caption: 'Acessibilidade Web', pdf: '/certs/c3.pdf' },
      { cover: '/certs/c4.jpg', alt: 'Certificado 4', caption: 'Prototipação', pdf: '/certs/c4.pdf' },
    ],
  ]

  const mapped = slides.map((pair) => pair.map((c) => ({ src: c.cover, alt: c.alt, caption: c.caption, pdf: c.pdf })))

  return (
    <section className="min-h-screen py-20">
      <Container>
        <SectionTitle>certificados</SectionTitle>
        <Carousel items={mapped} onOpen={(item) => setOpenItem(item)} />
        <ModalPdf item={openItem} onClose={() => setOpenItem(null)} />
      </Container>
    </section>
  )
}

const Contato = () => {
  return (
    <section id="contato" className="min-h-screen py-20">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center lg:justify-start">
          <img src="/images/contact.jpg" alt="Contato" className="w-[400px] h-[250px] object-cover rounded-lg shadow-md" />
        </div>
        <div>
          <p className="max-w-[600px] text-[#0b2e55] text-lg leading-relaxed mb-6">
            Fique à vontade para entrar em contato para oportunidades, parcerias ou apenas dizer oi.
          </p>
          <ul className="space-y-2">
            <li>
              <a href="mailto:email@exemplo.com" className="text-[#2196f3] font-semibold">email@exemplo.com</a>
            </li>
            <li>
              <a href="https://twitter.com/usuario" target="_blank" className="text-[#2196f3] font-semibold">Twitter</a>
            </li>
            <li>
              <a href="https://behance.net/usuario" target="_blank" className="text-[#2196f3] font-semibold">Behance</a>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  )
}

const Footer = () => {
  return (
    <footer className="w-full h-[70px] bg-[#e8f5ff] border-t border-[#c3e3fd]">
      <Container className="h-full flex items-center justify-between px-5">
        <img src="/logo.png" className="h-[32px] w-auto" alt="Logo" />
        <div className="text-[#2196f3] text-sm">© 2025 SeuNome. Todos os direitos reservados.</div>
        <div className="flex items-center">
          <a href="https://twitter.com" className="mx-3 text-[#0b2e55] hover:text-[#6eb8f5]" aria-label="Twitter">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43.36a9 9 0 0 1-2.83 1.08A4.51 4.51 0 0 0 11.5 6.53 12.82 12.82 0 0 1 1.64 2 4.51 4.51 0 0 0 2.9 8.53 4.47 4.47 0 0 1 .88 8v.06A4.51 4.51 0 0 0 4.5 12.47a4.52 4.52 0 0 1-2 .08 4.51 4.51 0 0 0 4.21 3.13A9 9 0 0 1 0 19.54a12.76 12.76 0 0 0 6.92 2c8.3 0 12.84-6.87 12.84-12.82 0-.2 0-.39-.01-.58A9.22 9.22 0 0 0 23 3z"/></svg>
          </a>
          <a href="https://behance.net" className="mx-3 text-[#0b2e55] hover:text-[#6eb8f5]" aria-label="Behance">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M4 7h5.2a3.4 3.4 0 0 1 0 6.8H4V7zm1.8 2v2.8h3.3a1.4 1.4 0 0 0 0-2.8H5.8zM4 14.8h5.6a3.4 3.4 0 1 1 0 6.8H4v-6.8zm1.8 2v2.8h3.7a1.4 1.4 0 0 0 0-2.8H5.8zM15.8 9.5h6v1.5h-6V9.5zm-1 2.5c.6-.9 1.7-1.4 3.2-1.4 2.8 0 4.1 1.4 4.1 4.1v.7h-6.2c.2 1 .9 1.5 2.3 1.5 1 0 1.8-.3 2.4-1l1.3.9c-.8 1.2-2.1 1.8-3.8 1.8-2.7 0-4.3-1.4-4.3-3.7 0-.8.2-1.5.6-2zM18 13c-1.1 0-1.8.5-2 1.3h4c-.1-.9-.8-1.3-2-1.3z"/></svg>
          </a>
        </div>
      </Container>
    </footer>
  )
}

function App() {
  return (
    <main className="font-sans">
      <Header />
      <Hero />
      <div className="h-[120px]"></div>
      <SobreMim />
      <div className="h-[120px]"></div>
      <Projetos />
      <div className="h-[120px]"></div>
      <Certificados />
      <div className="h-[120px]"></div>
      <Contato />
      <Footer />
    </main>
  )
}

export default App
