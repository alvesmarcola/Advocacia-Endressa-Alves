import {
  CTAContainer,
  Content,
  Title,
  ServiceList,
  Service,
  ServiceHeader,
  ServiceName,
  Price,
  Description,
  PhoneImage,
  Flower,
} from './style'

import phoneImg from '../../assets/services-img.png'
import flowerImg from '../../assets/branch_bg.png'

export function CTA() {
  return (
    <CTAContainer id="cta">
      <Content>
        <div className="leftContent">
          <Title>
            Serviços Iniciais para
            <br />
            profissionalizar seu perfil
          </Title>

          <ServiceList>
            <Service>
              <ServiceHeader>
                <ServiceName>
                  <span>➜</span>
                  Análise de Perfil
                </ServiceName>

                <Price>R$ 180,00</Price>
              </ServiceHeader>

              <Description>
                Analisaremos as métricas de perfil, ajustes na biografia
                <br />
                de suas redes sociais, padronização de atendimento
              </Description>
            </Service>

            <Service>
              <ServiceHeader>
                <ServiceName>
                  <span>➜</span>
                  Fotos e Gravações
                </ServiceName>

                <Price>R$ 350,00</Price>
              </ServiceHeader>

              <Description>
                Crio roteiros, que te conectam, gravamos vídeos e faço
                <br />
                fotos de produtos, te entrego em alta qualidade e
                <br />
                prontos para post.
              </Description>
            </Service>

            <Service>
              <ServiceHeader>
                <ServiceName>
                  <span>➜</span>
                  Gerenciamento
                </ServiceName>

                <Price>R$ 550,00</Price>
              </ServiceHeader>

              <Description>
                Nesse pacote incluiremos os dois planos acima e
                <br />
                incluímos a gestão das redes sociais da sua empresa,
                <br />
                com posts programados, tráfego pago e análises
                <br />
                semanais.
              </Description>
            </Service>
          </ServiceList>
        </div>

        <div className="rightContent">
          <PhoneImage
            src={phoneImg}
            alt="Exemplo de conteúdo para redes sociais"
          />

          <Flower src={flowerImg} alt="" />
        </div>
      </Content>
    </CTAContainer>
  )
}