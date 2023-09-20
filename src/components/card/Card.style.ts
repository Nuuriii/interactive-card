import styled from 'styled-components';
import BgDesktop from '../../assets/bg-main-desktop.png';
import BgCardMobile from '../../assets/bg-main-mobile.png';
import BgFrontCard from '../../assets/bg-card-front.png';
import BgBackCard from '../../assets/bg-card-back.png';

export const Wrapper = styled.div`
  background-image: url(${BgCardMobile});
  width: 100%;
  background-size: cover;
  position: relative;
  height: 24rem;
  background-repeat: no-repeat;
  top: 0;
  margin-bottom: 6rem;
  @media (width > 1000px) {
    background-image: url(${BgDesktop});
    height: 100%;
    width: 30%;
    margin-bottom: 0;
  }
`;

export const FrontCard = styled.div`
  background-image: url(${BgFrontCard});
  z-index: 1;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-size: cover;
  background-repeat: no-repeat;
  height: 10rem;
  top: 6.9rem;
  left: 1rem;
  position: absolute;
  width: 19rem;
  border-radius: 0.5rem;
  @media (548px <= width <= 1000px) {
    left: 30%;
  }
  @media (width >= 1000px) {
    top: 15%;
    left: 43%;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  img {
    height: 2rem;
  }
`;

export const UserInformation = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  > p {
    margin-bottom: 1rem;
  }
`;

export const OtherInformation = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BackCard = styled.div`
  background-image: url(${BgBackCard});
  display: flex;
  //align-items: center;
  justify-content: right;
  background-size: cover;
  background-repeat: no-repeat;
  height: 10rem;
  top: 1rem;
  left: 13%;
  position: absolute;
  width: 19rem;
  border-radius: 0.5rem;
  p {
    display: flex;
    align-items: center;
    margin: 0.3rem 2rem 0 0;
    color: black;
  }
  @media (548px <= width <= 1000px) {
    left: 35%;
  }
  @media (width >= 1000px) {
    top: 45%;
    left: 50%;
  }
`;
