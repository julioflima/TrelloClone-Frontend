import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  border-radius: 4px;
  margin: 10px 0;
  padding: 10px;
  box-shadow: 4px 4px 8px 0 rgb(0 0 0 / 5%), -4px -4px 20px 0 rgb(255 255 255 / 50%);
`;

export const Badges = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #6d6d6d;
`;

export const Title = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #6d6d6d;
`;

export const Description = styled.div`
  font-size: 10px;
  font-weight: 200;
  color: #828282;
`;

export const Controls = styled.div`
  display: flex;
  justify-content: flex-end;

  &:hover ${Button} {
    color: #0ee;
  }
`;

export const Button = styled.div`
  cursor: pointer;
  padding-left:5px
`;
