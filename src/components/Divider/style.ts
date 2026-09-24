import styled from 'styled-components'

export const DividerContainer = styled.div`
  width: 100%;
  height: 90px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.offWhite};
`

export const Icon = styled.span`
  font-family: 'Playfair Display', serif;

  font-size: 4rem;

  color: ${({ theme }) => theme.rose};

  animation: float 3s ease-in-out infinite;

  @keyframes float {
    0%,
    100% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-4px);
    }
  }
`