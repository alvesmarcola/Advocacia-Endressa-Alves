import {
  ServicesContainer,
  Content,
  TitleContainer,
  Title,
  Flower,
  StepsContainer,
  Step,
  Number,
  StepText,
  Line,
} from './style'

import flower from '../../assets/branch_bg.png'

export function Services() {
  return (
    <ServicesContainer id="services">
      <Content>

        <TitleContainer>
          <Title>
            Passo a passo
            <br />
            do que eu
            <br />
            ofereço
          </Title>

          <Flower src={flower} alt="" />
        </TitleContainer>

        <StepsContainer>

          <Step>
            <Line />

            <Number className="number1">
              1
            </Number>

            <StepText>
              Inicialmente analiso o seu cliente e
              <br />
              entendo o que ele espera do seu
              <br />
              trabalho. O que você oferece que seu
              <br />
              cliente precisa?
            </StepText>
          </Step>

          <Step>
            <Number className="number2">
              2
            </Number>

            <StepText>
              Depois de entender quem é seu cliente e
              <br />
              o que ele espera, traçamos juntos o que
              <br />
              você espera do meu trabalho. E então
              <br />
              iniciaremos nosso projeto.
            </StepText>
          </Step>

          <Step>
            <Number className="number3">
              3
            </Number>

            <StepText>
              Criamos um roteiro, um calendário
              <br />
              flexível conforme a receptividade dos
              <br />
              seus clientes, criamos conteúdo. Entrego
              <br />
              vídeos, fotos de produto e gestão do seu
              <br />
              perfil.
            </StepText>
          </Step>

        </StepsContainer>

      </Content>
    </ServicesContainer>
  )
}