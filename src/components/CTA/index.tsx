import {
  ServicesContainer,
  Header,
  Title,
  Dot,
  DottedLine,
  Subtitle,
  CardsContainer,
  ServiceCard,
  Icon,
  CardTitle,
  CardText,
} from "./style";

export function CTA() {
  const Cta = [
    {
      icon: "✦",
      title: "Estratégia",
      text: "Planejamento de conteúdo alinhado aos objetivos e ao posicionamento da marca.",
    },
    {
      icon: "✎",
      title: "Criação de Conteúdo",
      text: "Conteúdos pensados para comunicar, gerar conexão e fortalecer a identidade da marca.",
    },
    {
      icon: "▣",
      title: "Gestão de Redes",
      text: "Organização e gerenciamento da presença digital para manter uma comunicação consistente.",
    },
    {
      icon: "↗",
      title: "Análise de Resultados",
      text: "Acompanhamento dos dados para entender o desempenho e orientar os próximos passos.",
    },
  ];

  return (
    <ServicesContainer>
      <Header>
        <Title>
          O que fazemos?
          <Dot />
        </Title>

        <DottedLine />

        <Subtitle>
          Estratégia e conteúdo para construir uma presença digital relevante.
        </Subtitle>
      </Header>

      <CardsContainer>
        {Cta.map((service, index) => (
          <ServiceCard key={index}>
            <Icon>{service.icon}</Icon>

            <CardTitle>{service.title}</CardTitle>

            <CardText>{service.text}</CardText>
          </ServiceCard>
        ))}
      </CardsContainer>
    </ServicesContainer>
  );
}