import {
  LeadCaptureContainer,
  Content,
  Title,
  Flower,
  CardsContainer,
  Card,
  CardTitle,
  CardImage,
} from './style'

import flower from '../../assets/branch_bg.png'

import visibilityImg from '../../assets/visibility.jpeg'
import organizationImg from '../../assets/organization.jpeg'
import interactionImg from '../../assets/interaction.jpeg'

export function LeadCapture() {
  return (
    <LeadCaptureContainer>
      <Content>
        <Title>
          O que meu trabalho proporcionou?
        </Title>

        <Flower src={flower} alt="" />

        <CardsContainer>
          <Card>
            <CardTitle>Visibilidade</CardTitle>

            <CardImage
              src={visibilityImg}
              alt="Resultado de visibilidade"
            />
          </Card>

          <Card>
            <CardTitle>Organização/Credibilidade</CardTitle>

            <CardImage
              src={organizationImg}
              alt="Resultado de organização e credibilidade"
            />
          </Card>

          <Card>
            <CardTitle>Interação/Vendas</CardTitle>

            <CardImage
              src={interactionImg}
              alt="Resultado de interação e vendas"
            />
          </Card>
        </CardsContainer>
      </Content>
    </LeadCaptureContainer>
  )
}