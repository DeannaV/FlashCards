import { combineReducers } from 'redux';
import FlashCardReducer from './flashCardReducer';
import InitializeAppReducer from './initializeAppReducer';

const rootReducer = combineReducers({
    flashCard: FlashCardReducer,
    initializer: InitializeAppReducer
});

export default rootReducer;