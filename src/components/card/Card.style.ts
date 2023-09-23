import styled from 'styled-components';
import BgDesktop from '../../assets/bg-main-desktop.png';
import BgCardMobile from '../../assets/bg-main-mobile.png';
import BgFrontCard from '../../assets/bg-card-front.png';
import BgBackCard from '../../assets/bg-card-back.png';

export const Wrapper = styled.div`
  background-image: url(${BgCardMobile});
  width: 100%;
  background-size: cover;
  height: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  margin-bottom: 10rem;
  padding-bottom: 12rem;
  @media (width > 1000px) {
    background-image: url(${BgDesktop});
    height: 100%;
    width: 30%;
    margin-bottom: 0;
  }
`;

export const CardContainer = styled.div`
  position: relative;
  background-color: red;
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
  top: 7rem;
  right: -8rem;
  position: absolute;
  width: 19rem;
  border-radius: 0.5rem;
  @media (548px <= width <= 1000px) {
    right: -7rem;
  }
  @media (width >= 1000px) {
    box-shadow:
      rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
      rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    top: 3rem;
    left: -2rem;
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
  left: -9rem;
  position: absolute;
  width: 19rem;
  border-radius: 0.5rem;
  p {
    display: flex;
    align-items: center;
    margin: 0.1rem 2rem 0 0;
    color: black;
  }
  @media (548px <= width <= 1000px) {
    left: -6rem;
    right: -90rem;
  }
  @media (width >= 1000px) {
    top: 15rem;
    box-shadow:
      rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
      rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    left: 50%;
  }
`;
