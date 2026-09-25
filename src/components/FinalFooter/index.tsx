import {
  FinalFooterContainer,
  Content,
  Logo,
  Message,
  Links,
  Link,
  Copyright,
} from './style'

export function FinalFooter() {
  return (
    <FinalFooterContainer>
      <Content>
        <Logo>DUDA</Logo>

        <Message>
          Sua marca merece ser vista.
        </Message>

        <Links>
          <Link
            href="https://wa.me/5554999359083"
            target="_blank"
            rel="noopener noreferrer"
          >
            54 99935-9083
          </Link>

          <Link
            href="https://www.instagram.com/eduarda_estrategistadigital?stkn=dmVrN282Mmk3aXl0"
            target="_blank"
            rel="noopener noreferrer"
          >
            @Eduarda_estrategistadigital
          </Link>

          
        </Links>

        <Copyright>
          © 2026 — Todos os direitos reservados.
        </Copyright>
      </Content>
    </FinalFooterContainer>
  )
}