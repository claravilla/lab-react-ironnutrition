import React, { useState } from 'react';
import { Divider, Input, Col, Card } from 'antd';

function AddFoodForm(props) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  const handleNameInput = (event) => {
    setName(event.target.value);
  };

  const handleImageInput = (event) => {
    setImage(event.target.value);
  };

  const handleCaloriesInput = (event) => {
    setCalories(event.target.value);
  };

  const handleServingsInput = (event) => {
    setServings(event.target.value);
  };

  const addFood = (event) => {
    event.preventDefault();
    const newFood = { name, image, calories, servings };
    props.handleAddButton(newFood);

    setName('');
    setImage('');
    setCalories('');
    setServings('');
  };

  return (
    <Col>
      <Card>
        <form onSubmit={addFood}>
          <Divider>Add Food Entry</Divider>
          <label>Food Name</label>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleNameInput}
          />
          <label>Image</label>
          <Input
            type="text"
            name="image"
            value={image}
            onChange={handleImageInput}
          />
          <label>Calories</label>
          <Input
            type="number"
            name="calories"
            value={calories}
            onChange={handleCaloriesInput}
          />
          <label>Servings</label>
          <Input
            type="number"
            name="servings"
            value={servings}
            onChange={handleServingsInput}
          />
          <button type="submit">Create</button>
        </form>
      </Card>
    </Col>
  );
}

export default AddFoodForm;
