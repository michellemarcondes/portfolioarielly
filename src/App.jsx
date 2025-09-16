import { useEffect, useRef, useState } from 'react'

const Container = ({ children, className = '' }) => (
  <div className={`max-w-[1200px] mx-auto px-6 md:px-10 lg:px-20 ${className}`}>{children}</div>
)

const Header = () => {
  return (
    <header className="w-full h-[80px] bg-[#e8f5ff] border-b border-[#c3e3fd]">
      <Container className="h-full flex items-center justify-between">
        <div className="flex items-center">
          <img src="logo.png" alt="Logo" className="h-[60px] w-auto" />
        </div>
        <nav className="flex items-center space-x-8">
          <a href="#home" className="text-[#0b2e55] text-lg font-medium">Home</a>
          <a href="#sobre" className="text-[#0b2e55] text-lg font-medium">Sobre mim</a>
          <a href="#projetos" className="text-[#0b2e55] text-lg font-medium">Projetos</a>
        </nav>
        <div className="flex items-center space-x-6">
          <a href="https://instagram.com" aria-label="Instagram" className="text-[#0b2e55] hover:text-[#6eb8f5]">
            <img src="instagram.png" alt="Instagram" className="w-[26px] h-[26px]" />
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn" className="text-[#0b2e55] hover:text-[#6eb8f5]">
            <img src="linkdin.png" alt="LinkedIn" className="w-[36px] h-[36px]" />
          </a>
          <a href="/curriculo.pdf" download className="h-[20px] px-6 bg-[#2196f3] hover:bg-[#6eb8f5] text-white font-semibold rounded-lg flex items-center">Baixar Currículo</a>
        </div>
      </Container>
    </header>
  )
}

const Hero = () => {
  return (
    <section id="home" className="w-full bg-[#e8f5ff]" style={{ height: 720 }}>
      <Container className="grid grid-cols-1 lg:grid-cols-2 h-full">
        <div className="flex flex-col justify-center px-0">
          <p className="text-2xl text-[#0b2e55] mb-3">OLÁ, EU SOU:</p>
          <div className="mb-6">
            <h1 className="text-8xl font-extrabold text-[#0b2e55] leading-none">ARIELLY</h1>
            <h1 className="text-8xl font-extrabold text-[#0b2e55] leading-none">RODRIGUES</h1>
          </div>
          <p className="text-xl text-[#0b2e55] mb-10">Estudante de Enfermagem no Grau Técnico.</p>
          <button className="w-[120px] h-[50px] bg-[#e8f5ff] border border-[#f59e0b] text-[#0b2e55] font-semibold rounded-lg hover:bg-[#c3e3fd]">
            Contato
          </button>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="relative">
            {/* Foto circular */}
            <img src="heroimg.png" alt="Foto" className="w-[320px] h-[320px] rounded-full object-cover mx-auto border-2 border-[#8b4513]" />
            
            {/* Elementos gráficos posicionados como na imagem 2 */}
            {/* Linhas verticais no canto inferior esquerdo */}
            <img src="iconlistras.png" alt="Linhas decorativas" className="w-12 h-12 absolute -bottom-8 -left-16 opacity-100" />
            
            {/* Estrelinhas no canto superior direito */}
            <img src="estrelinha.png" alt="Estrelinhas" className="w-8 h-8 absolute -top-4 -right-8 opacity-100" />
            
            {/* Vetor circular (usando Vector.png) */}
            <img src="Vector.png" alt="Vetor circular" className="w-16 h-16 absolute top-4 -right-12 opacity-100" />
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
    <section id="sobre" className="min-h-screen py-20 bg-[#e8f5ff]">
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
            {items[index].map((item, i) => (
              <div
                key={i}
                className="w-full h-auto md:w-[540px] md:h-[360px] mx-5 cursor-pointer"
                onClick={() => onOpen(item)}
              >
                <div className="w-full h-full bg-white rounded-lg shadow-lg border-2 border-[#c3e3fd] flex flex-col items-center justify-center p-8 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-[#2196f3] rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-[#0b2e55] mb-2">{item.alt}</h3>
                  <p className="text-sm text-[#0b2e55] text-center">{item.caption}</p>
                  <div className="mt-4 text-xs text-[#2196f3] font-medium">Clique para visualizar</div>
                </div>
              </div>
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
    <section id="projetos" className="min-h-screen py-20 bg-[#e8f5ff]">
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
      { cover: 'apice.pdf', alt: 'Certificado APICE', caption: 'Legenda do certificado', pdf: 'apice.pdf' },
      { cover: 'certificadocc50.pdf', alt: 'Certificado CC50', caption: 'Legenda do certificado', pdf: 'certificadocc50.pdf' },
    ],
    [
      { cover: 'certificadocss.pdf', alt: 'Certificado CSS', caption: 'Legenda do certificado', pdf: 'certificadocss.pdf' },
      { cover: 'certificadohtml.pdf', alt: 'Certificado HTML', caption: 'Legenda do certificado', pdf: 'certificadohtml.pdf' },
    ],
  ]

  const mapped = slides.map((pair) => pair.map((c) => ({ src: c.cover, alt: c.alt, caption: c.caption, pdf: c.pdf })))

  return (
    <section className="py-20 bg-[#e8f5ff]">
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
    <section id="contato" className="min-h-screen py-20 bg-[#e8f5ff]">
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
        <img src="logo.png" className="h-[32px] w-auto" alt="Logo" />
        <div className="text-[#2196f3] text-sm">© 2025 Arielly Rodrigues. Todos os direitos reservados.</div>
        <div className="flex items-center">
          <a href="https://instagram.com" className="mx-3 text-[#0b2e55] hover:text-[#6eb8f5]" aria-label="Instagram">
            <img src="instagram.png" alt="Instagram" className="w-[26px] h-[26px]" />
          </a>
          <a href="https://linkedin.com" className="mx-3 text-[#0b2e55] hover:text-[#6eb8f5]" aria-label="LinkedIn">
            <img src="linkdin.png" alt="LinkedIn" className="w-[36px] h-[36px]" />
          </a>
        </div>
      </Container>
    </footer>
  )
}

function App() {
  return (
    <main className="font-sans bg-[#e8f5ff] min-h-screen">
      <Header />
      <Hero />
      <div className="h-[30px] bg-[#e8f5ff]"></div>
      <SobreMim />
      <div className="h-[30px] bg-[#e8f5ff]"></div>
      <Projetos />
      <div className="h-[30px] bg-[#e8f5ff]"></div>
      <Certificados />
      <div className="h-[30px] bg-[#e8f5ff]"></div>
      <Contato />
      <Footer />
    </main>
  )
}

export default App
