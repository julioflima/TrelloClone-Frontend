import React from 'react';
import { FiX,FiArrowUp, FiArrowDown, FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import { Container, Title, Description, Buttons } from './styles';

export default function Card() {
  return (
    <Container>
      <Title>Trollololw</Title>
      <Description>EIEIEIEIEIE</Description>
      <Buttons >
        <FiArrowUp size={14} color="#cacbcc"/>
        <FiArrowDown size={14} color="#cacbcc"/>
        <FiArrowLeft size={14} color="#cacbcc"/>
        <FiArrowRight size={14} color="#cacbcc"/>
        <FiX size={14} color="#cacbcc"/>
      </Buttons>
    </Container>
  );
}
