import {
    CREATE_FLASHCARD_REQUEST,
    ADD_FLASHCARD_TO_STORE,
    CREATE_FLASHCARD_CLEAR_STATE,
    CREATE_FLASHCARD_SUCCESS,
    ADD_FLASHCARDS_TO_STORE,
    CREATE_FLASHCARD_FAILURE
} from "../actions";

export const FetchState = Object.freeze({Pending: 0, Success: 1, Failure: 2});

const flashCardState = {
    flashCards: []
};

const flashCardReducer = (state = flashCardState, action) => {
    switch (action.type) {
        case CREATE_FLASHCARD_REQUEST:
            return {...state, fetchState: FetchState.Pending};
        case CREATE_FLASHCARD_SUCCESS:
            return {...state, fetchState: FetchState.Success};
        case CREATE_FLASHCARD_FAILURE:
            return {...state, fetchState: FetchState.Failure};
        case CREATE_FLASHCARD_CLEAR_STATE:
            return {...state, fetchState: undefined};
        case ADD_FLASHCARD_TO_STORE:
            {
                const flashCards = [...state.flashCards];
                flashCards.push(action.payload);
                return {...state, flashCards};
            }
        case ADD_FLASHCARDS_TO_STORE:
            {    
                const flashCards = [...state.flashCards, ...action.payload];
                return {...state, flashCards};
            }
        default:
            return state;
    }
}

export default flashCardReducer;