import styled from 'styled-components';
import BgDesktop from '../../assets/bg-main-desktop.png';
import BgCardMobile from '../../assets/bg-main-mobile.png';
import BgFrontCard from '../../assets/bg-card-front.png';
import BgBackCard from '../../assets/bg-card-back.png';

export const Wrapper = styled.div`
  height: 12rem;
  width: 100%;
  margin-bottom: 10rem;
  padding-bottom: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${BgCardMobile});
  background-size: cover;
  background-repeat: no-repeat;
  @media (width > 1168px) {
    height: 100%;
    width: 30%;
    margin-bottom: 0;
    background-image: url(${BgDesktop});
  }
`;

export const CardContainer = styled.div`
  position: relative;
  background-color: red;
`;

export const FrontCard = styled.div`
  height: 10rem;
  width: 19rem;
  padding: 1rem;
  position: absolute;
  top: 7rem;
  right: -8rem;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-image: url(${BgFrontCard});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 0.5rem;
  @media (548px <= width <= 1168px) {
    right: -7rem;
  }
  @media (width >= 1168px) {
    top: 3rem;
    left: -2rem;
    box-shadow:
      rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
      rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
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
  height: 10rem;
  width: 19rem;
  position: absolute;
  top: 1rem;
  left: -9rem;
  display: flex;
  justify-content: right;
  background-image: url(${BgBackCard});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 0.5rem;
  p {
    margin: 0.1rem 2rem 0 0;
    display: flex;
    align-items: center;
    color: black;
  }
  @media (548px <= width <= 1168px) {
    left: -6rem;
    right: -90rem;
  }
  @media (width >= 1168px) {
    top: 15rem;
    left: 50%;
    box-shadow:
      rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
      rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  }
`;
