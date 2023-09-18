import { useState } from 'react';
import {
  Wrapper,
  Form,
  UserInformation,
  InputName,
  InputNumber,
  DateAndCvc,
  ExpDate,
  MonthAndYear,
  InputMonth,
  InputYear,
  Cvc,
  InputCvc,
  Button,
  ErrorMessage,
} from './Input.style';

interface InputProps {
  userName: (name: string) => void;
  monthExp: (month: number) => void;
  yearExp: (year: number) => void;
  userNumber: (number: number) => void;
  cvcUser: (number: number) => void;
}

export const Input = ({
  userName,
  monthExp,
  yearExp,
  userNumber,
  cvcUser,
}: InputProps) => {
  const [inputName, setInputName] = useState('');
  const [inputMonth, setInputMonth] = useState(0);
  const [inputYear, setInputYear] = useState(0);
  const [inputNumber, setInputNumber] = useState(0);
  const [cvcCode, setCvcCode] = useState(0);
  const [isError, setIsError] = useState(false);

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;
    setInputName(name);
    userName(name);
  };
  const handleMonth = (event: React.ChangeEvent<HTMLInputElement>) => {
    const month = event.target.value;
    setInputMonth(parseFloat(month));
    monthExp(parseFloat(month));
  };
  const handleYear = (event: React.ChangeEvent<HTMLInputElement>) => {
    const year = event.target.value;
    setInputYear(parseFloat(year));
    yearExp(parseFloat(year));
  };
  const handleNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    const number = event.target.value;
    setInputNumber(Number(number));
    userNumber(parseFloat(number));
  };
  const handleCvc = (event: React.ChangeEvent<HTMLInputElement>) => {
    const cvc = event.target.value;
    setCvcCode(parseFloat(cvc));
    cvcUser(parseFloat(cvc));
  };

  const checkError = () => {
    Number.isNaN(inputNumber) || inputNumber === 0 || Number.isNaN(inputMonth)
      ? setIsError(true)
      : setIsError(false);
  };

  return (
    <Wrapper>
      <Form action=''>
        <UserInformation>
          <label htmlFor='name'>CARDHOLDER NAME</label>
          <InputName
            id='name'
            type='text'
            placeholder='e.g Jane Appleseed'
            value={inputName}
            onChange={handleName}
            required
          />
        </UserInformation>
        <UserInformation>
          <label htmlFor='number'>CARD NUMBER</label>
          <InputNumber
            id='number'
            type='text'
            placeholder='e.g 1234 5678 9123 0000'
            value={inputNumber > 0 ? inputNumber : ''}
            onChange={handleNumber}
            required
            $isError={isError}
          />
          {isError === true && Number.isNaN(inputNumber) ? (
            <ErrorMessage>Wrong format, numbers only</ErrorMessage>
          ) : isError === true && inputNumber === 0 ? (
            <ErrorMessage>Can't be blank</ErrorMessage>
          ) : (
            ''
          )}
        </UserInformation>

        <DateAndCvc>
          <ExpDate>
            <p>
              EXP. DATE (<label htmlFor='date'>MM</label>/
              <label htmlFor='year'>YY</label>)
            </p>
            <MonthAndYear>
              <div>
                <InputMonth
                  id='date'
                  type='text'
                  placeholder='MM'
                  value={inputMonth > 0 ? inputMonth : ''}
                  onChange={handleMonth}
                  required
                />
                {isError === true && Number.isNaN(inputMonth) ? (
                  <ErrorMessage>Wrong format, numbers only</ErrorMessage>
                ) : isError === true && inputMonth === 0 ? (
                  <ErrorMessage>Can't be blank</ErrorMessage>
                ) : (
                  ''
                )}
              </div>
              <div>
                <InputYear
                  id='year'
                  type='text'
                  placeholder='YY'
                  value={inputYear > 0 ? inputYear : ''}
                  onChange={handleYear}
                  required
                />
              </div>
            </MonthAndYear>
          </ExpDate>
          <Cvc>
            <label htmlFor='cvc'>CVC</label>
            <InputCvc
              id='cvc'
              type='text'
              placeholder='e.g. 123'
              value={cvcCode > 0 ? cvcCode : ''}
              onChange={handleCvc}
              required
            />
          </Cvc>
        </DateAndCvc>
        <Button type='submit' onClick={checkError}>
          Confirm
        </Button>
      </Form>
    </Wrapper>
  );
};
