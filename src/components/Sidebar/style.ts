import styled from 'styled-components'

export const SidebarContainer = styled.a`
  position: fixed;

  right: 25px;
  bottom: 25px;

  z-index: 9999;

  width: 62px;
  height: 62px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: #25d366;
  color: #fff;

  text-decoration: none;

  font-family: 'Montserrat', sans-serif;
  font-size: 0.65rem;
  font-weight: 700;

  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.18);

  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 600px) {
    width: 55px;
    height: 55px;

    right: 18px;
    bottom: 18px;
  }
`