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
          <th className="cells-head">ID</th>
          <th className="cells-head">Name</th>
          <th className="cells-head">Kingdom</th>
          <th className="cells-head">Clade</th>
          <th className="cells-head">Order</th>
          <th className="cells-head">Family</th>
          <th className="cells-head">Subfamily</th>
          <th className="cells-head left" colSpan={2}>Genus</th>
        </tr>
      </thead>
      <tbody>
        {allPlants.map((plant) => {
          return (
            <tr key={plant.id}>
              <td className="cells">{plant.id}</td>
              <td className="cells">{plant.name}</td>
              <td className="cells">{plant.kingdom}</td>
              <td className="cells">{plant.clade}</td>
              <td className="cells">{plant.order}</td>
              <td className="cells">{plant.family}</td>
              <td className="cells">{plant.subfamily === null ? "–" : plant.subfamily}</td>
              <td className="cells">{plant.genus}</td>
              <td className="cells"><button onClick={() => {removePlant(plant.id)}}>Delete</button></td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}

export default PlantItem;
