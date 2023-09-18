import { Wrapper } from './Success.style';
import CompleteIcon from '../../assets/icon-complete.svg';

export const Success = () => {
  return (
    <Wrapper>
      <div>
        <img src={CompleteIcon} alt='' />
        <h1>THANK YOU</h1>
        <p>We've added your card details</p>
      </div>
      <button>Continue</button>
    </Wrapper>
  );
};
