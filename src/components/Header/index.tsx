import { HeaderContainer, HeaderContent, LogoContainer } from './style'
import logoSmallImg from '../../assets/ea_logo.png'
import { SmallInvisibleButton, SmallOutlineButton } from '../Buttons/Buttons'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoContainer>
          <a href="#home">
            <img width={40} height={40} src={logoSmallImg}  alt="logo Endressa" />
          </a>
  
        </LogoContainer>
        <nav>
          <a href="#contato">
            <SmallInvisibleButton>Contato</SmallInvisibleButton>
          </a>
          <a href="#services">
            <SmallInvisibleButton>Áreas de atuação</SmallInvisibleButton>
          </a>
          <a href="#home">
            <SmallInvisibleButton>Home</SmallInvisibleButton>
          </a>
          <a
            href="http://api.whatsapp.com/send?1=pt_BR&phone=55051991276728"
            target="_blank"
            rel="noreferrer"
          >
            <SmallOutlineButton>Entrar em contato</SmallOutlineButton>
          </a>
        </nav>
      </HeaderContent>
    </HeaderContainer>
  )
}
