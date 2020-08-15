import React from 'react';
import { FiX } from 'react-icons/fi';

import { Container, Title, Footer  } from './styles';

export default function Card(props) {
  return (
    <Container>
      <Title>
        {props.name}
        <FiX size={16} color="#00b1f8"/>
      </Title>
      {props.children}
      <Footer >Add a card...</Footer>
    </Container>
  );
}
