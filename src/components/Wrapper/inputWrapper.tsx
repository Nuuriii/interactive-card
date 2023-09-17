import { useState } from 'react';
import { Input } from '../ui/Input';
import { Card } from '../ui/Card';
import { Container, Wrapper } from './wrapper.style';

export const InputWrapper = () => {
  const [displayName, setDisplayName] = useState('');
  const [displayMonth, setDisplayMonth] = useState(0);
  const [displayYear, setDisplayYear] = useState(0);
  const [displayNumber, setDisplayNumber] = useState('');
  const [displayCvc, setDisplayCvc] = useState(0);

  const handleInputName = (name: string) => {
    setDisplayName(name);
  };
  const handleInputMonth = (month: number) => {
    setDisplayMonth(month);
  };
  const handleInputYear = (year: number) => {
    setDisplayYear(year);
  };
  const handleInputNumber = (number: number) => {
    const toStr = number.toString();
    let formattedCardNumber = '';
    for (let i = 0; i < toStr.length; i++) {
      formattedCardNumber += toStr[i];
      if ((i + 1) % 4 === 0 && i !== toStr.length - 1) {
        formattedCardNumber += ' ';
      }
    }

    setDisplayNumber(formattedCardNumber);
  };
  const handleInputCvc = (cvc: number) => {
    setDisplayCvc(cvc);
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
        <Input
          userName={handleInputName}
          userNumber={handleInputNumber}
          monthExp={handleInputMonth}
          yearExp={handleInputYear}
          cvcUser={handleInputCvc}
        />
      </Wrapper>
    </Container>
  );
};
