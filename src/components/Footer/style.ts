import styled from 'styled-components'

export const FooterContainer = styled.section`
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

    width: 30px;
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

  z-index: 2;

  width: 100%;
  max-width: 1350px;

  min-height: 100vh;

  margin: 0 auto;

  padding: 5rem 6rem;

  display: grid;

  grid-template-columns: 1fr 1fr;

  align-items: center;

  gap: 5rem;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;

    padding: 5rem 4rem;

    gap: 4rem;
  }

  @media (max-width: 600px) {
    padding: 4rem 2rem;
  }
`

export const LeftContent = styled.div`
  position: relative;

  display: flex;

  flex-direction: column;

  justify-content: center;
`

export const Title = styled.h2`
  font-family: 'Playfair Display', serif;

  font-size: clamp(3.5rem, 5.5vw, 5.5rem);

  line-height: 0.95;

  font-weight: 400;

  color: ${({ theme }) => theme.plum};

  margin: 0;

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
  }
`

export const Description = styled.p`
  max-width: 550px;

  margin-top: 3.5rem;

  color: ${({ theme }) => theme.plum};

  font-family: 'Montserrat', sans-serif;

  font-size: 1rem;

  line-height: 1.15;

  animation: descriptionEnter 1s ease-out 0.2s backwards;

  @keyframes descriptionEnter {
    from {
      opacity: 0;
      transform: translateY(20px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 600px) {
    br {
      display: none;
    }
  }
`

export const Flower = styled.img`
  position: absolute;

  width: 80px;

  right: 5%;

  top: 35%;

  opacity: 0.8;

  @media (max-width: 1000px) {
    width: 65px;

    right: 10%;

    top: 30%;
  }
`

export const RightContent = styled.div`
  display: flex;

  flex-direction: column;

  justify-content: center;

  gap: 2rem;
`

export const ServicesList = styled.div`
  position: relative;

  display: flex;

  flex-direction: column;

  gap: 0.7rem;

  padding: 0.5rem 0;

  &::before,
  &::after {
    content: '';

    position: absolute;

    width: 100%;

    height: 130px;

    border: 2px solid ${({ theme }) => theme.coffee};

    border-radius: 50%;

    opacity: 0.65;

    pointer-events: none;
  }

  &::before {
    top: -25px;

    left: -5%;
  }

  &::after {
    bottom: -25px;

    right: -5%;
  }
`

export const Service = styled.div`
  position: relative;

  z-index: 2;

  width: 100%;

  height: 42px;

  display: flex;

  align-items: center;

  background: ${({ theme }) => theme.beige};

  border-radius: 25px;

  overflow: hidden;

  animation: serviceEnter 0.7s ease-out backwards;

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

  @keyframes serviceEnter {
    from {
      opacity: 0;
      transform: translateX(40px);
    }

    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`

export const ServiceIcon = styled.span`
  width: 42px;
  height: 42px;

  flex-shrink: 0;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: ${({ theme }) => theme.rose};

  color: ${({ theme }) => theme.offWhite};

  font-size: 1.4rem;

  font-weight: 700;
`

export const ServiceName = styled.span`
  padding-left: 0.8rem;

  color: ${({ theme }) => theme.plum};

  font-family: 'Montserrat', sans-serif;

  font-size: 1rem;
`

export const WhatsAppBox = styled.div`
  position: relative;

  z-index: 2;

  min-height: 220px;

  padding: 2rem;

  display: flex;

  align-items: center;

  justify-content: center;

  text-align: center;

  background: ${({ theme }) => theme.beige};

  border-radius: 24px;

  cursor: pointer;

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);

    box-shadow: 0 15px 30px rgba(87, 60, 44, 0.12);
  }
`

export const WhatsAppTitle = styled.h3`
  margin: 0;

  font-family: 'Playfair Display', serif;

  font-size: clamp(2.5rem, 4vw, 4rem);

  line-height: 0.95;

  font-weight: 400;

  color: ${({ theme }) => theme.plum};
`