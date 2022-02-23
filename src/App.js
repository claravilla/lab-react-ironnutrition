import './App.css';
import { v4 as randomId } from 'uuid';
import foods from './foods.json';
import React, { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [food, setFood] = useState(foods);
  const [foodMasterData, setFoodMaster] = useState(food);

  const addNewFood = (newFood) => {
    let updatedFood = [...food, newFood];
    let updatedFoodMaster = [...foodMasterData, newFood];
    setFood(updatedFood);
    setFoodMaster(updatedFoodMaster);
  };

  return (
    <div className="App">
      <h1>Food List</h1>
      <AddFoodForm handleAddButton={addNewFood} />
      <div className="main-container">
        {food.map((eachFood) => {
          return <FoodBox food={eachFood} key={randomId()} />;
        })}
      </div>
    </div>
  );
}

export default App;
