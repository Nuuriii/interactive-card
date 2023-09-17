import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 6rem 0 0 0;
`;

export const Form = styled.form`
  display: flex;
  width: 88%;
  flex-direction: column;
`;

export const UserInformation = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DateAndCvc = styled.div`
  display: flex;
`;

export const ExpDate = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  label {
    margin-bottom: 0.5rem;
  }
`;

export const MonthAndYear = styled.div`
  display: flex;
  margin-right: 0.8rem;
`;

export const InputMonth = styled.input`
  padding: 0.5rem 0rem 0.5rem 0.3rem;
  border: none;
  margin-right: 0.4rem;
  outline: 1px solid black;
  border-radius: 0.3rem;
  width: 50%;
`;

export const InputYear = styled.input`
  padding: 0.5rem 0rem 0.5rem 0.3rem;
  border: none;
  outline: 1px solid black;
  border-radius: 0.3rem;
  width: 50%;
`;

export const Cvc = styled.div`
  display: flex;
  width: auto;
  flex-direction: column;
  label {
    margin-bottom: 0.5rem;
  }
`;

export const InputCvc = styled.input`
  padding: 0.5rem 0rem 0.5rem 0.3rem;
  border: none;
  outline: 1px solid black;
  border-radius: 0.3rem;
  width: 100%;
`;
