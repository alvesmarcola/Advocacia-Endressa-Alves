import styled from 'styled-components'

export const FooterContainer = styled.footer`
  width: 100%;
  min-height: 560px;

  background: #050505;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 70px 6% 35px;

  overflow: hidden;

  @media (max-width: 800px) {
    min-height: 600px;
    padding: 70px 25px 35px;
  }
`

export const ThankYou = styled.div`
  position: relative;

  width: 100%;
  max-width: 900px;
  height: 250px;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  font-family: Georgia, 'Times New Roman', serif;

  strong,
  span {
    position: absolute;

    left: 50%;
    transform: translateX(-50%);

    width: max-content;

    font-size: clamp(4rem, 8vw, 7.5rem);
    font-weight: 700;
    line-height: 0.85;
    letter-spacing: -4px;
    white-space: nowrap;
  }

  strong {
    top: 0;

    color: #f4f0e7;

    z-index: 3;
  }

  &::before {
    content: '✦';

    position: absolute;
    top: -25px;
    left: 12%;

    color: #71805c;

    font-size: 40px;

    z-index: 4;

    transform: rotate(-10deg);
  }

  &::after {
    content: '✦';

    position: absolute;
    top: 70px;
    right: 12%;

    color: #71805c;

    font-size: 25px;

    z-index: 4;

    transform: rotate(15deg);
  }

  @media (max-width: 800px) {
    height: 190px;

    strong,
    span {
      font-size: clamp(3rem, 10vw, 5rem);
      letter-spacing: -2px;
    }

    &::before {
      left: 5%;
      top: -20px;
      font-size: 28px;
    }

    &::after {
      right: 5%;
      top: 55px;
      font-size: 20px;
    }
  }

  @media (max-width: 500px) {
    height: 160px;

    strong,
    span {
      font-size: 2.8rem;
    }
  }
`

export const ThankYouMiddle = styled.span`
  top: 67px;

  color: transparent;

  -webkit-text-stroke: 2px #71805c;

  z-index: 2;
`

export const ThankYouOutline = styled.span`
  top: 134px;

  color: transparent;

  -webkit-text-stroke: 2px #71805c;

  z-index: 1;
`

export const ContactContainer = styled.div`
  width: 100%;
  max-width: 1100px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 25px;

  margin-top: 10px;

  padding-top: 32px;

  border-top: 1px solid rgba(255, 255, 255, 0.08);

  @media (max-width: 900px) {
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;

    width: auto;

    margin-top: 0;
  }
`

export const ContactItem = styled.div`
  display: flex;
  align-items: center;

  gap: 10px;

  color: #f4f0e7;

  font-size: 14px;

  white-space: nowrap;
`

export const Icon = styled.span`
  width: 24px;
  height: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  svg {
    width: 18px;
    height: 18px;

    fill: #f4f0e7;
  }
`

export const ContactLink = styled.a`
  color: #f4f0e7;

  text-decoration: none;

  transition: all 0.3s ease;

  &:hover {
    color: #71805c;
  }
`

export const Copyright = styled.p`
  margin: 80px 0 0;

  color: rgba(244, 240, 231, 0.35);

  font-size: 11px;

  text-align: center;

  letter-spacing: 0.5px;
`