import { useState } from 'react';
import { Input } from '../input/Input';
import { Card } from '../card/Card';
import { Success } from '../successMessage/Success';
import { Container, Wrapper } from './wrapper.style';

export const InputWrapper = () => {
  const [displayName, setDisplayName] = useState('');
  const [displayMonth, setDisplayMonth] = useState('');
  const [displayYear, setDisplayYear] = useState('');
  const [displayNumber, setDisplayNumber] = useState('');
  const [displayCvc, setDisplayCvc] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleInputName = (name: string) => {
    setDisplayName(name);
  };
  const handleInputMonth = (month: string) => {
    setDisplayMonth(month);
  };
  const handleInputYear = (year: string) => {
    setDisplayYear(year);
  };
  const handleInputNumber = (number: string) => {
    const toStr = number;
    let formattedCardNumber = '';
    for (let i = 0; i < toStr.length; i++) {
      formattedCardNumber += toStr[i];
      if ((i + 1) % 4 === 0 && i !== toStr.length - 1) {
        formattedCardNumber += ' ';
      }
    }

    setDisplayNumber(formattedCardNumber);
  };
  const handleInputCvc = (cvc: string) => {
    setDisplayCvc(cvc);
  };

  const handleError = (err: boolean) => {
    setIsError(err);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    isError === true ? setIsSubmit(false) : setIsSubmit(true);
  };

  return (
    <Container>
      <Wrapper>
        <Card
          name={displayName}
          number={displayNumber}
          month={displayMonth}
          year={displayYear}
          cvc={displayCvc}
        />
        {isSubmit ? (
          <Success />
        ) : (
          <Input
            handleSubmit={handleSubmit}
            userName={handleInputName}
            userNumber={handleInputNumber}
            monthExp={handleInputMonth}
            yearExp={handleInputYear}
            cvcUser={handleInputCvc}
            errorCondition={handleError}
          />
        )}
      </Wrapper>
    </Container>
  );
};
