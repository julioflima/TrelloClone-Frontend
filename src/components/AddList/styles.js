import styled from 'styled-components';

export const Footer = styled.div`
  min-width: 300px;
  margin: 10px 0px 10px 10px;
  background: #eef4f7;
  border-radius: 10px;
  padding: 10px;
`;

export const Plate = styled.div`
  background: #fff;
  border-radius: 4px;
  margin: 10px 0;
  padding: 10px;
  box-shadow: 4px 4px 8px 0 rgb(0 0 0 / 5%), -4px -4px 20px 0 rgb(255 255 255 / 50%);
  transition: display 1s;
`;

export const Button = styled.div`
 
  font-weight: 500;
  font-size: 13px;
  font-weight: 500;
  color: #a2a2a2;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #62b0d0;
  }
`;
