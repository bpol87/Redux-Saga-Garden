import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import PlantItem from '../PlantItem/PlantItem.jsx';

function PlantList() {
    const dispatch = useDispatch();

    const reduxState = useSelector(store => store);

    useEffect(() => {
        getPlants();
    }, []); 

const getPlants = () => {
    dispatch({type: 'FETCH_PLANTS'})
}

    return (
        <div id="plant-list">
            <h3>This is the plant list</h3>
            <PlantItem />
        </div>
    );
}

export default PlantList;
