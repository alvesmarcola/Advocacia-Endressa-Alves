import styled from 'styled-components'

export const PackageContainer = styled.section`
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
  position: relative;

  width: 100%;
  max-width: 1250px;

  min-height: 100vh;

  margin: 0 auto;

  padding: 4rem 4rem;

  display: grid;

  grid-template-columns: 1fr 1fr;

  align-items: center;

  gap: 5rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;

    gap: 3rem;

    padding: 4rem 3rem;
  }

  @media (max-width: 600px) {
    padding: 4rem 2rem;
  }
`

export const LeftContent = styled.div`
  position: relative;

  animation: slideLeft 1s ease-out;

  @keyframes slideLeft {
    from {
      opacity: 0;
      transform: translateX(-70px);
    }

    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`

export const Title = styled.h2`
  font-family: 'Playfair Display', serif;

  font-size: clamp(3.5rem, 5.5vw, 5.2rem);

  font-weight: 400;

  line-height: 0.95;

  color: ${({ theme }) => theme.plum};

  margin: 0;

  @media (max-width: 900px) {
    font-size: clamp(3rem, 8vw, 4.5rem);
  }

  @media (max-width: 600px) {
    font-size: 3rem;
  }
`

export const Description = styled.p`
  max-width: 480px;

  margin-top: 3.5rem;

  font-family: 'Montserrat', sans-serif;

  font-size: 1rem;

  line-height: 1.2;

  color: ${({ theme }) => theme.plum};

  animation: descriptionEnter 1.2s ease-out;

  @keyframes descriptionEnter {
    from {
      opacity: 0;
      transform: translateY(30px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

export const Flower = styled.div`
  margin-top: 2rem;

  margin-left: 55%;

  font-size: 3.5rem;

  color: ${({ theme }) => theme.rose};

  transform: rotate(20deg);

  opacity: 0.8;

  animation: flowerEnter 1.4s ease-out;

  @keyframes flowerEnter {
    from {
      opacity: 0;
      transform: translateY(20px) rotate(20deg);
    }

    to {
      opacity: 0.8;
      transform: translateY(0) rotate(20deg);
    }
  }
`

export const RightContent = styled.div`
  display: flex;

  flex-direction: column;

  align-items: center;

  width: 100%;

  animation: slideRight 1s ease-out;

  @keyframes slideRight {
    from {
      opacity: 0;
      transform: translateX(70px);
    }

    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`

export const ServicesList = styled.div`
  width: 100%;

  display: flex;

  flex-direction: column;

  gap: 0.65rem;
`

export const ServiceItem = styled.div`
  width: 100%;

  height: 42px;

  display: flex;

  align-items: center;

  border-radius: 25px;

  background: ${({ theme }) => theme.beige};

  overflow: hidden;

  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(8px);
  }

  span {
    font-family: 'Montserrat', sans-serif;

    font-size: 1rem;

    color: ${({ theme }) => theme.plum};

    padding-left: 1rem;
  }
`

export const ServiceIcon = styled.div`
  width: 44%;

  height: 100%;

  display: flex;

  align-items: center;

  padding-left: 0.5rem;

  border-radius: 25px;

  background: ${({ theme }) => theme.rose};

  color: ${({ theme }) => theme.offWhite};

  font-size: 1.4rem;

  font-weight: 600;
`

export const PriceCard = styled.div`
  width: 100%;

  margin-top: 1.5rem;

  padding: 1.2rem 2rem 2rem;

  border-radius: 25px;

  background: ${({ theme }) => theme.beige};

  text-align: center;

  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`

export const PriceTitle = styled.h3`
  margin: 0;

  font-family: 'Montserrat', sans-serif;

  font-size: 1.8rem;

  font-weight: 700;

  color: ${({ theme }) => theme.plum};
`

export const Price = styled.div`
  display: flex;

  align-items: baseline;

  justify-content: center;

  margin-top: 0.5rem;

  font-family: 'Montserrat', sans-serif;

  font-size: clamp(5rem, 8vw, 7rem);

  font-weight: 700;

  line-height: 1;

  color: ${({ theme }) => theme.plum};
`

export const PriceCurrency = styled.span`
  font-size: 1.8rem;

  margin-right: 0.5rem;
`

export const PriceCents = styled.span`
  font-size: 2rem;

  align-self: flex-end;

  margin-bottom: 0.8rem;
`


