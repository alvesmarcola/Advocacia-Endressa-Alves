import styled from "styled-components";

export const ServicesContainer = styled.section`
  width: 100%;
  min-height: 500px;

  background: #f5f7f8;

  padding: 95px 30px;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: hidden;
`;

export const Header = styled.div`
  width: 100%;
  max-width: 1000px;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 35px;
`;

export const Title = styled.h2`
  position: relative;

  margin: 0;

  color: #162b50;

  font-family: Arial, Helvetica, sans-serif;

  font-size: 41px;
  font-weight: 700;

  letter-spacing: -1.5px;

  display: flex;
  align-items: center;
`;

export const Dot = styled.span`
  width: 7px;
  height: 7px;

  margin-left: 4px;

  background: #7fc9dc;

  border-radius: 50%;

  display: inline-block;
`;

export const DottedLine = styled.div`
  width: 100%;
  max-width: 760px;

  border-top: 2px dotted #9ed9e7;

  margin-top: -13px;
`;

export const Subtitle = styled.p`
  margin: 10px 0 0;

  color: #777;

  font-family: Arial, Helvetica, sans-serif;

  font-size: 18px;

  text-align: center;
`;

export const CardsContainer = styled.div`
  width: 100%;
  max-width: 1000px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);

  gap: 12px;

  @media (max-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const ServiceCard = styled.div`
  min-height: 145px;

  background: #fff;

  border-radius: 8px;

  padding: 18px 16px;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-5px);

    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.07);
  }
`;

export const Icon = styled.div`
  width: 30px;
  height: 30px;

  margin-bottom: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #2464d8;

  font-size: 25px;
  font-weight: 700;
`;

export const CardTitle = styled.h3`
  margin: 0 0 7px;

  color: #162b50;

  font-family: Arial, Helvetica, sans-serif;

  font-size: 13px;
  font-weight: 700;
`;

export const CardText = styled.p`
  margin: 0;

  max-width: 190px;

  color: #777;

  font-family: Arial, Helvetica, sans-serif;

  font-size: 10px;

  line-height: 1.4;
`;