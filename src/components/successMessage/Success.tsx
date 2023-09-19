import {
  Wrapper,
  Message,
  Image,
  Title,
  Information,
  Button,
} from './Success.style';
import CompleteIcon from '../../assets/icon-complete.svg';

export const Success = () => {
  const handleReturnToForm = () => {
    window.location.reload();
  };

  return (
    <Wrapper>
      <Message>
        <Image src={CompleteIcon} alt='' />
        <Title>THANK YOU!</Title>
        <Information>We've added your card details</Information>
      </Message>
      <Button onClick={handleReturnToForm}>Continue</Button>
    </Wrapper>
  );
};
