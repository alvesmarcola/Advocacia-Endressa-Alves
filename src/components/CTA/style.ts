import styled from 'styled-components'

export const CTAContainer = styled.section`
  position: relative;

  width: 100%;
  min-height: 100vh;

  background: ${({ theme }) => theme.offWhite};

  overflow: hidden;

  border-top: 2px solid ${({ theme }) => theme.beige};

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
    &::before {
      width: 12px;
    }
  }
`

export const Content = styled.div`
  width: 100%;
  min-height: 100vh;

  max-width: 1250px;

  margin: 0 auto;

  padding: 3rem 5rem;

  display: grid;
  grid-template-columns: 60% 40%;

  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;

    padding: 4rem 3rem;
  }

  @media (max-width: 600px) {
    padding: 4rem 2rem;
  }
`

export const Title = styled.h2`
  font-family: 'Playfair Display', serif;

  font-size: clamp(3rem, 5vw, 4.8rem);

  line-height: 0.95;

  font-weight: 350;

  color: ${({ theme }) => theme.rose};

  margin-bottom: 2rem;

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
`

export const ServiceList = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.5rem;

  max-width: 540px;
`

export const Service = styled.div`
  animation: serviceEnter 0.8s ease-out backwards;

  &:nth-child(1) {
    animation-delay: 0.2s;
  }

  &:nth-child(2) {
    animation-delay: 0.4s;
  }

  &:nth-child(3) {
    animation-delay: 0.6s;
  }

  @keyframes serviceEnter {
    from {
      opacity: 0;
      transform: translateX(-40px);
    }

    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`

export const ServiceHeader = styled.div`
  width: 100%;

  display: flex;

  align-items: center;

  background: ${({ theme }) => theme.beige};

  border-radius: 30px;

  overflow: hidden;

  height: 36px;
`

export const ServiceName = styled.div`
  height: 100%;

  width: 62%;

  display: flex;

  align-items: center;

  gap: 10px;

  padding-left: 6px;

  background: ${({ theme }) => theme.plum};

  border-radius: 30px;

  color: ${({ theme }) => theme.offWhite};

  font-family: 'Montserrat', sans-serif;

  font-size: 1rem;

  span {
    width: 26px;
    height: 26px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    background: ${({ theme }) => theme.offWhite};

    color: ${({ theme }) => theme.plum};

    font-weight: 700;
  }
`

export const Price = styled.span`
  flex: 1;

  text-align: center;

  color: ${({ theme }) => theme.plum};

  font-family: 'Montserrat', sans-serif;

  font-size: 0.95rem;
`

export const Description = styled.p`
  margin-top: 0.6rem;

  color: ${({ theme }) => theme.plum};

  font-family: 'Montserrat', sans-serif;

  font-size: 1rem;

  line-height: 1.15;
`

export const PhoneImage = styled.img`
  width: min(100%, 480px);

  display: block;

  margin-left: auto;

  animation: phoneEnter 1.2s ease-out;

  transition: transform 0.6s ease;

  &:hover {
    transform: translateY(-8px) scale(1.015);
  }

  @keyframes phoneEnter {
    from {
      opacity: 0;
      transform: translateX(100px);
    }

    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media (max-width: 900px) {
    margin: 2rem auto 0;

    width: min(100%, 420px);
  }
`

export const Flower = styled.img`
  position: absolute;

  width: 75px;

  right: 38%;
  bottom: 8%;

  opacity: 0.7;

  @media (max-width: 900px) {
    right: 10%;
    bottom: 3%;
  }
`