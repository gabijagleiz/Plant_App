import React, { createContext, useState } from 'react';

export const PlantContext = createContext();

export const PlantProvider = ({ children }) => {
  const [myPlants, setMyPlants] = useState([]);

  const addPlant = (plant) => {
    setMyPlants((prevPlants) => [...prevPlants, plant]);
  };

  const removePlant = (plantId) => {
    setMyPlants((prevPlants) => prevPlants.filter((plant) => plant.id !== plantId));
  };

  return (
    <PlantContext.Provider value={{ myPlants, addPlant, removePlant }}>
      {children}
    </PlantContext.Provider>
  );
};
