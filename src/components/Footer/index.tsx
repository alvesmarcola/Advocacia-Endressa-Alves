import React from 'react'
import {
  FooterContainer,
  ThankYou,
  ThankYouOutline,
  ThankYouMiddle,
  ContactContainer,
  ContactItem,
  Icon,
  ContactLink,
  Copyright,
} from './style'

export function Footer() {
  return (
    <FooterContainer>
      <ThankYou>
        <ThankYouOutline>THANK YOU!</ThankYouOutline>
        <ThankYouMiddle>THANK YOU!</ThankYouMiddle>
        <strong>THANK YOU!</strong>
      </ThankYou>

      <ContactContainer>
        <ContactItem>
          <Icon>
            <svg viewBox="0 0 24 24">
              <path d="M6 3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Zm2.5 5.5A1.5 1.5 0 1 0 8.5 5a1.5 1.5 0 0 0 0 3.5ZM7 9h3v8H7V9Zm5 0h2.8v1.1c.4-.7 1.2-1.4 2.7-1.4 2.9 0 3.5 1.9 3.5 4.4V17h-3v-3.5c0-.8 0-1.9-1.2-1.9s-1.4.9-1.4 1.9V17H12V9Z" />
            </svg>
          </Icon>

          <ContactLink href="#" target="_blank">
            /eduarda-alves
          </ContactLink>
        </ContactItem>

        <ContactItem>
          <Icon>
            <svg viewBox="0 0 24 24">
              <path d="M3 5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13ZM5.5 5a.5.5 0 0 0-.5.5v.4l7 4.8 7-4.8v-.4a.5.5 0 0 0-.5-.5h-13ZM19 8.3l-7 4.8-7-4.8v10.2a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5V8.3Z" />
            </svg>
          </Icon>

          <ContactLink href="mailto:eduarda@email.com">
            eduarda@email.com
          </ContactLink>
        </ContactItem>

        <ContactItem>
          <Icon>
            <svg viewBox="0 0 24 24">
              <path d="M6.6 3h3.1l1.4 4.1-1.8 1.8a13.8 13.8 0 0 0 5.8 5.8l1.8-1.8L21 14.3v3.1c0 1.4-1.1 2.6-2.5 2.6C10.5 20 4 13.5 4 5.5 4 4.1 5.1 3 6.6 3Z" />
            </svg>
          </Icon>

          <ContactLink href="https://wa.me/5551999999999" target="_blank">
            (51) 99999-9999
          </ContactLink>
        </ContactItem>

        <ContactItem>
          <Icon>
            <svg viewBox="0 0 24 24">
              <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5ZM17.5 6a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z" />
            </svg>
          </Icon>

          <ContactLink href="#" target="_blank">
            @eduarda.alves
          </ContactLink>
        </ContactItem>
      </ContactContainer>

      <Copyright>
        © {new Date().getFullYear()} Eduarda Alves. Todos os direitos reservados.
      </Copyright>
    </FooterContainer>
  )
}