import styled from "styled-components";

export const SocialMediaContainer = styled.section`
  position: relative;
  width: 100%;
  min-height: 700px;

  background: #000;

  padding: 30px 55px;

  overflow: hidden;

  @media (max-width: 900px) {
    min-height: auto;
    padding: 30px 25px 60px;
  }
`;

export const Title = styled.h2`
  margin: 0;

  color: #fff;

  font-size: clamp(56px, 7vw, 96px);
  font-weight: 400;
  line-height: 0.8;
  letter-spacing: -5px;

  position: relative;
  z-index: 2;
`;

export const PostsContainer = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 18px;

  margin-top: 70px;

  transform: rotate(-1deg);

  @media (max-width: 900px) {
    flex-wrap: wrap;
    margin-top: 50px;
  }
`;

export const Post = styled.img`
  width: 19%;
  height: auto;

  object-fit: contain;

  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-12px);
  }

  &.post1 {
    transform: rotate(3deg) translateY(5px);

    &:hover {
      transform: rotate(3deg) translateY(-7px);
    }
  }

  &.post2 {
    transform: rotate(-4deg) translateY(15px);

    &:hover {
      transform: rotate(-4deg) translateY(3px);
    }
  }

  &.post3 {
    transform: rotate(4deg) translateY(0);

    &:hover {
      transform: rotate(4deg) translateY(-12px);
    }
  }

  &.post4 {
    transform: rotate(-4deg) translateY(5px);

    &:hover {
      transform: rotate(-4deg) translateY(-7px);
    }
  }

  &.post5 {
    transform: rotate(6deg) translateY(-5px);

    &:hover {
      transform: rotate(6deg) translateY(-17px);
    }
  }

  @media (max-width: 900px) {
    width: 28%;
  }

  @media (max-width: 600px) {
    width: 42%;
  }
`;