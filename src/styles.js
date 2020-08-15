import styled from "styled-components";

import logoImg from "./assets/images/logo.png";
import machinaImg from "./assets/images/machina.gif";

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: start;
`;
export const Dashboard = styled.div`
  height: calc(100vh - 2vmax);
  width: calc(100vw - 2vmax);
  display: flex;
  justify-content: flex-start;
  align-items: start;
  background: #141415;
  border-radius: 8px;
  border-radius: 8px;
  flex-direction: column;
  background-image: url(${machinaImg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50% 50%;
`;

export const Navbar = styled.div`
  width: calc(100vw - 2vmax);
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  flex-grow: 2;
  border-radius: 8px 8px 0px 0px;
`;

export const Logo = styled.div`
  width: 150px;
  min-height: 35px;
  border-radius: 5px;
  background-image: url(${logoImg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50% 50%;
`;
