import './App.css';
import { v4 as randomId } from 'uuid';
import foods from './foods.json';
import React, { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [food, setFood] = useState(foods);
  const [foodMasterData, setFoodMaster] = useState(food);

  const addNewFood = (newFood) => {
    let updatedFood = [...food, newFood];
    let updatedFoodMaster = [...foodMasterData, newFood];
    setFood(updatedFood);
    setFoodMaster(updatedFoodMaster);
  };

  const searchFood = (input) => {
    console.log(input);
    let searchResults = foodMasterData.filter((eachFood) => {
      return eachFood.name.toLowerCase().includes(input);
    });

    setFood(searchResults);
  };

  const handleDeleteBtn = (i) => {
    let deletedFood = [...food];
    deletedFood.splice(i, 1);
    setFood(deletedFood);
  };

  return (
    <div className="App">
      <h1>Food List</h1>
      <Search handleSearch={searchFood} />
      <AddFoodForm handleAddButton={addNewFood} />
      <div className="main-container">
        {food.map((eachFood, index) => {
          return (
            <FoodBox
              food={eachFood}
              key={index}
              uniqueId={index}
              deleteBtn={handleDeleteBtn}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
