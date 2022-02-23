import './App.css';
import { v4 as randomId } from 'uuid';
import foods from './foods.json';
import React, { useState } from 'react';

function App() {
  const [food, setFood] = useState(foods);

  const foodList = food.map((eachFood) => {
    let imageUrl = eachFood.image;
    return (
      <div key={randomId()}>
        <p> {eachFood.name} </p>
        <img src={imageUrl} alt={eachFood.name} width={100} />
      </div>
    );
  });

  return <div className="App">{foodList}</div>;
}

export default App;
