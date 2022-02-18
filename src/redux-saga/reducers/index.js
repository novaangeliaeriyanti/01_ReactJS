import { combineReducers } from "redux";
import BootcampReducer from "./CampDetailReducer";

const rootReducer = combineReducers({
    bootcampState : BootcampReducer
})

export default rootReducer