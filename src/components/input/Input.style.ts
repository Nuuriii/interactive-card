import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  // margin: 6rem 0 0 0;
`;

export const Form = styled.form`
  display: flex;
  width: 88%;
  flex-direction: column;
`;

export const UserInformation = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  label {
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: hsl(278, 68%, 11%);
  }
`;

export const InputName = styled.input`
  padding: 0.5rem 0rem 0.5rem 0.7rem;
  border: none;
  margin-right: 0.4rem;
  outline: 2px solid hsl(270, 3%, 87%);
  font-weight: 500;
  color: hsl(278, 68%, 11%);
  border-radius: 0.3rem;
  width: 100%;
  &::placeholder {
    font-family: SpaceGrotesk, serif;
    font-weight: 900;
    color: hsl(279, 6%, 55%);
  }
  &:focus {
    outline: 2px solid hsl(278, 68%, 11%);
  }
`;

export const InputNumber = styled.input<{ $isError: boolean }>`
  padding: 0.5rem 0rem 0.5rem 0.7rem;
  border: none;
  margin-right: 0.4rem;
  outline: 1px solid
    ${(props) => (props.$isError ? 'hsl(0, 100%, 66%)' : 'hsl(270, 3%, 87%)')};
  font-weight: 500;
  color: hsl(278, 68%, 11%);
  border-radius: 0.3rem;
  width: 100%;
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
  color: hsl(0, 100%, 66%);
  font-weight: 500;
`;

export const DateAndCvc = styled.div`
  display: flex;
`;

export const ExpDate = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  > p {
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: hsl(278, 68%, 11%);
  }
`;

export const MonthAndYear = styled.div`
  display: flex;
  margin-right: 0.8rem;
`;

export const Month = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 0.7rem;
`;

export const Year = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputMonth = styled.input<{ $isError: boolean }>`
  padding: 0.5rem 0rem 0.5rem 0.3rem;
  border: none;
  outline: 1px solid
    ${(props) => (props.$isError ? 'hsl(0, 100%, 66%)' : 'hsl(270, 3%, 87%)')};
  font-weight: 500;
  color: hsl(278, 68%, 11%);
  margin-right: 0.4rem;
  border-radius: 0.3rem;
  width: 100%;
  &::placeholder {
    font-family: SpaceGrotesk, serif;
    font-weight: 900;
    color: hsl(279, 6%, 55%);
  }
  &:focus {
    outline: 2px solid
      ${(props) => (props.$isError ? 'hsl(0, 100%, 66%)' : 'hsl(270, 3%, 87%)')};
  }
`;

export const InputYear = styled.input`
  padding: 0.5rem 0rem 0.5rem 0.3rem;
  border: none;
  border-radius: 0.3rem;
  width: 100%;
  outline: 2px solid hsl(270, 3%, 87%);
  font-weight: 500;
  color: hsl(278, 68%, 11%);
  &::placeholder {
    font-family: SpaceGrotesk, serif;
    font-weight: 900;
    color: hsl(279, 6%, 55%);
  }
  &:focus {
    outline: 2px solid hsl(278, 68%, 11%);
  }
`;

export const Cvc = styled.div`
  display: flex;
  width: auto;
  flex-direction: column;
  label {
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: hsl(278, 68%, 11%);
  }
`;

export const InputCvc = styled.input`
  padding: 0.5rem 0rem 0.5rem 0.3rem;
  border: none;
  border-radius: 0.3rem;
  width: 100%;
  outline: 2px solid hsl(270, 3%, 87%);
  font-weight: 500;
  color: hsl(278, 68%, 11%);

  &::placeholder {
    font-family: SpaceGrotesk, serif;
    font-weight: 900;
    color: hsl(279, 6%, 55%);
  }
  &:focus {
    outline: 2px solid hsl(278, 68%, 11%);
  }
`;
export const Button = styled.button`
  border: none;
  font-weight: 500;
  font-size: 1rem;
  border-radius: 0.4rem;
  padding: 0.9rem 0;
  margin-top: 2rem;
  color: hsl(0, 0%, 100%);
  text-align: center;
  cursor: pointer;
  background-color: hsl(278, 68%, 11%);
  &:hover {
    background-color: hsl(278, 68%, 17%);
  }
  &:active {
    transform: scale(0.95);
  }
`;
