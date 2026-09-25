import styled from 'styled-components'

export const CTAContainer = styled.section`
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

    width: 45px;
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
  max-width: 1350px;

  min-height: 100vh;

  margin: 0 auto;

  padding: 5rem 7rem;

  display: grid;

  grid-template-columns: 1fr 0.85fr;

  align-items: center;

  gap: 5rem;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;

    padding: 5rem 4rem;

    gap: 3rem;
  }

  @media (max-width: 600px) {
    padding: 4rem 2rem;
  }
`

export const TextContent = styled.div`
  display: flex;

  flex-direction: column;

  justify-content: center;
`

export const Title = styled.h2`
  font-family: 'Playfair Display', serif;

  font-size: clamp(3rem, 5vw, 5rem);

  line-height: 0.95;

  font-weight: 400;

  color: ${({ theme }) => theme.coffee};

  margin-bottom: 3.5rem;

  animation: titleEnter 1s ease-out;

  @keyframes titleEnter {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }

    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media (max-width: 600px) {
    font-size: 3.2rem;

    margin-bottom: 2.5rem;
  }
`

export const BenefitsList = styled.div`
  display: flex;

  flex-direction: column;

  gap: 1.2rem;

  max-width: 700px;
`

export const Benefit = styled.div`
  display: flex;

  align-items: flex-start;

  gap: 1rem;

  animation: benefitEnter 0.8s ease-out backwards;

  &:nth-child(1) {
    animation-delay: 0.15s;
  }

  &:nth-child(2) {
    animation-delay: 0.25s;
  }

  &:nth-child(3) {
    animation-delay: 0.35s;
  }

  &:nth-child(4) {
    animation-delay: 0.45s;
  }

  &:nth-child(5) {
    animation-delay: 0.55s;
  }

  &:nth-child(6) {
    animation-delay: 0.65s;
  }

  @keyframes benefitEnter {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }

    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`

export const BenefitIcon = styled.span`
  flex-shrink: 0;

  width: 40px;
  height: 40px;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: ${({ theme }) => theme.plum};

  color: ${({ theme }) => theme.offWhite};

  font-size: 1.5rem;

  font-weight: 700;
`

export const BenefitText = styled.p`
  margin: 0;

  padding-top: 0.35rem;

  color: ${({ theme }) => theme.coffee};

  font-family: 'Montserrat', sans-serif;

  font-size: 1.1rem;

  line-height: 1.25;

  max-width: 650px;
`

export const ImageWrapper = styled.div`
  position: relative;

  display: flex;

  align-items: center;
  justify-content: center;

  padding: 2rem;

  @media (max-width: 1000px) {
    max-width: 600px;

    width: 100%;

    margin: 0 auto;
  }
`

export const Image = styled.img`
  position: relative;

  z-index: 2;

  width: 100%;

  max-width: 500px;

  aspect-ratio: 0.82;

  object-fit: cover;

  box-shadow: 0 20px 35px rgba(87, 60, 44, 0.18);

  animation: imageEnter 1.1s ease-out;

  transition: transform 0.5s ease;

  &:hover {
    transform: translateY(-6px);
  }

  @keyframes imageEnter {
    from {
      opacity: 0;
      transform: translateX(60px);
    }

    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`

export const Flower = styled.img`
  position: absolute;

  z-index: 3;

  top: -1rem;
  left: 50%;

  width: 75px;

  opacity: 0.8;

  transform: translateX(-50%);

  @media (max-width: 600px) {
    width: 55px;
  }
`