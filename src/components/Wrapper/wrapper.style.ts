import styled from 'styled-components';
import SpaceGrotesk from '../../assets/fonts/SpaceGrotesk-VariableFont_wght.ttf';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: SpaceGrotesk, serif;

  @font-face {
    font-family: SpaceGrotesk;
    src: url(${SpaceGrotesk});
  }
`;

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  flex-direction: column;
`;
