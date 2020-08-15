import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import { Content, Navbar, Container, Logo } from './styles';

import List from '../List';
import AddList from '../AddList';

export default function Dashboard() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    api.get('lists').then((response) => {
      console.log(response.data)
      setLists(response.data);
    });
  }, []);
  return (
    <Content>
      <Navbar>
        <Logo />
      </Navbar>
      <Container>
        {lists.map((list) => (
          <List key={list.id} id={list.id} name={list.name}></List>
        ))}
        <AddList />
      </Container>
    </Content>
  );
}
