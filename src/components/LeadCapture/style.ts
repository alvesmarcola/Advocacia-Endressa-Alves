import styled from 'styled-components'

export const LeadCaptureContainer = styled.section`
  position: relative;

  width: 100%;
  min-height: 100vh;

  background: ${({ theme }) => theme.offWhite};

  overflow: hidden;



  &::before {
    content: '';

    position: absolute;

    left: 0;
    top: 0;

    width: 38px;
    height: 100%;

    background: ${({ theme }) => theme.plum};
  }

  @media (max-width: 768px) {
    &::before {
      width: 12px;
    }
  }
`

export const Content = styled.div`
  position: relative;

  width: 100%;
  max-width: 1250px;

  min-height: 100vh;

  margin: 0 auto;

  padding: 2.5rem 3rem 4rem;

  display: flex;
  flex-direction: column;

  justify-content: center;
`

export const Title = styled.h2`
  font-family: 'Playfair Display', serif;

  font-size: clamp(3rem, 5vw, 4.5rem);

  font-weight: 400;

  line-height: 1;

  color: ${({ theme }) => theme.plum};

  text-align: center;

  margin-bottom: 3rem;

  animation: titleEnter 1s ease-out;

  @keyframes titleEnter {
    from {
      opacity: 0;
      transform: translateY(-40px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    font-size: 3rem;

    margin-bottom: 2rem;
  }
`

export const Flower = styled.img`
  position: absolute;

  width: 75px;

  top: 2rem;
  right: 5%;

  opacity: 0.75;

  animation: flowerEnter 1s ease-out;

  @keyframes flowerEnter {
    from {
      opacity: 0;
      transform: translateX(30px);
    }

    to {
      opacity: 0.75;
      transform: translateX(0);
    }
  }

  @media (max-width: 768px) {
    width: 55px;

    right: 2rem;
    top: 1.5rem;
  }
`

export const CardsContainer = styled.div`
  display: grid;

  grid-template-columns: 1fr 1.35fr 1fr;

  align-items: center;

  gap: 1.2rem;

  width: 100%;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;

    gap: 3rem;

    max-width: 600px;

    margin: 0 auto;
  }
`

export const Card = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  align-items: center;

  animation: cardEnter 0.8s ease-out backwards;

  &:nth-child(1) {
    animation-delay: 0.2s;
  }

  &:nth-child(2) {
    animation-delay: 0.4s;
  }

  &:nth-child(3) {
    animation-delay: 0.6s;
  }

  @keyframes cardEnter {
    from {
      opacity: 0;
      transform: translateY(50px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

export const CardTitle = styled.div`
  position: relative;

  z-index: 2;

  width: 82%;

  min-height: 36px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.4rem 1rem;

  margin-bottom: -2px;

  border-radius: 25px;

  background: ${({ theme }) => theme.plum};

  color: ${({ theme }) => theme.offWhite};

  font-family: 'Montserrat', sans-serif;

  font-size: 1rem;

  text-align: center;

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);

    box-shadow: 0 8px 20px rgba(110, 80, 100, 0.2);
  }
`

export const CardImage = styled.img`
  width: 100%;

  height: 350px;

  object-fit: contain;

  padding: 2.8rem 1rem 1.5rem;

  border-radius: 25px;

  background: ${({ theme }) => theme.mauve};

  transition:
    transform 0.4s ease,
    box-shadow 0.4s ease;

  &:hover {
    transform: translateY(-5px);

    box-shadow: 0 15px 30px rgba(87, 60, 44, 0.12);
  }

  ${Card}:nth-child(2) & {
    height: 365px;
  }

  @media (max-width: 900px) {
    height: auto;
    max-height: 400px;

    ${Card}:nth-child(2) & {
      height: auto;
    }
  }
`