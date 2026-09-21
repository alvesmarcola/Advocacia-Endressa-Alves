import { HeaderContainer, HeaderContent, LogoContainer } from './style'

import { SmallInvisibleButton, SmallOutlineButton } from '../Buttons/Buttons'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoContainer>
          <a href="#home">
            <img width={40} height={40}   alt="logo" />
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
            href="https://wa.me/5499359083"
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
