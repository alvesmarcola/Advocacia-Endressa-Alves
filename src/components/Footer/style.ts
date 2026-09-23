import styled from 'styled-components'

export const FooterContainer = styled.section`
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
  position: relative;

  width: 100%;
  max-width: 1250px;

  min-height: 100vh;

  margin: 0 auto;

  padding: 2.5rem 4rem 4rem;

  display: flex;
  flex-direction: column;

  justify-content: center;

  @media (max-width: 768px) {
    padding: 4rem 2rem;
  }
`

export const Title = styled.h2`
  font-family: 'Playfair Display', serif;

  font-size: clamp(3rem, 5vw, 4.5rem);

  line-height: 1;

  font-weight: 400;

  color: ${({ theme }) => theme.plum};

  text-align: center;

  margin-bottom: 3.5rem;

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

    margin-bottom: 2.5rem;
  }
`

export const Flower = styled.img`
  position: absolute;

  width: 80px;

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
  }
`

export const CardsContainer = styled.div`
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 1.5rem;

  align-items: stretch;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;

    max-width: 500px;

    width: 100%;

    margin: 0 auto;
  }
`

export const Card = styled.div`
  position: relative;

  min-height: 340px;

  padding: 3rem 1.5rem 1.5rem;

  display: flex;
  flex-direction: column;

  align-items: center;

  text-align: center;

  background: ${({ theme }) => theme.beige};

  border-radius: 24px;

  color: ${({ theme }) => theme.plum};

  animation: cardEnter 0.8s ease-out backwards;

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:nth-child(1) {
    animation-delay: 0.2s;
  }

  &:nth-child(2) {
    animation-delay: 0.4s;
  }

  &:nth-child(3) {
    animation-delay: 0.6s;
  }

  &:hover {
    transform: translateY(-6px);

    box-shadow: 0 15px 30px rgba(87, 60, 44, 0.12);
  }

  .from {
    margin-top: 1rem;

    font-family: 'Montserrat', sans-serif;

    font-size: 1rem;

    font-weight: 700;
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
  position: absolute;

  top: -18px;

  left: 5%;

  width: 90%;

  min-height: 36px;

  padding: 0.45rem 1rem;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 25px;

  background: ${({ theme }) => theme.plum};

  color: ${({ theme }) => theme.offWhite};

  font-family: 'Montserrat', sans-serif;

  font-size: 1rem;

  white-space: nowrap;
`

export const Description = styled.p`
  font-family: 'Montserrat', sans-serif;

  font-size: 1rem;

  line-height: 1.15;

  margin-bottom: 1rem;

  color: ${({ theme }) => theme.plum};
`

export const Price = styled.div`
  display: flex;

  align-items: baseline;

  justify-content: center;

  color: ${({ theme }) => theme.plum};

  margin: 0.5rem 0;
`

export const PriceSmall = styled.span`
  font-family: 'Montserrat', sans-serif;

  font-size: 2rem;

  font-weight: 700;
`

export const PriceBig = styled.span`
  font-family: 'Montserrat', sans-serif;

  font-size: 7rem;

  line-height: 0.85;

  font-weight: 700;

  letter-spacing: -6px;
`

export const BottomText = styled.p`
  margin-top: auto;

  font-family: 'Montserrat', sans-serif;

  font-size: 1rem;

  line-height: 1.15;

  color: ${({ theme }) => theme.plum};
`

export const ArtList = styled.div`
  width: 100%;

  display: flex;

  flex-direction: column;

  gap: 0.6rem;

  margin-top: 0.3rem;
`

export const ArtItem = styled.div`
  width: 100%;

  height: 38px;

  display: flex;

  align-items: center;

  background: ${({ theme }) => theme.offWhite};

  border-radius: 20px;

  overflow: hidden;

  font-family: 'Montserrat', sans-serif;

  span {
    width: 34%;

    height: 100%;

    display: flex;

    align-items: center;

    gap: 5px;

    padding-left: 5px;

    background: ${({ theme }) => theme.rose};

    border-radius: 20px;

    color: ${({ theme }) => theme.offWhite};

    font-size: 1.2rem;

    font-weight: 700;

    &::before {
      content: '';
    }
  }

  p {
    flex: 1;

    margin: 0;

    text-align: left;

    padding-left: 0.6rem;

    color: ${({ theme }) => theme.coffee};

    font-size: 0.9rem;
  }
`

export const ArtPrice = styled.span`
  padding-right: 0.8rem;

  color: ${({ theme }) => theme.coffee};

  font-size: 0.9rem;
`