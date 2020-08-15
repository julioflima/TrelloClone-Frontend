import React, { useState, useEffect } from 'react';
import { FiArrowLeft, FiArrowRight, FiX } from 'react-icons/fi';

import api from '../../services/api';
import { Container, Plate, Title, Controls, Footer, Button } from './styles';
import Card from '../Card';

export default function List(props) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    console.log(props);
    api
      .get('todosByList', {
        headers: {
          Authorization: props.id,
        },
      })
      .then((response) => {
        setCards(response.data);
      });
  }, [props.id]);

  const [label, setLabel] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [footerText, setFooterText] = useState('Add card...');
  const [visibleInput, setVisibleInput] = useState(false);
  const [visibleList, setVisibleList] = useState(true);

  const handleKeyDown = async (e) => {
    if (e.key === 'Enter') {
      const data = { label, title, description };

      try {
        const response = await api.post('todos', data, {
          headers: {
            Authorization: props.id,
          },
        });
        console.log(response);
        setFooterText('Add card...');
        setVisibleInput(false);
        window.location.reload(false);
      } catch (err) {
        console.log(err);
        alert('Error creating new card. Please, try again...');
      }
    }
  };

  const handleShowAddList = () => {
    setVisibleInput(true);
    setFooterText('Press enter to create a card...');
  };

  const handleDeleteList = async (id) => {
    try {
      const response = await api.delete('lists', {
        headers: {
          Authorization: id,
        },
      });
      setVisibleList(false);
      console.log(response);
      setFooterText('Add card...');
      setVisibleInput(false);
    } catch (err) {
      console.log(err);
      alert('Error deleting list. Please, try again...');
    }
  };

  return (
    <div>
      {visibleList && (
        <Container>
          <Title>
            {props.name}
            <Controls>
              <FiArrowLeft className="moveHorizontalIcon pointer" size={14} color="#cacbcc" />
              <FiArrowRight className="moveHorizontalIcon pointer" size={14} color="#cacbcc" />
              <FiX
                onClick={() => handleDeleteList(props.id)}
                className="deleteIcon pointer"
                size={14}
                color="#cacbcc"
              />
            </Controls>
          </Title>
          {cards.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              label={card.label}
              title={card.title}
              description={card.description}
              idList={props.id}
            ></Card>
          ))}
          <Footer>
            {visibleInput && (
              <Plate onKeyDown={handleKeyDown}>
                <input
                  className="label"
                  placeholder="Insert label here..."
                  type="text"
                  value={label}
                  onChange={(e) => setLabel(e.target.value)}
                />
                <input
                  className="title"
                  placeholder="Insert title here..."
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                  className="description"
                  placeholder="Insert description card..."
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Plate>
            )}
            <Button onClick={handleShowAddList}>{footerText}</Button>
          </Footer>
        </Container>
      )}
    </div>
  );
}
