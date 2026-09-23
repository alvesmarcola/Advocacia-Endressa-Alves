import styled from 'styled-components'

export const HomeContainer = styled.section`
  position: relative;

  width: 100%;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.offWhite};

  overflow: hidden;

  &:hover img {
    transform: scale(1.01);
  }
`

export const HomeImage = styled.img`
  width: 100%;
  height: auto;

  display: block;

  object-fit: contain;

  animation: showHome 1.2s ease-out forwards;

  transition: transform 0.8s ease;

  @keyframes showHome {
    0% {
      opacity: 0;
      transform: translateX(-80px);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media (max-width: 768px) {
    width: 120%;
    max-width: none;

    animation-duration: 1s;
  }
`