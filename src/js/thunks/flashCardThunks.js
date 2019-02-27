import {
    CreateFlashCardRequest,
    CreateFlashCardSuccess,
    AddFlashCardToStore
} from '../actions';

export function createFlashCard(flashCard) {
    const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
    return function (dispatch) {
        dispatch(CreateFlashCardRequest());
        wait(3000).then(() =>{
            dispatch(AddFlashCardToStore(flashCard));
            dispatch(CreateFlashCardSuccess());
        });
    }
}
