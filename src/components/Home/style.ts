import styled from 'styled-components'

export const HomeContainer = styled.section`
  position: relative;

  width: 100%;
  min-height: 100vh;

  background: ${({ theme }) => theme.offWhite};

  display: flex;
  align-items: center;
  justify-content: center;

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
    min-height: 100svh;

    &::before {
      width: 12px;
    }
  }
`

export const Content = styled.div`
  width: min(100%, 1000px);

  min-height: 100vh;

  padding: 4rem 3rem;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  text-align: center;

  position: relative;

  @media (max-width: 768px) {
    min-height: 100svh;

    padding: 5rem 2rem 4rem;
  }

  @media (max-width: 480px) {
    padding: 4rem 1.5rem 3rem;
  }
`

export const Flower = styled.img`
  width: 75px;

  margin-bottom: 0.8rem;

  object-fit: contain;

  animation: flowerEnter 1s ease-out;

  @keyframes flowerEnter {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 600px) {
    width: 60px;

    margin-bottom: 0.5rem;
  }
`

export const Name = styled.h1`
  margin: 0;

  font-family: 'Playfair Display', serif;

  font-size: clamp(4rem, 8vw, 7rem);

  line-height: 0.85;

  font-weight: 400;

  color: ${({ theme }) => theme.plum};

  animation: nameEnter 1s ease-out;

  @keyframes nameEnter {
    from {
      opacity: 0;
      transform: translateY(30px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 600px) {
    font-size: clamp(3.2rem, 15vw, 5rem);
  }
`

export const Subtitle = styled.p`
  margin: 1.5rem 0 1.2rem;

  font-family: 'Montserrat', sans-serif;

  font-size: clamp(0.9rem, 2vw, 1.4rem);

  font-weight: 700;

  letter-spacing: 0.35em;

  color: ${({ theme }) => theme.plum};

  animation: subtitleEnter 1s ease-out 0.15s backwards;

  @keyframes subtitleEnter {
    from {
      opacity: 0;
      transform: translateY(15px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 600px) {
    margin: 1.2rem 0;

    letter-spacing: 0.2em;

    font-size: 0.85rem;
  }
`

export const Proposal = styled.div`
  width: min(100%, 750px);

  display: flex;
  flex-direction: column;

  gap: 0.8rem;

  margin-top: 0.3rem;

  animation: proposalEnter 1s ease-out 0.25s backwards;

  @keyframes proposalEnter {
    from {
      opacity: 0;
      transform: scale(0.96);
    }

    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`

export const ProposalLine = styled.div`
  width: 100%;

  height: 2px;

  background: ${({ theme }) => theme.coffee};
`

export const ProposalTitle = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;

  gap: 1rem;

  padding: 0 0.2rem;

  font-family: 'Montserrat', sans-serif;

  font-size: clamp(1.5rem, 3vw, 2.5rem);

  font-weight: 700;

  letter-spacing: 0.65em;

  color: ${({ theme }) => theme.plum};

  span {
    font-size: 1.2rem;

    color: ${({ theme }) => theme.coffee};

    letter-spacing: 0;
  }

  @media (max-width: 600px) {
    font-size: 1.2rem;

    letter-spacing: 0.35em;

    gap: 0.5rem;

    span {
      font-size: 0.9rem;
    }
  }
`

export const MainTitle = styled.h2`
  margin: 0.8rem 0 3.5rem;

  font-family: 'Playfair Display', serif;

  font-size: clamp(4rem, 8vw, 7rem);

  line-height: 0.9;

  font-weight: 400;

  color: ${({ theme }) => theme.rose};

  animation: mainTitleEnter 1s ease-out 0.35s backwards;

  @keyframes mainTitleEnter {
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
    font-size: clamp(3.2rem, 14vw, 5rem);

    margin: 0.8rem 0 2.5rem;
  }
`

export const Keywords = styled.div`
  width: 100%;

  display: flex;

  align-items: center;
  justify-content: center;

  gap: clamp(1.5rem, 5vw, 4rem);

  margin-bottom: 2rem;

  @media (max-width: 600px) {
    flex-direction: column;

    gap: 0.7rem;

    margin-bottom: 1.5rem;
  }
`

export const Keyword = styled.span`
  font-family: 'Montserrat', sans-serif;

  font-size: clamp(0.8rem, 1.5vw, 1.2rem);

  font-weight: 700;

  letter-spacing: 0.3em;

  color: ${({ theme }) => theme.plum};

  white-space: nowrap;

  @media (max-width: 600px) {
    letter-spacing: 0.2em;

    font-size: 0.8rem;
  }
`

export const BottomText = styled.p`
  margin: 0;

  font-family: 'Montserrat', sans-serif;

  font-size: clamp(0.9rem, 1.8vw, 1.4rem);

  font-weight: 400;

  letter-spacing: 0.4em;

  color: ${({ theme }) => theme.plum};

  @media (max-width: 600px) {
    font-size: 0.75rem;

    letter-spacing: 0.25em;

    line-height: 1.5;
  }
`