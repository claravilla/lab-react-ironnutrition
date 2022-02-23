import './App.css';
import { v4 as randomId } from 'uuid';
import foods from './foods.json';
import React, { useState } from 'react';
import FoodBox from './components/FoodBox';

function App() {
  const [food, setFood] = useState(foods);

  const foodList = food.map((eachFood) => {
    // let imageUrl = eachFood.image;
    // return (
    //   <div key={randomId()}>
    //     <p> {eachFood.name} </p>
    //     <img src={imageUrl} alt={eachFood.name} width={100} />
    //   </div>
    // );
    return <FoodBox food={eachFood} />;
  });

  return (
    <div className="App">
      <h1>Food List</h1>
      {food.map((eachFood) => {
        return <FoodBox food={eachFood} key={randomId()} />;
      })}
    </div>
  );
}

export default App;
