import styled from 'styled-components'

export const FinalFooterContainer = styled.footer`
  width: 100%;

  background: ${({ theme }) => theme.plum};

  color: ${({ theme }) => theme.offWhite};

  padding: 5rem 2rem 2rem;
`

export const Content = styled.div`
  width: 100%;
  max-width: 1100px;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Logo = styled.div`
  font-family: 'Playfair Display', serif;

  font-size: 2rem;

  font-weight: 400;

  letter-spacing: 4px;

  color: ${({ theme }) => theme.offWhite};
`

export const Message = styled.h2`
  margin: 2rem 0 0;

  font-family: 'Playfair Display', serif;

  font-size: clamp(2.5rem, 5vw, 4rem);

  font-weight: 400;

  line-height: 1;

  text-align: center;

  color: ${({ theme }) => theme.offWhite};
`

export const Links = styled.nav`
  display: flex;

  align-items: center;

  justify-content: center;

  gap: 2.5rem;

  margin-top: 3rem;

  @media (max-width: 600px) {
    flex-direction: column;

    gap: 1rem;
  }
`

export const Link = styled.a`
  font-family: 'Montserrat', sans-serif;

  font-size: 0.9rem;

  color: ${({ theme }) => theme.offWhite};

  text-decoration: none;

  transition:
    color 0.3s ease,
    transform 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.rose};

    transform: translateY(-2px);
  }
`

export const Copyright = styled.p`
  width: 100%;

  margin-top: 5rem;

  padding-top: 1.5rem;



  font-family: 'Montserrat', sans-serif;

  font-size: 0.75rem;

  text-align: center;

  color: ${({ theme }) => theme.offWhite};

  opacity: 0.6;
`