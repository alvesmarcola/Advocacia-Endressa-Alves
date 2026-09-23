import { HomeContainer, HomeImage } from './style'
import homeImg from '../../assets/home-test.png'

export function Home() {
  return (
    <HomeContainer id="home">
      <HomeImage
        src={homeImg}
        alt="Duda Alves - Estrategista Digital - Proposta Comercial"
      />
    </HomeContainer>
  )
}