import React, { useState } from 'react';

import api from '../../services/api';
import { Footer, Plate, Button } from './styles';

export default function AddList() {
  const [name, setName] = useState('');
  const [label, setLabel] = useState('Add list...');
  const [visibleInput, setVisibleInput] = useState(false)

  const handleKeyDown = async e => {
    if (e.key === 'Enter') {

      const data = { name };

      try{
        const response = await api.post('list',data)
        console.log(response);
        setLabel('Add list...')
        setVisibleInput(false);


      }catch(err){
        console.log(err);
        alert('Error creating new list. Please, try again.')
      }
    }
  };

  const handleShowAddList = ()=>{
    setVisibleInput(true);
    setLabel('Press enter to create a list...');
  }

  return (
    <Footer>
      {
        visibleInput && 
        <Plate onKeyDown={handleKeyDown}>
          <input
            className="title"
            placeholder="Insert title list here..."
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </Plate>
        }
      <Button onClick={handleShowAddList}>{label}</Button>
    </Footer>
  );
}
