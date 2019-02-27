export const UPDATE_STORE = 'UPDATE_STORE';
export const UpdateStore = message => ({type: UPDATE_STORE, payload: message});


// Creating Flash card calls
export const CREATE_FLASHCARD_REQUEST = 'CREATE_FLASHCARD_REQUEST';
export const CreateFlashCardRequest = () => ({type: CREATE_FLASHCARD_REQUEST});

export const CREATE_FLASHCARD_SUCCESS = 'CREATE_FLASHCARD_SUCCESS';
export const CreateFlashCardSuccess = () => ({type: CREATE_FLASHCARD_SUCCESS});

export const CREATE_FLASHCARD_FAILURE = 'CREATE_FLASHCARD_FAILURE';
// payload error: string
export const CreateFlashCardFailure = (error) => ({type: CREATE_FLASHCARD_FAILURE, payload: error});

export const CREATE_FLASHCARD_CLEAR_STATE = 'CREATE_FLASHCARD_CLEAR_STATE';
// payload error: string
export const CreateFlashCardClearState = () => ({type: CREATE_FLASHCARD_CLEAR_STATE});

export const ADD_FLASHCARD_TO_STORE = 'ADD_FLASHCARD_TO_STORE';
// payload interface {question: string; answer: string}
export const AddFlashCardToStore = flashcard => ({type: ADD_FLASHCARD_TO_STORE, payload: flashcard});

export const ADD_FLASHCARDS_TO_STORE = 'ADD_FLASHCARDS_TO_STORE';
// payload interface Array<{question: string; answer: string}>
export const AddFlashCardsToStore = flashcards => ({type: ADD_FLASHCARDS_TO_STORE, payload: flashcards});


// Initializing App Calls
export const INITIALIZE_APP_REQUEST = 'INITIALIZE_APP_REQUEST';
export const InitializeAppRequest = () => ({type: INITIALIZE_APP_REQUEST});

export const INITIALIZE_APP_SUCCESS = 'INITIALIZE_APP_SUCCESS';
export const InitializeAppSuccess = () => ({type: INITIALIZE_APP_SUCCESS});

export const INITIALIZE_APP_FAILURE = 'INITIALIZE_APP_FAILURE';
// payload error: string
export const InitializeAppFailure = (error) => ({type: INITIALIZE_APP_FAILURE, payload: error});