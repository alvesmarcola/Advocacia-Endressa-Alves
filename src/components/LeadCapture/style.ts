import styled from "styled-components";

export const ServicesContainer = styled.section`
  width: 100%;
  min-height: 600px;

  background: #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 80px 20px;

  overflow: hidden;
`;

export const CardsContainer = styled.div`
  width: 100%;
  max-width: 1100px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 30px;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  width: 31%;
  min-height: 230px;

  background: #f0f4f5;

  padding: 28px 20px;

  position: relative;

  overflow: hidden;

  display: flex;
  flex-direction: column;

  &::after {
    content: "";

    position: absolute;

    bottom: -15px;
    left: 0;

    width: 100%;
    height: 30px;

    background: #fff;

    border-radius: 50% 50% 0 0;
  }

  @media (max-width: 900px) {
    width: 80%;
    max-width: 500px;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const CenterWrapper = styled.div`
  width: 34%;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 330px;

  @media (max-width: 900px) {
    width: 80%;
    max-width: 500px;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const CenterImage = styled.img`
  position: absolute;

  width: 80%;
  height: 290px;

  object-fit: cover;

  filter: grayscale(100%);

  top: -25px;

  transform: rotate(-2deg);
`;

export const CenterCard = styled.div`
  position: relative;

  z-index: 2;

  width: 88%;
  min-height: 250px;

  background: #101ed1;

  padding: 28px 28px 35px;

  color: #fff;

  transform: rotate(7deg);

  overflow: hidden;

  &::after {
    content: "";

    position: absolute;

    bottom: -12px;
    left: 0;

    width: 100%;
    height: 28px;

    background: #fff;

    border-radius: 50% 50% 0 0;
  }
`;

export const Title = styled.h2`
  margin: 0;

  color: #1026d4;

  font-family: Arial, Helvetica, sans-serif;

  font-size: 21px;
  font-weight: 700;

  line-height: 1.05;

  letter-spacing: -0.8px;
`;

export const Quote = styled.span`
  display: block;

  margin-top: 25px;
  margin-bottom: -5px;

  font-family: Georgia, serif;

  font-size: 58px;
  font-weight: 700;

  line-height: 0.5;

  color: #1026d4;
`;

export const Text = styled.p`
  margin: 20px 0 0;

  color: #666;

  font-family: Arial, Helvetica, sans-serif;

  font-size: 14px;

  line-height: 1.35;
`;