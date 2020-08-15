import React, { Component } from 'react';
// import { uniqueId } from 'lodash';

// import api from './services/api';

import GlobalStyle from './styles/global';
import { Navbar, Container, Dashboard, Logo } from './styles';

import List from './components/List';
import AddList from './components/AddList';
import Card from './components/Card';




class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Dashboard>
          <Navbar>
            <Logo />
          </Navbar>
          <Container>
            <List name={'Backlog'}>
              <Card>Card</Card>
              <Card>Card</Card>
              <Card>Card</Card>
              <Card>Card</Card>
            </List>
            <List name={'Roadmap'}>
              <Card>Card</Card>
              <Card>Card</Card>
              <Card>Card</Card>
              <Card>Card</Card>
            </List>
            <List name={'Sprint'}>
              <Card>Card</Card>
              <Card>Card</Card>
              <Card>Card</Card>
              <Card>Card</Card>
            </List>
            <AddList  />
          </Container>
        </Dashboard>
      </div>
    );
  }
}

export default App;
