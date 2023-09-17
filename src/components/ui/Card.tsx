import { Wrapper, FrontCard, BackCard } from './Card.style';

interface CardProps {
  name: string;
  month: number;
  year: number;
  number: number;
  cvc: number;
}

export const Card = ({ name, month, year, number, cvc }: CardProps) => {
  return (
    <Wrapper>
      <FrontCard>
        <p>{name !== '' ? name : 'JANE APPLESEED'}</p>
        <p>{month > 0 ? month : '00'}</p>
        <p>{year > 0 ? year : '00'}</p>
        <p>{number > 0 ? number : '0000 0000 0000 0000'}</p>
      </FrontCard>
      <BackCard>
        <p>{cvc > 0 ? cvc : '000'}</p>
      </BackCard>
    </Wrapper>
  );
};
