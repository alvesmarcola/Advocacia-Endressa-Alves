import styled from 'styled-components'

export const ServicesContainer = styled.section`
  position: relative;

  width: 100%;
  min-height: 100vh;

  background: ${({ theme }) => theme.offWhite};

  overflow: hidden;

  padding: 5rem 7vw;

  &::before {
    content: '';

    position: absolute;

    left: 0;
    top: 0;

    width: 35px;
    height: 100%;

    background: ${({ theme }) => theme.plum};
  }

  @media (max-width: 768px) {
    padding: 4rem 2rem;

    &::before {
      width: 12px;
    }
  }
`

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;

  margin: 0 auto;

  display: grid;
  grid-template-columns: 42% 58%;

  min-height: 90vh;

  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;

  padding-left: 2rem;

  @media (max-width: 768px) {
    padding-left: 0;
  }
`

export const Title = styled.h2`
  font-family: 'Playfair Display', serif;

  font-size: clamp(3.5rem, 5vw, 5rem);

  line-height: 0.85;

  font-weight: 400;

  color: ${({ theme }) => theme.plum};

  letter-spacing: -2px;

  animation: titleEnter 1s ease-out;

  @keyframes titleEnter {
    from {
      opacity: 0;
      transform: translateX(-60px);
    }

    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
`

export const Flower = styled.img`
  width: 90px;

  margin-top: 2rem;
  margin-left: 5rem;

  opacity: 0.75;

  animation: flowerEnter 1.3s ease-out;

  @keyframes flowerEnter {
    from {
      opacity: 0;
      transform: translateY(30px);
    }

    to {
      opacity: 0.75;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    margin-left: 2rem;
  }
`

export const StepsContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  gap: 4.5rem;

  padding-left: 4rem;

  @media (max-width: 768px) {
    padding-left: 0;
    gap: 3rem;
  }
`

export const Step = styled.div`
  position: relative;

  display: grid;
  grid-template-columns: 90px 1fr;

  align-items: center;

  gap: 1.2rem;

  animation: stepEnter 0.8s ease-out backwards;

  &:nth-child(1) {
    animation-delay: 0.2s;
  }

  &:nth-child(2) {
    animation-delay: 0.4s;
  }

  &:nth-child(3) {
    animation-delay: 0.6s;
  }

  @keyframes stepEnter {
    from {
      opacity: 0;
      transform: translateX(70px);
    }

    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 70px 1fr;
  }
`

export const Number = styled.div`
  width: 80px;
  height: 80px;

  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'Playfair Display', serif;

  font-size: 3.5rem;

  color: ${({ theme }) => theme.offWhite};

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.08);

    box-shadow: 0 8px 25px rgba(87, 60, 44, 0.18);
  }

  &.number1 {
    background: ${({ theme }) => theme.rose};
  }

  &.number2 {
    background: ${({ theme }) => theme.plum};
  }

  &.number3 {
    background: ${({ theme }) => theme.coffee};
  }

  @media (max-width: 768px) {
    width: 65px;
    height: 65px;

    font-size: 2.8rem;
  }
`

export const StepText = styled.p`
  font-family: 'Montserrat', sans-serif;

  font-size: 1rem;

  line-height: 1.25;

  color: ${({ theme }) => theme.coffee};

  max-width: 420px;

  margin: 0;
`

export const Line = styled.div`
  position: absolute;

  width: 120px;

  height: 1px;

  background: ${({ theme }) => theme.coffee};

  left: -120px;
  top: 50%;

  opacity: 0.8;

  @media (max-width: 768px) {
    display: none;
  }
`