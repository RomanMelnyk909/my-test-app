import React, { useState } from 'react';
import './App.css';
import HabbitsList from '../Components/HabbitsList/HabbitsList';
import AddHabbit from '../Components/AddHabbit/AddHabbit'

function App() {

  const [habbits, setHabbits] = useState(
    [{
      id: 1,
      title: 'habbit_1',
      status: false

    },
    {
      id: 2,
      title: 'habbit_2',
      status: false
    },
    {
      id: 3,
      title: 'habbit_3',
      status: false
    }
    ]);





  return (
    <div className="App">
      <AddHabbit habbits={habbits} setHabbits={setHabbits} />
      <HabbitsList habbits={habbits} setHabbits={setHabbits} />
    </div>
  )
}

export default App;
