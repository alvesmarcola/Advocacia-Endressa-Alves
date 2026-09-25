import {
  HomeContainer,
  Content,
  Flower,
  Name,
  Subtitle,
  Proposal,
  ProposalLine,
  ProposalTitle,
  MainTitle,
  Keywords,
  Keyword,
  BottomText,
} from './style'

import flowerImg from '../../assets/flor.png'

export function Home() {
  return (
    <HomeContainer>
      <Content>
        <Flower src={flowerImg} alt="" />

        <Name>Duda Alves</Name>

        <Subtitle>ESTRATEGISTA DIGITAL</Subtitle>

        <Proposal>
          <ProposalLine />

          <ProposalTitle>
            <span>✦</span>
            PROPOSTA
            <span>✦</span>
          </ProposalTitle>

          <ProposalLine />
        </Proposal>

        <MainTitle>COMERCIAL</MainTitle>

        <Keywords>
          <Keyword>✦ ESTRATÉGIA</Keyword>
          <Keyword>✦ CONTEÚDO</Keyword>
          <Keyword>✦ RESULTADOS</Keyword>
        </Keywords>

        <BottomText>
          CONEXÃO GERA MARCAS FORTES
        </BottomText>
      </Content>
    </HomeContainer>
  )
}