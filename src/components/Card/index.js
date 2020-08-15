import React, { useState } from 'react';
import { FiX, FiArrowUp, FiArrowDown, FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import api from '../../services/api';

import { Container, Label, Title, Description, Controls } from './styles';

export default function Card(props) {
  const [visibleCard, setVisibleCard] = useState(true);

  const handleDeleteCard = async (id, idList) => {
    try {
      const response = await api.delete(`todos/${id}`, {
        headers: {
          Authorization: idList,
        },
      });
      setVisibleCard(false);
      console.log(response);
    } catch (err) {
      console.log(err);
      alert('Error deleting list. Please, try again...');
    }
  };

  return (
    <div>
      {visibleCard && (
        <Container>
          <Label>{props.label}</Label>
          <Title>{props.title}</Title>
          <Description>{props.description}</Description>
          <Controls>
            <FiArrowUp className="moveVerticalIcon pointer" size={14} color="#cacbcc" />
            <FiArrowDown className="moveVerticalIcon pointer" size={14} color="#cacbcc" />
            <FiArrowLeft className="moveHorizontalIcon pointer" size={14} color="#cacbcc" />
            <FiArrowRight className="moveHorizontalIcon pointer" size={14} color="#cacbcc" />
            <FiX
              onClick={() => handleDeleteCard(props.id, props.idList)}
              className="deleteIcon pointer"
              size={14}
              color="#cacbcc"
            />
          </Controls>
        </Container>
      )}
    </div>
  );
}
