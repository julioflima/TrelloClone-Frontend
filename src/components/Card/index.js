import React from 'react';
import { FiX, FiArrowUp, FiArrowDown, FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import { Container, Label, Title, Description, Controls } from './styles';

export default function Card() {
  return (
    <Container>
      <Label>Features</Label>
      <Title>Trollololw</Title>
      <Description>EIEIEIEIEIE</Description>
      <Controls>
        <FiArrowUp className="moveVerticalIcon pointer" size={14} color="#cacbcc" />
        <FiArrowDown className="moveVerticalIcon pointer" size={14} color="#cacbcc" />
        <FiArrowLeft className="moveHorizontalIcon pointer" size={14} color="#cacbcc" />
        <FiArrowRight className="moveHorizontalIcon pointer" size={14} color="#cacbcc" />
        <FiX className="deleteIcon pointer" size={14} color="#cacbcc" />
      </Controls>
    </Container>
  );
}
