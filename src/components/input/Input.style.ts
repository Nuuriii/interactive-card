import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (width > 1000px) {
    height: 100%;
    width: 70%;
    justify-content: center;
  }
`;

export const Form = styled.form`
  width: 88%;
  display: flex;
  flex-direction: column;
  @media (548px <= width <= 1000px) {
    width: 30rem;
  }
  @media (width > 1000px) {
    height: 20rem;
    width: 25rem;
  }
`;

export const UserInformation = styled.div`
  height: auto;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  label {
    height: auto;
    margin-bottom: 0.3rem;
    font-weight: 500;
    color: hsl(278, 68%, 11%);
  }
`;

export const InputName = styled.input<{ $isError: boolean }>`
  height: auto;
  width: 100%;
  margin-right: 0.4rem;
  padding: 0.8rem 0rem 0.8rem 0.7rem;
  border: none;
  border-radius: 0.3rem;
  outline: 1px solid
    ${(props) => (props.$isError ? 'hsl(0, 100%, 66%)' : 'hsl(270, 3%, 87%)')};
  font-weight: 500;
  color: hsl(278, 68%, 11%);
  &::placeholder {
    font-family: SpaceGrotesk, serif;
    font-weight: 900;
    color: hsl(279, 6%, 55%);
  }
  &:focus {
    outline: 2px solid
      ${(props) =>
        props.$isError ? 'hsl(0, 100%, 66%)' : 'hsl(278, 68%, 11%)'};
  }
`;

export const InputNumber = styled.input<{ $isError: boolean }>`
  height: auto;
  width: 100%;
  margin-right: 0.4rem;
  padding: 0.8rem 0rem 0.8rem 0.7rem;
  border: none;
  border-radius: 0.3rem;
  outline: 1px solid
    ${(props) => (props.$isError ? 'hsl(0, 100%, 66%)' : 'hsl(270, 3%, 87%)')};
  font-weight: 500;
  color: hsl(278, 68%, 11%);
  &::placeholder {
    font-family: SpaceGrotesk, serif;
    font-weight: 900;
    color: hsl(279, 6%, 55%);
  }
  &:focus {
    outline: 2px solid
      ${(props) =>
        props.$isError ? 'hsl(0, 100%, 66%)' : 'hsl(278, 68%, 11%)'};
  }
`;

export const ErrorMessage = styled.p`
  margin-top: 0.2rem;
  font-weight: 500;
  font-size: 0.7rem;
  color: hsl(0, 100%, 66%);
`;

export const DateAndCvc = styled.div`
  height: 4rem;
  display: flex;
`;

export const ExpDate = styled.div`
  height: 4.4rem;
  width: 60%;
  display: flex;
  flex-direction: column;
  > p {
    height: auto;
    margin-bottom: 0.4rem;
    font-weight: 500;
    color: hsl(278, 68%, 11%);
  }
`;

export const MonthAndYear = styled.div`
  height: 2.5rem;
  margin-right: 0.8rem;
  display: flex;
`;

export const Month = styled.div`
  height: auto;
  margin-right: 0.7rem;
  display: flex;
  flex-direction: column;
`;

export const Year = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const InputMonth = styled.input<{ $isError: boolean }>`
  height: 2.4rem;
  width: 100%;
  padding: 0.8rem 0rem 0.8rem 0.7rem;
  margin-right: 0.4rem;
  border: none;
  border-radius: 0.3rem;
  outline: 1px solid
    ${(props) => (props.$isError ? 'hsl(0, 100%, 66%)' : 'hsl(270, 3%, 87%)')};
  font-weight: 500;
  color: hsl(278, 68%, 11%);
  &::placeholder {
    font-family: SpaceGrotesk, serif;
    font-weight: 900;
    color: hsl(279, 6%, 55%);
  }
  &:focus {
    outline: 2px solid
      ${(props) =>
        props.$isError ? 'hsl(0, 100%, 66%)' : 'hsl(278, 68%, 11%)'};
  }
`;

export const InputYear = styled.input<{ $isError: boolean }>`
  height: 2.4rem;
  width: 100%;
  padding: 0.8rem 0rem 0.8rem 0.8rem;
  border: none;
  border-radius: 0.3rem;
  outline: 1px solid
    ${(props) => (props.$isError ? 'hsl(0, 100%, 66%)' : 'hsl(270, 3%, 87%)')};
  font-weight: 500;
  color: hsl(278, 68%, 11%);
  &::placeholder {
    font-family: SpaceGrotesk, serif;
    font-weight: 900;
    color: hsl(279, 6%, 55%);
  }
  &:focus {
    outline: 2px solid
      ${(props) =>
        props.$isError ? 'hsl(0, 100%, 66%)' : 'hsl(278, 68%, 11%)'};
  }
`;

export const Cvc = styled.div`
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
  label {
    margin-bottom: 0.4rem;
    font-weight: 500;
    color: hsl(278, 68%, 11%);
  }
`;

export const InputCvc = styled.input<{ $isError: boolean }>`
  height: 2.4rem;
  width: 100%;
  padding: 0.8rem 0rem 0.8rem 0.8rem;
  border: none;
  border-radius: 0.3rem;
  outline: 1px solid
    ${(props) => (props.$isError ? 'hsl(0, 100%, 66%)' : 'hsl(270, 3%, 87%)')};
  font-weight: 500;
  color: hsl(278, 68%, 11%);
  &::placeholder {
    font-family: SpaceGrotesk, serif;
    font-weight: 900;
    color: hsl(279, 6%, 55%);
  }
  &:focus {
    outline: 2px solid
      ${(props) =>
        props.$isError ? 'hsl(0, 100%, 66%)' : 'hsl(278, 68%, 11%)'};
  }
`;
export const Button = styled.button`
  height: 3rem;
  margin: 3rem 0 2rem 0;
  padding: 0.9rem 0;
  border: none;
  text-align: center;
  font-weight: 500;
  font-size: 1rem;
  border-radius: 0.4rem;
  color: hsl(0, 0%, 100%);
  background-color: hsl(278, 68%, 11%);
  cursor: pointer;
  &:hover {
    background-color: hsl(278, 68%, 17%);
  }
  &:active {
    transform: scale(0.95);
  }
`;
