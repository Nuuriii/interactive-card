import styled from 'styled-components';
import SpaceGrotesk from '../../assets/fonts/SpaceGrotesk-VariableFont_wght.ttf';

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  font-family: SpaceGrotesk, serif;

  @font-face {
    font-family: SpaceGrotesk;
    src: url(${SpaceGrotesk});
  }
`;

export const Wrapper = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media (width > 1168px) {
    height: 100%;
    flex-direction: row;
  }
`;
