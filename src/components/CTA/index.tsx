import {
  CTAContainer,
  Content,
  TextContent,
  Title,
  BenefitsList,
  Benefit,
  BenefitIcon,
  BenefitText,
  ImageWrapper,
  Image,
  Flower,
} from './style'

import serviceImg from '../../assets/post6.jfif'
import flower from '../../assets/branch_bg.png'

export function CTA() {
  const benefits = [
    'Construir autoridade e credibilidade.',
    'Criaremos uma presença digital profissional e atrativa.',
    'Aumentar alcance e visibilidade da sua marca nas redes sociais.',
    'Desenvolver uma presença visual consistente e que entregue confiança aos seus clientes.',
    'Destacar os diferenciais da empresa em relação à concorrência.',
    'Humanizar a comunicação da marca, aproximando-a do público.',
  ]

  return (
    <CTAContainer>
      <Content>

        <TextContent>
          <Title>
            Como meus serviços
            <br />
            vão te ajudar
          </Title>

          <BenefitsList>
            {benefits.map((benefit, index) => (
              <Benefit key={index}>
                <BenefitIcon>➜</BenefitIcon>

                <BenefitText>
                  {benefit}
                </BenefitText>
              </Benefit>
            ))}
          </BenefitsList>
        </TextContent>

        <ImageWrapper>
          <Flower src={flower} alt="" />

          <Image
            src={serviceImg}
            alt="Profissional utilizando o celular"
          />
        </ImageWrapper>

      </Content>
    </CTAContainer>
  )
}