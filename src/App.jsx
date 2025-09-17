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
    <section id="home" className="w-full bg-[#e8f5ff] -mt-[120px]" style={{ height: 720 }}> {/* adicionado -mt-5 para aproximar 20px */}
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
        <SectionTitle>Sobre mim</SectionTitle>
        <p className="max-w-[680px] text-lg text-[#0b2e55] leading-relaxed mb-[60px]">
          Meu nome é Arielly Rodrigues Aparecida de Souza, sou de Campinas – SP, e me considero uma pessoa dedicada, comunicativa e muito organizada. Gosto de estar sempre disponível para ajudar, porque acredito que empatia e respeito fazem toda a diferença no convívio com as pessoas.

          Nos meus momentos livres, gosto de ler a Bíblia, passear, caminhar e cozinhar. A leitura e a culinária são hobbies que me trazem paz e também me ensinam a ter paciência e criatividade.

          O que mais me motiva é poder dar orgulho aos meus pais e conquistar, com esforço, uma vida melhor para mim e para minha família. Entre as minhas conquistas até aqui, destaco a oportunidade de estudar na Fundação Bradesco, servir no ministério infantil da minha igreja e realizar sonhos com meu próprio trabalho, como comprar o meu celular. Cada passo foi importante para me fortalecer e mostrar que dedicação traz resultados.

          Tenho como objetivo a longo prazo me tornar chefe de enfermagem em um grande hospital. Quero cuidar das pessoas com empatia e firmeza, unindo profissionalismo e humanidade. Me inspiro muito em pessoas gentis e bondosas, e tento levar esse exemplo para o meu dia a dia.

          Prefiro trabalhar de forma individual, pois me sinto mais organizada assim, mas valorizo muito a colaboração e acredito no poder do respeito e da entrega em qualquer ambiente. Quando enfrento desafios, paro, reflito e busco soluções práticas, sempre tentando aprender com cada situação.

          Acredito que o que me diferencia é a forma como enxergo os outros: presto mais atenção nas atitudes do que nas palavras. Procuro ser autêntica, simpática, altruísta e dedicada. Quero ser vista como alguém em quem se pode confiar — uma pessoa verdadeira, empática e que se dedica de coração ao que faz.
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

  const next = () => setIndex((prev) => (prev + 1) % items.length)
  const prev = () => setIndex((prev) => (prev - 1 + items.length) % items.length)

  return (
    <div className="relative w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items[index].map((item, idx) => (
          <div
            key={idx}
            onClick={() => onOpen(item)}
            className="cursor-pointer bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition flex flex-col items-center"
          >
            {/* Se for Projeto (tem descricao) */}
            {item.descricao ? (
              <>
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-56 object-cover rounded-xl mb-3"
                />
                <h3 className="text-lg font-semibold text-[#0b2e55] text-center">
                  {item.titulo}
                </h3>
              </>
            ) : (
              // Se for Certificado (tem pdf mas não descricao)
              <>
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-40 object-contain mb-3"
                />
                <p className="text-sm text-[#0b2e55] text-center">
                  {item.caption}
                </p>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Botões de navegação */}
      <button
        onClick={prev}
        className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-white shadow p-2 rounded-full hover:bg-gray-100"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white shadow p-2 rounded-full hover:bg-gray-100"
      >
        ›
      </button>
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

// ... (todo o código que você já tem acima continua igual até o Carousel)

const ModalProjeto = ({ item, onClose }) => {
  useEscToClose(onClose)
  if (!item) return null
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full p-6 relative shadow-lg overflow-y-auto max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-2xl"
          onClick={onClose}
        >
          ✕
        </button>
        <img
          src={item.src}
          alt={item.titulo}
          className="w-full h-64 object-cover rounded-xl mb-4"
        />
        <h2 className="text-2xl font-bold text-[#0b2e55] mb-4">{item.titulo}</h2>
        <p className="text-gray-700 whitespace-pre-line leading-relaxed">
          {item.descricao}
        </p>
      </div>
    </div>
  )
}

const Projetos = () => {
  const [openItem, setOpenItem] = useState(null)

  // agora cada item tem titulo + descricao completa
  const slides = [
    [
      {
        src: "/projects/p1a.jpg",
        titulo: "Smart Food Cart",
        alt: "Smart Food Cart",
        descricao: `Esse foi um dos projetos mais desafiadores... 

✨ Aprendizados:
- Trabalho em equipe
- Criação de identidade visual
- Programação em Arduino
- Apresentação de soluções inovadoras`
      },
      {
        src: "/projects/p2a.jpg",
        titulo: "Projeto Buzzer com Arduino",
        alt: "Projeto Buzzer com Arduino",
        descricao: `Nesse projeto montei um circuito simples com buzzer e botão. 

✨ Aprendizados:
- Uso de entradas e saídas digitais
- Montagem em protoboard
- Resistores para proteção`
      },
    ],
    [
      {
        src: "/projects/p3a.jpg",
        titulo: "Cálculo de Média em C",
        alt: "Cálculo de Média em C",
        descricao: `Um dos primeiros programas em C: calcular média de 3 notas. 

✨ Aprendizados:
- Estrutura básica de programas em C
- Manipulação de variáveis float
- Entrada e saída de dados`
      },
      {
        src: "/projects/p4a.jpg",
        titulo: "Carrinho Robótico (Baymax)",
        alt: "Carrinho Robótico (Baymax)",
        descricao: `Robô móvel em grupo, controlado por Arduino + Bluetooth. 

✨ Aprendizados:
- Controle de motores
- Comunicação Bluetooth
- Trabalho em equipe`
      },
    ],
    [
      {
        src: "/projects/p5a.jpg",
        titulo: "Catraca com Sensor Ultrassônico",
        alt: "Catraca com Sensor Ultrassônico",
        descricao: `Simulação de catraca automática com sensor e servo. 

✨ Aprendizados:
- Sensor ultrassônico
- Controle de servo motor
- Automação prática`
      },
      {
        src: "/projects/p6a.jpg",
        titulo: "Jogo das Flores em C",
        alt: "Jogo das Flores em C",
        descricao: `Programa criativo em C para alocar flores em campo. 

✨ Aprendizados:
- Estruturas de repetição
- Condicionais
- Arrays`
      },
    ],
    [
      {
        src: "/projects/p7a.jpg",
        titulo: "Verificação de Número Primo em C",
        alt: "Número Primo em C",
        descricao: `Programa para verificar se número é primo. 

✨ Aprendizados:
- Estrutura de repetição
- Operador %
- Otimização de algoritmos`
      },
      {
        src: "/projects/p8a.jpg",
        titulo: "Calculadora em C",
        alt: "Calculadora em C",
        descricao: `Calculadora básica com 4 operações e validações. 

✨ Aprendizados:
- Operações aritméticas
- Estruturas condicionais
- Tratamento de erros`
      },
    ],
    [
      {
        src: "/projects/p9a.jpg",
        titulo: "Piano com Arduino",
        alt: "Piano com Arduino",
        descricao: `Piano eletrônico com botões + buzzer no Arduino. 

✨ Aprendizados:
- Sons com buzzer
- Entradas digitais múltiplas
- Criatividade e música com tecnologia`
      },
    ],
  ]

  return (
    <section id="projetos" className="min-h-screen py-20 bg-[#e8f5ff]">
      <Container>
        <SectionTitle>projetos</SectionTitle>
        <Carousel items={slides} onOpen={(item) => setOpenItem(item)} />
        <ModalProjeto item={openItem} onClose={() => setOpenItem(null)} />
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
