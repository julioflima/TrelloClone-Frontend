import React from 'react';
import { FiArrowLeft, FiArrowRight, FiX } from 'react-icons/fi';

import { Container, Plate, Title, Controls, Footer, Button } from './styles';

export default function List(props) {
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
      <Footer>
      <Plate>
        <input className="label" placeholder="Insert label here..." type="text" />
        <input className="title" placeholder="Insert title here..." type="text" />
        <textarea className="description" placeholder="Insert description card..." type="text" />
      </Plate>
      <Button>Add card...</Button>
    </Footer>
      
    </Container>
  );
}
