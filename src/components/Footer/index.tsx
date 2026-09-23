import {
  FooterContainer,
  Content,
  Title,
  Flower,
  CardsContainer,
  Card,
  CardTitle,
  Description,
  Price,
  PriceSmall,
  PriceBig,
  BottomText,
  ArtList,
  ArtItem,
  ArtPrice,
} from './style'

import flower from '../../assets/branch_bg.png'

export function Footer() {
  return (
    <FooterContainer>
      <Content>
        <Title>Posts, Stories e Impressos</Title>

        <Flower src={flower} alt="" />

        <CardsContainer>

          {/* CARD 1 */}
          <Card>
            <CardTitle>
              Posts Feed e Stories
            </CardTitle>

            <Description>
              Artes em formato feed
              <br />
              retrato e stories
            </Description>

            <Price>
              <PriceSmall>R$</PriceSmall>
              <PriceBig>8</PriceBig>
              <PriceSmall>,00</PriceSmall>
            </Price>

            <BottomText>
              1 arte Feed ou Story
            </BottomText>
          </Card>

          {/* CARD 2 */}
          <Card>
            <CardTitle>
              Pacotes de artes
            </CardTitle>

            <Description>
              Pacotes de artes para feed,
              <br />
              feed retrato e stories.
            </Description>

            <ArtList>
              <ArtItem>
                <span>➜</span>
                <p>6 artes mensais</p>
                <ArtPrice>R$200</ArtPrice>
              </ArtItem>

              <ArtItem>
                <span>➜</span>
                <p>8 artes mensais</p>
                <ArtPrice>R$230</ArtPrice>
              </ArtItem>

              <ArtItem>
                <span>➜</span>
                <p>10 artes mensais</p>
                <ArtPrice>R$280</ArtPrice>
              </ArtItem>

              <ArtItem>
                <span>➜</span>
                <p>12 artes mensais</p>
                <ArtPrice>R$300</ArtPrice>
              </ArtItem>
            </ArtList>

            <BottomText>
              Artes intercaladas entre Feed e
              <br />
              Story, não incluso fotografar e
              <br />
              gravar vídeos de produtos.
            </BottomText>
          </Card>

          {/* CARD 3 */}
          <Card>
            <CardTitle>
              Materiais para impressão
            </CardTitle>

            <Description>
              Artes para cardápios, cartões de
              <br />
              visita, panfletos e outros impressos
            </Description>

            <div className="from">
              A partir de:
            </div>

            <Price>
              <PriceSmall>R$</PriceSmall>
              <PriceBig>50</PriceBig>
              <PriceSmall>,00</PriceSmall>
            </Price>

            <BottomText>
              Nessa opção os valores poderão
              <br />
              variar conforme a complexidade
              <br />
              do impresso.
            </BottomText>
          </Card>

        </CardsContainer>
      </Content>
    </FooterContainer>
  )
}