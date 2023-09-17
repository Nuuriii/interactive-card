import {
  Wrapper,
  FrontCard,
  BackCard,
  ImageWrapper,
  UserInformation,
  OtherInformation,
} from './Card.style';
import CardLogo from '../../assets/card-logo.svg';

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
        <ImageWrapper>
          <img src={CardLogo} alt='' />
        </ImageWrapper>
        <UserInformation>
          <p>{number > 0 ? number : '0000 0000 0000 0000'}</p>
          <OtherInformation>
            <p>{name !== '' ? name : 'JANE APPLESEED'}</p>
            <p>
              {month > 0 ? month : '00'}/{year > 0 ? year : '00'}
            </p>
          </OtherInformation>
        </UserInformation>
      </FrontCard>
      <BackCard>
        <p>{cvc > 0 ? cvc : '000'}</p>
      </BackCard>
    </Wrapper>
  );
};
