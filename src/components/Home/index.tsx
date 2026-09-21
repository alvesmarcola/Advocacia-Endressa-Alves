import { HomeContainer, HomeContent } from './style'
import homeImg from '../../assets/home-img.jpg'
import { DefaultButton, InvisibleButton } from '../Buttons/Buttons'
import branchBgImg from '../../assets/branch_bg.png'
import { Parallax } from 'react-scroll-parallax'

export function Home() {
  return (
    <HomeContainer id="home">
      <HomeContent>
        <h1>Transforme sua presença nas redes sociais!</h1>
        <p>
        Conteúdos estratégicos, criativos e personalizados para fortalecer sua marca,
  atrair seu público e fazer seu negócio crescer.
        </p>
        <div className="buttonContainer">
          <a href="#services">
            <DefaultButton>Vamos começar</DefaultButton>
          </a>
          <a href="#services">
            <InvisibleButton>Saber mais</InvisibleButton>
          </a>
        </div>
      </HomeContent>

      <div className="homeBg">
        <div className="paralaxContainer">
          <Parallax className="paralaxItem" speed={-10}>
            <p>Sua marca no digital, do jeito certo.</p>
            <strong>Vamos criar?</strong>
          </Parallax>
          <img   
            className="parallaxImg"
            src={homeImg}
            alt="Ilustração"
          />
        </div>
      </div>

    </HomeContainer>
  )
}
