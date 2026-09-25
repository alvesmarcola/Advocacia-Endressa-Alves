import {
  FooterContainer,
  Content,
  LeftContent,
  Title,
  Description,
  Flower,
  RightContent,
  ServicesList,
  Service,
  ServiceIcon,
  ServiceName,
  WhatsAppBox,
  WhatsAppTitle,
} from './style'

import flowerImg from '../../assets/branch_bg.png'

export function Footer() {
  const services = [
    'Análise de Perfil',
    'Roteiro, vídeos e fotos',
    'Posts para redes sociais',
    'Gestão das redes',
  ]

  return (
    <FooterContainer>
      <Content>
        <LeftContent>
          <Title>
            O pacote que
            <br />
            te acompanha
            <br />
            do início ao
            <br />
            sucesso.
          </Title>

          <Flower src={flowerImg} alt="" />

          <Description>
            Não há mudança sem sair da sua zona de conforto,
            <br />
            investir na sua imagem não traz somente um
            <br />
            Instagram bonito, entrega Credibilidade, se você sabe o
            <br />
            que está vendendo, sabe o que está vendendo,
            <br />
            comprovar e a entregar para seu cliente AUTORIDADE,
            <br />
            você não vai só ter novos clientes e sim, novas
            <br />
            conexões.
          </Description>
        </LeftContent>

        <RightContent>
          <ServicesList>
            {services.map((service) => (
              <Service key={service}>
                <ServiceIcon>➜</ServiceIcon>
                <ServiceName>{service}</ServiceName>
              </Service>
            ))}
          </ServicesList>

          <WhatsAppBox>
            <WhatsAppTitle>
              Clique no Whats
              <br />
              para uma análise
              <br />
              do seu perfil.
            </WhatsAppTitle>
          </WhatsAppBox>
        </RightContent>
      </Content>
    </FooterContainer>
  )
}