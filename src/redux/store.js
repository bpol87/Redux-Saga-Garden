import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { takeLatest, put } from "redux-saga/effects";
import axios from "axios";

function* rootSaga() {
  yield takeLatest('FETCH_PLANTS', fetchPlants)
  yield takeLatest('REMOVE_PLANT', removePlant)
  yield takeLatest('ADD_PLANT', addPlant)
}

function* fetchPlants() {
  try {
    const allPlants = yield axios.get('/api/plants')
    console.log('allplants is:', allPlants)
    yield put({ type: "SET_PLANTS", payload: allPlants.data });
  } catch (err) {
    console.log("error fetching plants:", err);
  }
}
function* addPlant (action) {
  try {
    console.log(action.payload)
    yield axios.post('/api/plants', action.payload)
    yield put({type: 'FETCH_PLANTS'})
  } catch (error) {
    console.log('error adding plant:', error)
  }
}

function* removePlant (action) {
  try {
    yield axios.delete(`/api/plants/${action.payload}`)
    yield put({type: 'FETCH_PLANTS'})
  } catch (error) {
    console.log('error removing plant:', error)
  }
}


const sagaMiddleware = createSagaMiddleware();

const plantList = (state = [], action) => {
  switch (action.type) {
    case "SET_PLANTS":
      let allThePlants = action.payload;
      console.log(allThePlants);
      return allThePlants;
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    plantList,
  }),
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

export default store;
