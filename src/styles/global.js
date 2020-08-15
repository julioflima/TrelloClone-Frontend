import { createGlobalStyle } from 'styled-components';

import 'react-circular-progressbar/dist/styles.css';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;1,400&display=swap');



  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    font-size: 14px;
    background: linear-gradient(0deg, #0079c1 0%, #00b8ff);
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  

  html, body, #root {
    height: 100%;
    display: flex;
    justify-content: center; 
    align-items: center;
  }

  .pointer{
    cursor:pointer;
    transition: color .2s;
  }

  .deleteIcon:hover{
    color:#000 !important;
  }

  .moveHorizontalIcon:hover{
    color:#75e497 !important;
  }
  .moveVerticalIcon:hover{
    color:#75d0e4 !important;
  }
  
  input, textarea{
    height: 25px;
    width:100%;
    max-width:300px;
    margin-bottom:5px;
    border:0px;
    color: #828282;
    caret-color: #75d0e4;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    font-size: 14px;
  }

  .label{
    font-size: 10px;
    font-weight: 200;
    color: #828282;
    text-align: end;
    display:inline;
  }

  .title{
    font-size: 14px;
    font-weight: 500;
    color: #6d6d6d;
  }

  .description{
    font-size: 10px;
    font-weight: 200;
    color: #828282;
  }
  `;
