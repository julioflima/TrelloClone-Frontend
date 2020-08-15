import React from 'react';

import { Footer, Plate, Button } from './styles';

export default function AddList() {
  return (
    <Footer>
      <Plate>
        <input className="title" placeholder="Insert title list here..." type="text" />
      </Plate>
      <Button>Add list...</Button>
    </Footer>
  );
}
