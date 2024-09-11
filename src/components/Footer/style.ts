import styled from 'styled-components'

export const FooterContainer = styled.footer`
  width: 100%;

  padding: 0 1.5rem 0 1.5rem;

  background: #0A3D62;
  border-radius: 8px;
  border: 1px solid transparent;
`
export const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  max-width: 1224px;
  margin: 0 auto;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;

    div {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }

    p {
      font-family: 'Fira Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      line-height: 150%;

      color: ${(props) => props.theme.gray500};
    }
  }

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 2rem;
    padding: 2.5rem 0 2.5rem 0;

    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      
      border-radius: 8px;
      border: 1px solid transparent;

      border-radius: 8px;

      cursor: pointer;
    }
  }

  @media (max-width: 820px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5rem 0 0 0;

    div {
      flex-direction: column;
      flex-direction: column;
      align-items: flex-start;

      div {
        flex-direction: column;
        align-items: flex-start;
      }
    }
  }
`
