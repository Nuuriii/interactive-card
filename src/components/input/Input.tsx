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
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const Input = ({
  userName,
  monthExp,
  yearExp,
  userNumber,
  cvcUser,
  errorCondition,
  handleSubmit,
}: InputProps) => {
  const [inputName, setInputName] = useState('');
  const [inputMonth, setInputMonth] = useState('');
  const [inputYear, setInputYear] = useState('');
  const [inputNumber, setInputNumber] = useState('');
  const [cvcCode, setCvcCode] = useState('');
  const [isError, setIsError] = useState(false);
  const [errorName, setErrorName] = useState(false);
  const [errorNumber, setErrorNumber] = useState(false);
  const [errorMonth, setErrorMonth] = useState(false);
  const [errorYear, setErrorYear] = useState(false);
  const [errorCvc, setErrorCvc] = useState(false);

  const checkError = () => {
    // Validasi inputName
    setErrorName(inputName === '');
    console.log(`ini nilai dari error name : ${errorName}`);

    // Validasi inputNumber
    setErrorNumber(inputNumber === '' || !/^[0-9]+$/.test(inputNumber));
    console.log(errorNumber);
    // Validasi inputMonth
    setErrorMonth(
      inputMonth === '' ||
        !/^[0-9]+$/.test(inputMonth) ||
        Number(inputMonth) >= 12,
    );

    // Validasi inputYear
    setErrorYear(inputYear === '' || !/^[0-9]+$/.test(inputYear));

    // Validasi cvcCode
    setErrorCvc(cvcCode === '' || !/^[0-9]+$/.test(cvcCode));

    // Cek apakah ada kesalahan
    const hasError =
      errorName || errorNumber || errorMonth || errorYear || errorCvc;

    // Set nilai isError dan panggil errorCondition
    setIsError(hasError);
    errorCondition(hasError);

    console.log(`ini jika ${hasError ? 'benar' : 'salah'}: ${isError}`);
  };

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;
    setInputName(name);
    userName(name);
    checkError();
  };
  const handleMonth = (event: React.ChangeEvent<HTMLInputElement>) => {
    const month = event.target.value;
    setInputMonth(month);
    monthExp(month);
    checkError();
  };
  const handleYear = (event: React.ChangeEvent<HTMLInputElement>) => {
    const year = event.target.value;
    setInputYear(year);
    yearExp(year);
    checkError();
  };
  const handleNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    const number = event.target.value;
    setInputNumber(number);
    userNumber(number);
    checkError();
  };
  const handleCvc = (event: React.ChangeEvent<HTMLInputElement>) => {
    const cvc = event.target.value;
    setCvcCode(cvc);
    cvcUser(cvc);
    checkError();
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <UserInformation>
          <label htmlFor='name'>CARDHOLDER NAME</label>
          <InputName
            id='name'
            type='text'
            placeholder='e.g Jane Appleseed'
            value={inputName}
            onChange={handleName}
            maxLength={18}
            $isError={errorName}
            //required
          />
          {errorName === true ? (
            <ErrorMessage>Can't be blank</ErrorMessage>
          ) : (
            ''
          )}
        </UserInformation>
        <UserInformation>
          <label htmlFor='number'>CARD NUMBER</label>
          <InputNumber
            id='number'
            type='text'
            placeholder='e.g 1234 5678 9123 0000'
            value={inputNumber}
            onChange={handleNumber}
            // required
            maxLength={16}
            $isError={errorNumber}
          />
          {errorNumber === true && inputNumber === '' ? (
            <ErrorMessage>Can't be blank</ErrorMessage>
          ) : errorNumber === true && /^[0-9]+$/.test(inputNumber) === false ? (
            <ErrorMessage>Wrong format, number only</ErrorMessage>
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
              <Month>
                <InputMonth
                  id='date'
                  type='text'
                  placeholder='MM'
                  value={inputMonth}
                  onChange={handleMonth}
                  maxLength={2}
                  $isError={errorMonth}
                />
                {errorMonth === true && inputMonth === '' ? (
                  <ErrorMessage>Can't be blank</ErrorMessage>
                ) : errorMonth === true &&
                  /^[0-9]+$/.test(inputMonth) === false ? (
                  <ErrorMessage>Number only</ErrorMessage>
                ) : errorMonth === true && inputMonth === '13' ? (
                  <ErrorMessage>Must be under 13</ErrorMessage>
                ) : (
                  ''
                )}
              </Month>
              <Year>
                <InputYear
                  id='year'
                  type='text'
                  placeholder='YY'
                  value={inputYear}
                  onChange={handleYear}
                  maxLength={4}
                  $isError={errorYear}
                />
                {errorYear === true && inputYear === '' ? (
                  <ErrorMessage>Can't be blank</ErrorMessage>
                ) : errorYear === true &&
                  /^[0-9]+$/.test(inputYear) === false ? (
                  <ErrorMessage>Number only</ErrorMessage>
                ) : (
                  ''
                )}
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
              //required
              $isError={errorCvc}
              maxLength={3}
            />
            {errorCvc === true && cvcCode === '' ? (
              <ErrorMessage>Can't be blank</ErrorMessage>
            ) : errorCvc === true && /^[0-9]+$/.test(cvcCode) === false ? (
              <ErrorMessage>Number only</ErrorMessage>
            ) : (
              ''
            )}
          </Cvc>
        </DateAndCvc>
        <Button type='submit' onClick={checkError}>
          Confirm
        </Button>
      </Form>
    </Wrapper>
  );
};
