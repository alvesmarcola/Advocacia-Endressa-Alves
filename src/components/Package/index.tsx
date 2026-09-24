import {
  PackageContainer,
  Content,
  LeftContent,
  Title,
  Description,
  Flower,
  RightContent,
  ServicesList,
  ServiceItem,
  ServiceIcon,
  PriceCard,
  PriceTitle,
  Price,
  PriceCurrency,
  PriceCents,
} from './style'

export function Package() {
  return (
    <PackageContainer id="package">
      <Content>
        <LeftContent>
          <Title>
            O pacote que te
            <br />
            acompanha
            <br />
            do início ao
            <br />
            sucesso.
          </Title>

          <Description>
            Não há mudança sem sair da sua zona de conforto,
            investir na sua imagem não traz somente um
            Instagram bonito, entrega Credibilidade, se você sabe o
            que está vendendo, sabe que é bom, eu te ajudo a
            comprovar e a entregar para seu cliente AUTORIDADE,
            você não vai ter só novos clientes e sim, novas
            conexões.
          </Description>

          <Flower>✦</Flower>
        </LeftContent>

        <RightContent>
          <ServicesList>
            <ServiceItem>
              <ServiceIcon>→</ServiceIcon>
              <span>Análise de Perfil</span>
            </ServiceItem>

            <ServiceItem>
              <ServiceIcon>→</ServiceIcon>
              <span>Roteiro, vídeos e fotos</span>
            </ServiceItem>

            <ServiceItem>
              <ServiceIcon>→</ServiceIcon>
              <span>Posts para redes sociais</span>
            </ServiceItem>

            <ServiceItem>
              <ServiceIcon>→</ServiceIcon>
              <span>Gestão das redes</span>
            </ServiceItem>
          </ServicesList>

          <PriceCard>
            <PriceTitle>POR APENAS</PriceTitle>

            <Price>
              <PriceCurrency>R$</PriceCurrency>
              550
              <PriceCents>,00</PriceCents>
            </Price>
    
          </PriceCard>
        </RightContent>
      </Content>
    </PackageContainer>
  )
}