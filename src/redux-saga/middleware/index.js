import { takeEvery, all } from 'redux-saga/effects';
import * as ActionTypeBootcamp from '../constants/CampDetailConstant'
import { handleGetBootcamp } from './CampDetailSaga'

function *watchAll(){
    yield all([
        takeEvery(ActionTypeBootcamp.GET_BOOTCAMP_REQUEST,handleGetBootcamp),
    ])
}

export default watchAll;