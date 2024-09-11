import styled from 'styled-components';

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  background: #fff; /* Fundo branco */
  @media (max-width: 820px) {
    overflow-x: hidden;
  }
`;

export const SocialLinks = styled.div`
  max-width: 1224px;
  width: 100%;

  position: sticky;
  bottom: 200px;

  margin: -15rem 0 0 1rem;

  @media (max-width: 820px) {
    display: none;
  }

  nav {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 2rem;

    a {
      background: linear-gradient(
            ${(props) => props.theme.blue700}, /* Azul escuro para links */
            ${(props) => props.theme.blue700}
          )
          padding-box,
        ${(props) => props.theme.goldBorder} border-box; /* Dourado para borda */
      border-radius: 8px;
      border: 1px solid transparent;
      z-index: 3;

      cursor: pointer;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      /* Adicionar cor de texto e hover */
      color: #fff; /* Texto branco */
      &:hover {
        background: ${(props) => props.theme.blueHover}; /* Hover azul claro */
      }
    }
  }
`;

export const ChatPopup = styled.a`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 3;

  display: none;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius:54px; `
