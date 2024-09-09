import { HomeContainer, HomeContent } from './style'
import homeImg from '../../assets/home_img.webp'
import { DefaultButton, InvisibleButton } from '../Buttons/Buttons'
import branchBgImg from '../../assets/branch_bg.png'
import { Parallax } from 'react-scroll-parallax'

export function Home() {
  return (
    <HomeContainer id="home">
      <HomeContent>
        <h1>Quer Proteger Seus Direitos? Converse com Uma Advogada Hoje!</h1>
        <p>
        Seu caso é único, e nosso atendimento também. 
        Estamos prontos para oferecer o melhor suporte jurídico para você.
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
            <p>Trabalhamos em prol da</p>
            <strong>Justiça</strong>
          </Parallax>
          <img
            width={452}
            height={716}
            className="parallaxImg"
            src={homeImg}
            alt="estatua justiça"
          />
        </div>
      </div>

      <img className="branchBg" src={branchBgImg} alt="ramo fundo" />
    </HomeContainer>
  )
}
