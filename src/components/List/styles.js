import styled from 'styled-components';

export const Container = styled.div`
  min-width: 300px;
  margin: 10px 0px 10px 10px;
  background: #eef4f7;
  border-radius: 10px;
  padding: 10px;
  font-weight: 500;
  color: #00b1f8;
`;

export const Plate = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 4px;
  margin: 10px 0;
  padding: 10px;
  box-shadow: 4px 4px 8px 0 rgb(0 0 0 / 5%), -4px -4px 20px 0 rgb(255 255 255 / 50%);
  transition: display 1s;
`;

export const Badges = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #8257e6;
`;

export const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
  padding-left: 10px;
  color: #00b1f8;
  display: flex;
  justify-content: space-between;
`;

export const Controls = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Footer = styled.div`
  font-size: 13px;
  font-weight: 500;
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
