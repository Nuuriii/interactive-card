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
  Month,
  Year,
  InputMonth,
  InputYear,
  Cvc,
  InputCvc,
  Button,
  ErrorMessage,
} from './Input.style';

interface InputProps {
  userName: (name: string) => void;
  monthExp: (month: string) => void;
  yearExp: (year: string) => void;
  userNumber: (number: string) => void;
  cvcUser: (number: string) => void;
  errorCondition: (err: boolean) => void;
}

export const Input = ({
  userName,
  monthExp,
  yearExp,
  userNumber,
  cvcUser,
  errorCondition,
}: InputProps) => {
  const [inputName, setInputName] = useState('');
  const [inputMonth, setInputMonth] = useState('');
  const [inputYear, setInputYear] = useState('');
  const [inputNumber, setInputNumber] = useState('');
  const [cvcCode, setCvcCode] = useState('');
  const [isError, setIsError] = useState(false);
  const [errorMessage, setIsErrorMessage] = useState('');

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;
    setInputName(name);
    userName(name);
  };
  const handleMonth = (event: React.ChangeEvent<HTMLInputElement>) => {
    const month = event.target.value;
    setInputMonth(month);
    monthExp(month);
  };
  const handleYear = (event: React.ChangeEvent<HTMLInputElement>) => {
    const year = event.target.value;
    setInputYear(year);
    yearExp(year);
  };
  const handleNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    const number = event.target.value;
    setInputNumber(number);
    userNumber(number);
  };
  const handleCvc = (event: React.ChangeEvent<HTMLInputElement>) => {
    const cvc = event.target.value;
    setCvcCode(cvc);
    cvcUser(cvc);
  };

  const checkError = () => {
    if (
      inputNumber === '' ||
      inputMonth === '' ||
      inputYear === '' ||
      cvcCode === ''
    ) {
      setIsError(true);
      errorCondition(true);
      setIsErrorMessage("Can't be blank");
    } else if (
      /^[0-9]+$/.test(inputNumber) === false ||
      /^[0-9]+$/.test(inputMonth) === false ||
      /^[0-9]+$/.test(inputYear) === false ||
      /^[0-9]+$/.test(cvcCode) === false
    ) {
      setIsError(true);
      errorCondition(true);
      setIsErrorMessage('Wrong format, numbers only');
    } else if (inputMonth >= '12' || inputYear >= '12') {
      setIsError(true);
      errorCondition(true);
      setIsErrorMessage('must be under 13');
    } else {
      setIsError(false);
      errorCondition(false);
      setIsErrorMessage('');
    }
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
            maxLength={18}
            required
          />
        </UserInformation>
        <UserInformation>
          <label htmlFor='number'>CARD NUMBER</label>
          <InputNumber
            id='number'
            type='text'
            placeholder='e.g 1234 5678 9123 0000'
            value={inputNumber}
            onChange={handleNumber}
            required
            maxLength={16}
            $isError={isError}
          />
          {isError === true ? <ErrorMessage>{errorMessage}</ErrorMessage> : ''}
        </UserInformation>

        <DateAndCvc>
          <ExpDate>
            <p>
              EXP. DATE (<label htmlFor='date'>MM</label>/
              <label htmlFor='year'>YY</label>)
            </p>
            <MonthAndYear>
              <Month>
                <InputMonth
                  id='date'
                  type='text'
                  placeholder='MM'
                  value={inputMonth}
                  onChange={handleMonth}
                  required
                  $isError={isError}
                />
                {/* {isError === true && Number.isNaN(inputMonth) ? (
                  <ErrorMessage>Wrong format, numbers only</ErrorMessage>
                ) : isError === true && inputMonth === 0 ? (
                  <ErrorMessage>Can't be blank</ErrorMessage>
                ) : (
                  ''
                )} */}
              </Month>
              <Year>
                <InputYear
                  id='year'
                  type='text'
                  placeholder='YY'
                  value={inputYear}
                  onChange={handleYear}
                  required
                />
              </Year>
            </MonthAndYear>
          </ExpDate>
          <Cvc>
            <label htmlFor='cvc'>CVC</label>
            <InputCvc
              id='cvc'
              type='text'
              placeholder='e.g. 123'
              value={cvcCode}
              onChange={handleCvc}
              required
            />
          </Cvc>
        </DateAndCvc>
        <Button onClick={checkError}>Confirm</Button>
      </Form>
    </Wrapper>
  );
};
