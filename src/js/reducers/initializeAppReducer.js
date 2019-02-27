import {
  INITIALIZE_APP_SUCCESS,
  INITIALIZE_APP_REQUEST,
  INITIALIZE_APP_FAILURE
} from "../actions";

import { FetchState } from './flashCardReducer'; 

const initialState = {};

const initializeAppReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE_APP_REQUEST:
            return {...state, fetchState: FetchState.Pending};
        case INITIALIZE_APP_SUCCESS:
            return {...state, fetchState: FetchState.Success};
        case INITIALIZE_APP_FAILURE:
            return {...state, fetchState: FetchState.Failure};
        default:
            return state;
    }
}

export default initializeAppReducer;