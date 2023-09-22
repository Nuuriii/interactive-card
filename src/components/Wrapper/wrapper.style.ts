import styled from 'styled-components';
import SpaceGrotesk from '../../assets/fonts/SpaceGrotesk-VariableFont_wght.ttf';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  //align-items: center;
  height: 100%;
  font-family: SpaceGrotesk, serif;

  @font-face {
    font-family: SpaceGrotesk;
    src: url(${SpaceGrotesk});
  }
`;

export const Wrapper = styled.div`
  display: flex;
  height: auto;
  width: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  @media (width > 1000px) {
    height: 100%;
    flex-direction: row;
  }
`;
