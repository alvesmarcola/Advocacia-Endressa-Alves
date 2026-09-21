import {
  ServicesContainer,
  CardsContainer,
  Card,
  CenterWrapper,
  CenterImage,
  CenterCard,
  Title,
  Quote,
  Text,
} from "./style";


export function LeadCapture() {
  return (
    <ServicesContainer>
      <CardsContainer>
        <Card className="side-card">
          <Title>O que torna a Duda diferente?</Title>

          <Quote>“</Quote>

          <Text>
            Mais do que criar posts bonitos, 
            a Duda pensa em estratégia, identidade e comunicação. 
            Cada conteúdo é desenvolvido para conectar a marca com seu público e fortalecer sua presença digital.
          </Text>
        </Card>

        <Card className="side-card">
          <Title>Para quem é a Duda?</Title>

          <Quote>“</Quote>

          <Text>
            Para marcas e profissionais que querem se posicionar melhor nas redes sociais, 
            transmitir sua essência e transformar o Instagram em uma ferramenta de conexão e crescimento.
          </Text>
        </Card>

        <Card className="side-card">
          <Title>O que existe por trás de um perfil?</Title>

          <Quote>“</Quote>

          <Text>
            Estratégia, planejamento, identidade visual e comunicação. 
            Cada publicação precisa ter um propósito e contribuir para a forma como uma marca é percebida.
          </Text>
        </Card>
      </CardsContainer>
    </ServicesContainer>
  );
}