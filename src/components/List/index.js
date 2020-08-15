import React from 'react';
import { FiArrowLeft, FiArrowRight, FiX } from 'react-icons/fi';

import { Container, Title, Controls, Footer } from './styles';

export default function Card(props) {
  return (
    <Container>
      <Title>
        {props.name}
        <Controls>
          <FiArrowLeft className="moveHorizontalIcon pointer" size={14} color="#cacbcc" />
          <FiArrowRight className="moveHorizontalIcon pointer" size={14} color="#cacbcc" />
          <FiX className="deleteIcon pointer" size={14} color="#cacbcc" />
        </Controls>
      </Title>
      {props.children}
      <Footer>Add a card...</Footer>
    </Container>
  );
}
