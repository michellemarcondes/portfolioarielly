import { useEffect, useState } from 'react'

const Container = ({ children, className = '' }) => (
  <div className={`max-w-[1200px] mx-auto px-6 md:px-10 lg:px-20 ${className}`}>{children}</div>
)

const Header = () => {
  return (
    <header className="w-full h-[90px] bg-[#e8f5ff] border-b border-[#c3e3fd]">
      <Container className="h-full flex items-center justify-between">
        <div className="flex items-center">
          <img src="logo.png" alt="Logo" className="h-[50px] w-auto" />
        </div>
        <nav className="flex items-center space-x-8">
          <a href="#home" className="text-[#0b2e55] text-lg font-medium hover:text-[#2196f3] transition-colors">Home</a>
          <a href="#sobre" className="text-[#0b2e55] text-lg font-medium hover:text-[#2196f3] transition-colors">Sobre mim</a>
          <a href="#experiencia" className="text-[#0b2e55] text-lg font-medium hover:text-[#2196f3] transition-colors">Experiência Acadêmica</a>
          <a href="#projetos" className="text-[#0b2e55] text-lg font-medium hover:text-[#2196f3] transition-colors">Projetos</a>
        </nav>
        <div className="flex items-center space-x-6">
          <a href="https://instagram.com" aria-label="Instagram" className="text-[#0b2e55] hover:text-[#6eb8f5] transition-colors">
            <img src="instagram.png" alt="Instagram" className="w-[26px] h-[26px]" />
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn" className="text-[#0b2e55] hover:text-[#6eb8f5] transition-colors">
            <img src="linkdin.png" alt="LinkedIn" className="w-[36px] h-[36px]" />
          </a>
          <a href="/curriculo.pdf" download className="px-6 py-2 bg-[#2196f3] hover:bg-[#6eb8f5] text-white font-semibold rounded-lg flex items-center transition-colors">
            Baixar Currículo
          </a>
        </div>
      </Container>
    </header>
  )
}

const Hero = () => {
  return (
    <section id="home" className="w-full bg-[#e8f5ff] -mt-[120px]" style={{ height: 720 }}>
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
            <img src="heroimg.png" alt="Foto" className="w-[320px] h-[320px] rounded-full object-cover mx-auto border-2 border-[#8b4513]" />
            <img src="iconlistras.png" alt="Linhas decorativas" className="w-12 h-12 absolute -bottom-8 -left-16 opacity-100" />
            <img src="estrelinha.png" alt="Estrelinhas" className="w-8 h-8 absolute -top-4 -right-8 opacity-100" />
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="text-lg text-[#0b2e55] leading-relaxed space-y-4">
            <p>
              Meu nome é Arielly Rodrigues Aparecida de Souza, sou de Campinas – SP, e me considero uma pessoa dedicada, comunicativa e muito organizada. Gosto de estar sempre disponível para ajudar, porque acredito que empatia e respeito fazem toda a diferença no convívio com as pessoas.
            </p>
            <p>
              O que mais me motiva é poder dar orgulho aos meus pais e conquistar, com esforço, uma vida melhor para mim e para minha família. Entre as minhas conquistas até aqui, destaco a oportunidade de estudar na Fundação Bradesco, servir no ministério infantil da minha igreja e realizar sonhos com meu próprio trabalho, como comprar o meu celular. Cada passo foi importante para me fortalecer e mostrar que dedicação traz resultados.
            </p>
            <p>
              Tenho como objetivo a longo prazo me tornar chefe de enfermagem em um grande hospital. Quero cuidar das pessoas com empatia e firmeza, unindo profissionalismo e humanidade. Me inspiro muito em pessoas gentis e bondosas, e tento levar esse exemplo para o meu dia a dia.
            </p>
            <p>
              Prefiro trabalhar de forma individual, pois me sinto mais organizada assim, mas valorizo muito a colaboração e acredito no poder do respeito e da entrega em qualquer ambiente. Quando enfrento desafios, paro, reflito e busco soluções práticas, sempre tentando aprender com cada situação.
            </p>
            <p>
              Acredito que o que me diferencia é a forma como enxergo os outros: presto mais atenção nas atitudes do que nas palavras. Procuro ser autêntica, simpática, altruísta e dedicada. Quero ser vista como alguém em quem se pode confiar — uma pessoa verdadeira, empática e que se dedica de coração ao que faz.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img 
              src="tecnico.png" 
              alt="Foto de Arielly Rodrigues" 
              className="w-full max-w-md h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

const ExperienciaAcademica = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const experiences = [
    {
      title: "Escola Fundamental",
      description: "Atuar como presidente do grêmio estudantil foi uma experiência transformadora, que desenvolveu em mim habilidades de liderança, comunicação e organização. Nesse papel, fui responsável por representar os interesses dos alunos, coordenar reuniões, organizar eventos e intermediar o diálogo entre estudantes, professores e direção da escola. Essa vivência me ensinou a trabalhar em equipe, gerenciar conflitos e tomar decisões estratégicas com responsabilidade. Além disso, aprimorei minha capacidade de planejar projetos, administrar recursos e engajar pessoas em torno de objetivos comuns, o que fortaleceu minha visão de liderança participativa e comprometida.",
      image: "gremio.png"
    },
    {
      title: "Fundação Bradesco - Ensino Médio",
      description: "Estudar na Fundação Bradesco Campinas, na modalidade de Qualificação, foi uma excelente oportunidade de crescimento profissional e pessoal. O curso proporcionou contato direto com o mundo digital e tecnológico, oferecendo conteúdos que vão desde lógica básica de programação até linguagens de marcação, desenvolvimento web, mobile e robótica.\nA qualidade das aulas e a competência dos professores foram diferenciais que garantiram um aprendizado sólido e aplicado. Além do conhecimento técnico, essa experiência reforçou em mim a importância da atualização constante em tecnologia e inovação, abrindo novas perspectivas para minha carreira.",
      image: "aboutimg.png"
    },
    {
      title: "Técnico de Enfermagem - Grau Técnico",
      description: "O curso de Enfermagem no Grau Técnico me proporcionou uma formação ampla, unindo teoria e prática em um aprendizado enriquecedor. Tive contato com disciplinas essenciais para a área da saúde, desenvolvendo habilidades em cuidados ao paciente, primeiros socorros, administração de medicamentos e ética profissional.\nAlém dos conteúdos técnicos, o curso também transmitiu valores fundamentais como empatia, responsabilidade e trabalho em equipe. Essa experiência consolidou minha visão sobre a importância do cuidado humano e da dedicação na área da saúde, preparando-me para atuar com competência e sensibilidade no atendimento às pessoas.",
      image: "enfermagem.png"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === experiences.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? experiences.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="experiencia" className="min-h-screen py-20 bg-[#e8f5ff]">
      <Container>
        <SectionTitle>Experiência Acadêmica</SectionTitle>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-[#0b2e55] mb-4">
              {experiences[currentIndex].title}
            </h3>
            <p className="text-lg text-[#0b2e55] leading-relaxed">
              {experiences[currentIndex].description}
            </p>
            <div className="flex mt-6 space-x-4">
              <button 
                onClick={prevSlide}
                className="p-2 rounded-full bg-[#2196f3] text-white hover:bg-[#0b7dd1]"
              >
                ‹
              </button>
              <button 
                onClick={nextSlide}
                className="p-2 rounded-full bg-[#2196f3] text-white hover:bg-[#0b7dd1]"
              >
                ›
              </button>
            </div>
          </div>
          <div className="relative">
            <img 
              src={experiences[currentIndex].image} 
              alt={experiences[currentIndex].title}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {experiences.map((_, index) => (
                <div
                  key={index}
                  className={`h-3 w-3 rounded-full ${
                    index === currentIndex ? 'bg-[#2196f3]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

const useEscToClose = (onClose) => {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])
}

const Carousel = ({ items, onOpen }) => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % items.length);
  const prev = () => setIndex((prev) => (prev - 1 + items.length) % items.length);

  return (
    <div className="relative w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items[index].map((item, idx) => (
          <div
            key={idx}
            onClick={() => onOpen(item)}
            className="cursor-pointer bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition flex flex-col items-center"
          >
            {/* Verifica se é um projeto (com título) ou certificado (com pdf) */}
            {item.titulo ? (
              // Se for projeto (tem título)
              <>
                <div className="w-full h-64 flex items-center justify-center bg-gray-100 rounded-xl mb-3">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-[#0b2e55] text-center">
                  {item.titulo}
                </h3>
              </>
            ) : (
              // Se for certificado (tem pdf)
              <>
                <div className="w-full h-40 flex items-center justify-center bg-gray-100 rounded-xl mb-3">
                  <div className="text-center">
                    <i className="fas fa-file-pdf text-4xl text-red-500 mb-2"></i>
                    <p className="text-sm text-[#0b2e55]">Visualizar PDF</p>
                  </div>
                </div>
                <p className="text-sm text-[#0b2e55] text-center">
                  {item.caption}
                </p>
              </>
            )}
          </div>
        ))}
      </div>

      {items.length > 1 && (
        <>
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
        </>
      )}
    </div>
  );
};

const ModalProjeto = ({ item, onClose }) => {
  useEscToClose(onClose);
  if (!item) return null;

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
        <div className="w-full h-96 flex items-center justify-center bg-gray-100 rounded-xl mb-4">
          <img
            src={item.src}
            alt={item.titulo}
            className="max-h-full max-w-full object-contain"
          />
        </div>
        <h2 className="text-2xl font-bold text-[#0b2e55] mb-4">{item.titulo}</h2>
        <p className="text-gray-700 whitespace-pre-line leading-relaxed">
          {item.descricao}
        </p>
      </div>
    </div>
  );
};

const ModalPdf = ({ item, onClose }) => {
  useEscToClose(onClose)
  if (!item) return null
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50" onClick={onClose}>
      <div className="w-[90vw] max-w-5xl h-[80vh] bg-white rounded-lg p-4" onClick={(e) => e.stopPropagation()}>
        <div className="w-full h-full">
          <iframe 
            src={item.pdf} 
            title={item.alt} 
            className="w-full h-full"
          ></iframe>
        </div>
        <div className="mt-4 text-[#0b2e55] text-md">
          {item.caption} 
          <a className="text-[#2196f3] font-semibold ml-2" href={item.pdf} download>
            Baixar PDF
          </a>
        </div>
      </div>
    </div>
  )
}

const Projetos = () => {
  const [openItem, setOpenItem] = useState(null);

  const slides = [
    [
      {
        src: "Banner da PESQ.jpg",
        titulo: "Smart Food Cart",
        alt: "Smart Food Cart",
        descricao: `1. Smart Food Cart (carrinho de compras inteligente + panfletos)

Esse foi um dos projetos mais desafiadores e interessantes que desenvolvi. O Smart Food Cart é um carrinho de compras inteligente, capaz de somar automaticamente os produtos colocados nele e exibir o valor em tempo real.

Eu participei desde a concepção da ideia até a criação dos panfletos de divulgação, que foram produzidos para apresentar o conceito do projeto. Trabalhamos em grupo, dividindo tarefas como design, programação e pesquisa, e isso me ajudou muito a desenvolver habilidades de comunicação e colaboração.

Aprendizados principais:
- Trabalho em equipe e divisão de responsabilidades.
- Criação de identidade visual e material de divulgação.
- Programação em Arduino para integração de sensores.
- Experiência em apresentar uma solução inovadora de forma clara e atrativa.`
      },
      {
        src: "buzer.png",
        titulo: "Projeto Buzzer com Arduino",
        alt: "Projeto Buzzer com Arduino",
        descricao: `Projeto Buzzer com Arduino

Nesse projeto montei um circuito simples usando Arduino UNO, um buzzer e um botão. Quando o botão era pressionado, the buzzer emitia som.

A princípio parecia fácil, mas precisei entender bem como funcionam entradas e saídas digitais no Arduino. Montei o circuito no protoboard e aprendi a importância de resistores para proteger os componentes.

Aprendizados principais:
- Como usar botões como entradas digitais.
- Controle do buzzer como saída digital.
- Montagem prática de circuitos no protoboard.
- Atenção à ligação correta de resistores e conexões.`
      },
    ],
    [
      {
        src: "calmedia.jpg",
        titulo: "Cálculo de Média em C",
        alt: "Cálculo de Média em C",
        descricao: `Cálculo de Média em C

Esse foi um dos meus primeiros programas em linguagem C. A proposta era calcular a média de três notas fornecidas pelo usuário.

Implementei o programa usando variáveis do tipo float, entrada de dados com scanf, e exibição formatada dos resultados com printf.

Aprendizados principais:
- Estrutura básica de um programa em C.
- Manipulação de variáveis numéricas.
- Entrada, processamento e saída de dados.
- Como aplicar lógica matemática simples em programação.`
      },
      {
        src: "carrinhopanfleto.png",
        titulo: "Carrinho Robótico (Baymax)",
        alt: "Carrinho Robótico (Baymax)",
        descricao: `Carrinho Robótico (Baymax)

Esse projeto foi um robô móvel que construí em grupo. Ele foi montado em um chassi com motores DC e controlado por Arduino. Para dar vida ao projeto, implementamos controle via Bluetooth, o que permitia comandar os movimentos do carrinho à distância.

Além da programação e montagem, também participei da criação de panfletos para explicar o funcionamento do carrinho e destacar nossas funções no grupo.

Aprendizados principais:
- Controle de motores utilizando Arduino.
- Comunicação sem fio via módulo Bluetooth.
- Trabalho em equipe, com cada integrante focado em uma parte do projeto.
- Importância de documentação e apresentação visual de projetos.`
      },
    ],
    [
      {
        src: "catraca.png",
        titulo: "Catraca com Sensor Ultrassônico",
        alt: "Catraca com Sensor Ultrassônico",
        descricao: `Catraca com Sensor Ultrassônico e Servo Motor

Esse projeto simulou o funcionamento de uma catraca automática. Usei um sensor ultrassônico para detectar a aproximação de uma pessoa e um servo motor que girava, representando a abertura da catraca.

A programação exigiu cuidado para integrar a leitura de distância com o movimento do servo. Foi um exemplo prático de automação que me fez perceber como sistemas simples podem ter grande utilidade.

Aprendizados principais:
- Uso de sensores ultrassônicos para medir distância.
- Controle de servo motores com precisão.
- Integração de sensores e atuadores em um único sistema.
- Aplicações reais de automação no dia a dia.`
      },
      {
        src: "jogodasflores.png",
        titulo: "Jogo das Flores em C",
        alt: "Jogo das Flores em C",
        descricao: `Jogo das Flores em C

Esse foi um programa criativo em C, no qual o usuário podia alocar flores de diferentes cores em áreas de um campo. O programa validava as entradas e mostrava a distribuição final.

Esse exercício me ajudou a treinar a lógica de programação, principalmente com estruturas de repetição e condicionais, além de trabalhar com arrays para armazenar os dados.

Aprendizados principais:
- Estruturas de repetição (for, while) e condicionais (if).
- Validação de dados inseridos pelo usuário.
- Uso de arrays para armazenar e organizar informações.
- Pensamento lógico aplicado em jogos e simulações.`
      },
    ],
    [
      {
        src: "numprimo.jpg",
        titulo: "Verificação de Número Primo em C",
        alt: "Número Primo em C",
        descricao: `Verificação de Número Primo em C

Esse programa tinha como objetivo verificar se um número fornecido pelo usuário era primo ou não. Para isso, utilizei um laço de repetição que testava divisores possíveis até metade do número.

Foi uma ótima prática de lógica matemática aplicada à programação.

Aprendizados principais:
- Estrutura de repetição com verificação de condição.
- Uso do operador % para identificar divisores.
- Conceito matemático de número primo aplicado em código.
- Otimização de algoritmos para reduzir verificações desnecessárias.`
      },
      {
        src: "claculadora.png",
        titulo: "Calculadora em C",
        alt: "Calculadora em C",
        descricao: `Calculadora em C

Esse projeto foi uma calculadora básica feita em C, que realizava as quatro operações: soma, subtração, multiplicação e divisão.

Implementei verificações para evitar erros, como divisão por zero, e formatei as saídas para facilitar a leitura dos resultados.

Aprendizados principais:
- Implementação de operações aritméticas em programação.
- Uso de estruturas condicionais para tratar exceções.
- Organização de código para múltiplos cálculos.
- Importância da validação de dados para evitar falhas.`
      },
    ],
    [
      {
        src: "piano.png",
        titulo: "Piano com Arduino",
        alt: "Piano com Arduino",
        descricao: `Piano com Arduino

Esse foi um projeto divertido e interativo. Criei um "piano eletrônico" utilizando botões conectados ao Arduino. Cada botão correspondia a uma nota musical, que era reproduzida por a buzzer através da função tone().

Foi muito interessante ver como algo simples, como botões e um buzzer, podia ser transformado em uma experiência musical.

Aprendizados principais:
- Uso do buzzer para gerar sons em diferentes frequências.
- Programação de múltiplas entradas digitais no Arduino.
- Criatividade na aplicação de componentes eletrônicos.
- Combinação de tecnologia e música em um projeto único.`
      },
    ],
  ];

  return (
    <section id="projetos" className="min-h-screen py-20 bg-[#e8f5ff]">
      <Container>
        <SectionTitle>projetos</SectionTitle>
        <Carousel items={slides} onOpen={(item) => setOpenItem(item)} />
        <ModalProjeto item={openItem} onClose={() => setOpenItem(null)} />
      </Container>
    </section>
  );
};

const Certificados = () => {
  const [openItem, setOpenItem] = useState(null)
  const slides = [
    [
      { 
        src: "apice.pdf", 
        alt: "Certificado APICE", 
        caption: "Certificado APICE - Competições Científicas", 
        pdf: "apice.pdf" 
      },
      { 
        src: "certificadocc50.pdf", 
        alt: "Certificado CC50", 
        caption: "Certificado CC50 - Introdução à Ciência da Computação", 
        pdf: "certificadocc50.pdf" 
      },
    ],
    [
      { 
        src: "certificadocss.pdf", 
        alt: "Certificado CSS", 
        caption: "Certificado CSS - Estilização Web", 
        pdf: "certificadocss.pdf" 
      },
      { 
        src: "certificadohtml.pdf", 
        alt: "Certificado HTML", 
        caption: "Certificado HTML - Desenvolvimento Web", 
        pdf: "certificadohtml.pdf" 
      },
    ],
  ]

  return (
    <section className="py-20 bg-[#e8f5ff]">
      <Container>
        <SectionTitle>certificados</SectionTitle>
        <Carousel items={slides} onOpen={(item) => setOpenItem(item)} />
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
          <img src="sala.jpg" alt="Contato" className="w-[400px] h-[250px] object-cover rounded-lg shadow-md" />
        </div>
        <div>
          <p className="max-w-[600px] text-[#0b2e55] text-lg leading-relaxed mb-6">
            Fique à vontade para entrar em contato para oportunidades, parcerias ou apenas dizer oi.
          </p>
          <ul className="space-y-2">
            <li>
              <a href="36950.14@educacao.org.br" className="text-[#2196f3] font-semibold">36950.14@educacao.org.br</a>
            </li>
            <li>
              <a href="https://instagram.com.br" target="_blank" className="text-[#2196f3] font-semibold">Instagram</a>
            </li>
            <li>
              <a href="https://linkdin.com.br" target="_blank" className="text-[#2196f3] font-semibold">Linkdin</a>
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
        <div className="text-[#2196f3] text-sm">© 2025 Michelle Marcondes. Todos os direitos reservados.</div>
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
      <ExperienciaAcademica />
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