import {
  Wrapper,
  CardContainer,
  FrontCard,
  BackCard,
  ImageWrapper,
  UserInformation,
  OtherInformation,
} from './Card.style';
import CardLogo from '../../assets/card-logo.svg';

interface CardProps {
  name: string;
  month: string;
  year: string;
  number: string;
  cvc: string;
}

export const Card = ({ name, month, year, number, cvc }: CardProps) => {
  return (
    <Wrapper>
      <CardContainer>
        <FrontCard>
          <ImageWrapper>
            <img src={CardLogo} alt='' />
          </ImageWrapper>
          <UserInformation>
            <p>{number === '' ? '0000 0000 0000 0000' : number}</p>
            <OtherInformation>
              <p>{name !== '' ? name.toUpperCase() : 'JANE APPLESEED'}</p>
              <p>
                {month !== '' ? month : '00'}/{year !== '' ? year : '00'}
              </p>
            </OtherInformation>
          </UserInformation>
        </FrontCard>
        <BackCard>
          <p>{cvc !== '' ? cvc : '000'}</p>
        </BackCard>
      </CardContainer>
    </Wrapper>
  );
};
