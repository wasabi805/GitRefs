import { combineReducers } from "redux";
import navigationReducer from "./navigation-reducer";
import heroReducer from './hero-reducer';
import cardsReducer from "./cards-reducer"

export default combineReducers({
  navigationReducer: navigationReducer,
  heroReducer : heroReducer,
  cardsReducer: cardsReducer
});
