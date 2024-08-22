import { useDispatch, useSelector } from "react-redux";

function PlantItem() {
const dispatch = useDispatch();

const allPlants = useSelector((store) => store.plantList);

const removePlant = (plantId) => {
    dispatch({type: 'REMOVE_PLANT', payload: plantId})
    }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Kingdom</th>
          <th>Clade</th>
          <th>Order</th>
          <th>Family</th>
          <th>Subfamily</th>
          <th>Genus</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {allPlants.map((plant) => {
          return (
            <tr key={plant.id}>
              <td>{plant.id}</td>
              <td>{plant.name}</td>
              <td>{plant.kingdom}</td>
              <td>{plant.clade}</td>
              <td>{plant.order}</td>
              <td>{plant.family}</td>
              <td>{plant.subfamily === null ? "–" : plant.subfamily}</td>
              <td>{plant.genus}</td>
              <td><button onClick={() => {removePlant(plant.id)}}>Delete</button></td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}

export default PlantItem;
