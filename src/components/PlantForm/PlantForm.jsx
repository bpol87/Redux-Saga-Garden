import React, { useState } from "react";
import { useDispatch } from "react-redux";

const PlantForm = () => {
  const dispatch = useDispatch();

  //Initial state is an OBJECT, with keys id and name
  let [newPlantName, setPlantName] = useState("");
  let [newPlantKingdom, setPlantKingdom] = useState("");
  let [newPlantClade, setPlantClade] = useState("");
  let [newPlantOrder, setPlantOrder] = useState("");
  let [newPlantFamily, setPlantFamily] = useState("");
  let [newPlantSubfamily, setPlantSubfamily] = useState("");
  let [newPlantGenus, setPlantGenus] = useState("");

  const handleNameChange = (event) => {
    //Similar to in redux -- we dont want to get rid of the id field when we update name
    setPlant({ ...newPlant, name: event.target.value });
  };

  const addNewPlant = (event) => {
    event.preventDefault();

    let plantToSend = {
      name: newPlantName,
      kingdom: newPlantKingdom,
      clade: newPlantClade,
      order: newPlantOrder,
      family: newPlantFamily,
      subfamily: newPlantSubfamily,
      genus: newPlantGenus,
    };
    dispatch({ type: "ADD_PLANT", payload: plantToSend });
  };
  return (
    <div>
      <h3>This is the form</h3>
      <form onSubmit={addNewPlant}>
        <input
          type="text"
          value={newPlantName}
          onChange={(event) => {setPlantName(event.target.value)}}
          placeholder="Plant Name"
        />
        <input
          type="text"
          value={newPlantKingdom}
          onChange={(event) => {setPlantKingdom(event.target.value)}}
          placeholder="Plant Kingdom"
        />
        <input
          type="text"
          value={newPlantClade}
          onChange={(event) => {setPlantClade(event.target.value)}}
          placeholder="Plant Clade"
        />
        <input
          type="text"
          value={newPlantOrder}
          onChange={(event) => {setPlantOrder(event.target.value)}}
          placeholder="Plant Order"
        />
        <input
          type="text"
          value={newPlantFamily}
          onChange={(event)=> {setPlantFamily(event.target.value)}}
          placeholder="Plant Family"
        />
        <input
          type="text"
          value={newPlantSubfamily}
          onChange={(event) => {setPlantSubfamily(event.target.value)}}
          placeholder="Plant Subfamily"
        />
        <input
          type="text"
          value={newPlantGenus}
          onChange={(event) => {setPlantGenus(event.target.value)}}
          placeholder="Plant Genus"
        />
        <button type="submit">Add New Plant</button>
      </form>
    </div>
  );
};

export default PlantForm;
