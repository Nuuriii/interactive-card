import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  margin-top: 0rem;
  width: 85%;
  flex-direction: column;
  align-items: center;
  @media (width >= 418px) {
    width: 20rem;
  }
`;

export const Message = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Image = styled.img`
  height: 4rem;
  width: 4rem;
`;

export const Title = styled.h1`
  color: hsl(278, 68%, 11%);
  margin: 1rem 0;
  font-weight: 500;
`;

export const Information = styled.p`
  color: hsl(279, 6%, 55%);
  font-weight: 500;
  font-size: 1.1rem;
  margin-bottom: 2rem;
`;

export const Button = styled.button`
  width: 100%;
  border: none;
  border-radius: 0.3rem;
  padding: 1rem 0;
  font-size: 1rem;
  font-weight: 500;
  color: hsl(0, 0%, 100%);
  text-align: center;
  background-color: hsl(278, 68%, 11%);
  &:hover {
    background-color: hsl(278, 67%, 22%);
  }
  &:active {
    transform: scale(0.957);
  }
`;
