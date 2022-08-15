import { createGlobalStyle } from 'styled-components';

import MaisonNeueMedium from './MaisonNeue-Medium.woff2';
import MaisonNeueBold from './MaisonNeue-Bold.woff2';

export default createGlobalStyle`
  @font-face {
    font-family: 'Ubuntu';
    src: local(''),
      url(${MaisonNeueMedium}) format('woff2'),
    font-weight: 300;
    font-style: normal;
  }    

  @font-face {
    font-family: 'Ubuntu';
    src: local(''),
      url(${MaisonNeueBold}) format('woff2'),
    font-weight: 500;
    font-style: normal;
  }    
`;
