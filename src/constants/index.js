const navLinks = [
  {
    name: "Trabalhos",
    link: "#work",
  },
  {
    name: "Experiencia",
    link: "#experience",
  },
  {
    name: "Habilidades",
    link: "#skills",
  },
  {
    name: "Depoimentos",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideias", imgPath: "/images/ideas.svg" },
  { text: "Conceitos", imgPath: "/images/concepts.svg" },
  { text: "Design", imgPath: "/images/designs.svg" },
  { text: "Código", imgPath: "/images/code.svg" },
  { text: "Ideias", imgPath: "/images/ideas.svg" },
  { text: "Conceitos", imgPath: "/images/concepts.svg" },
  { text: "Design", imgPath: "/images/designs.svg" },
  { text: "Código", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Anos de experiência" },
  { value: 200, suffix: "+", label: "Clientes satisfeitos" },
  { value: 30, suffix: "+", label: "Projetos Concluídos" },
  { value: 90, suffix: "%", label: "Taxa de retenção de clientes" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Foco na Qualidade",
    desc: "Entregando resultados de alta qualidade, mantendo atenção a cada detalhe.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Comunicação Acertiva",
    desc: "Mantendo você atualizado em cada etapa para garantir transparência e clareza.",
  },
  {
    imgPath: "/images/time.png",
    title: "Entrega no prazo",
    desc: "Garantir que os projetos sejam concluídos dentro do prazo, com qualidade e atenção aos detalhes.",
  },
];

const techStackImgs = [
  {
    name: "Desenvolvedor React",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Desenvolvedor Python",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Desenvolvedor Backend",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Comunicação Eficaz",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Metodologia Ágil",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "Desenvolvedor React",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Desenvolvedor Python",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Desenvolvedor Backend",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Comunicação Eficaz",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Metodologia Ágil",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Welbert trouxe criatividade e expertise técnica para a equipe, melhorando significativamente o desempenho do nosso front-end. Seu trabalho foi inestimável para proporcionar experiências mais rápidas.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Desenvolvedor Frontend",
    date: "Janeiro 2023 - Atual",
    responsibilities: [
      "Desenvolveu e manteve recursos voltados para o usuário no site da Hostinger.",
      "Colaborou estreitamente com designers de UI/UX para garantir experiências perfeitas para o usuário.",
      "Otimizou aplicativos web para máxima velocidade e escalabilidade.",
    ],
  },
  {
    review:
      "As contribuições do Welbert para os aplicativos web do Docker foram excepcionais. Ele aborda os desafios com uma mentalidade de resolução de problemas.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Desenvolvedor Full Stack",
    date: "Junho 2020 - Dezembro 2023",
    responsibilities: [
      "Liderou o desenvolvimento de aplicativos web do Docker, com foco em escalabilidade.",
      "Trabalhou com engenheiros de backend para integrar APIs perfeitamente com o frontend.",
      "Contribuiu para projetos de código aberto que foram utilizados com o ecossistema Docker.",
    ],
  },
  {
    review:
      "O trabalho do Welbert no aplicativo móvel da Appwrite trouxe um alto nível de qualidade e eficiência. Ele entregou soluções que aprimoraram nossa experiência móvel e atenderam aos nossos objetivos de produto.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Desenvolvedor React Native",
    date: "Março 2019 - Maio 2020",
    responsibilities: [
      "Criação de aplicativos móveis multiplataforma usando React Native, integrando-os aos serviços de backend da Appwrite.",
      "Melhoria no desempenho do aplicativo e na experiência do usuário por meio da otimização e testes de código.",
      "Coordenação com a equipe de produto para implementar recursos com base no feedback.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Luan Pereira",
    mentions: "@luanp",
    review:
      "Não tenho palavras suficientes para elogiar o Welbert. Ele conseguiu transformar os requisitos complexos do nosso projeto em um site funcional e integrado. Sua capacidade de resolução de problemas é excepcional.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Marcos Alves",
    mentions: "@marcosalves",
    review:
      "Trabalhar com o Welbert foi uma experiência fantástica. Ele transformou nosso site desatualizado em uma plataforma moderna e intuitiva. Sua atenção aos detalhes e seu compromisso com a qualidade são incomparáveis. Recomendo-o fortemente para qualquer projeto de desenvolvimento web.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Giovane Santos",
    mentions: "@giovanesantos",
    review:
      "Foi um prazer absoluto colaborar com o Welbert. Seu profissionalismo, presteza e dedicação em entregar resultados excepcionais foram evidentes durante todo o nosso projeto. O entusiasmo do Adrian por cada aspecto do desenvolvimento é realmente impressionante. Se você busca elevar seu site e sua marca, Adrian é o parceiro ideal.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Rodrigo Garcia",
    mentions: "@rodrigogarcia",
    review:
      "Foi um prazer trabalhar com o Welbert. Ele transformou nosso site desatualizado em uma plataforma nova e intuitiva, moderna e fácil de navegar. Trabalho fantástico no geral.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Felipe Ribeiro",
    mentions: "@fel_ribeiro",
    review:
      "A expertise do Welbert em desenvolvimento web é realmente impressionante. Ele entregou uma solução robusta e escalável para o nosso site de e-commerce, e nossas vendas online aumentaram significativamente desde o lançamento. Ele é um verdadeiro profissional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Igor Campos",
    mentions: "@igorc",
    review:
      "Foi um prazer trabalhar com o Welbert. Ele entendeu perfeitamente nossas necessidades e entregou um site que superou nossas expectativas. Suas habilidades em desenvolvimento front-end e back-end são de primeira linha.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  navLinks,
  counterItems,
  logoIconsList,
  abilities,
  techStackImgs,
  techStackIcons,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
};
