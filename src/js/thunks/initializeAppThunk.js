import {
    AddFlashCardsToStore,
    InitializeAppRequest,
    InitializeAppSuccess
} from '../actions';

export function initializeApp() {
    const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
    return function (dispatch) {
        dispatch(InitializeAppRequest());
        wait(3000).then(() =>{
            dispatch(AddFlashCardsToStore(flashCards));
            dispatch(InitializeAppSuccess());
        });
    }
}

const flashCards = [
    {
        id: 1,
        question: "What are the five http status groups?",
        answer: "Informational, Successful, Redirection, Client Error, Server Error."
    },
    {
        id: 2,
        question: "What is the command for inserting a new customer into the customer table of a database?",
        answer: "INSERT INTO customer (id, name) VALUES (1, 'Marcus Buyer')."
    },
    {
        id: 3,
        question: "How do you build a docker image tagged myImage in the current folder?",
        answer: "docker build -t myImage ."
    },
    {
        id: 4,
        question: "Run a docker container from the image nginx. Name it webhost, run as detatched and bind port 1234 of the host machine to port 80 on the container.",
        answer: "docker run -p 1234:80 -d --name webhost nginx"
    },
    {
        id: 5,
        question: "What does Object.freeze() do?",
        answer: "The Object.freeze() method freezes an object. A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties, and prevents the values of existing properties from being changed. In addition, freezing an object also prevents its prototype from being changed. freeze() returns the same object that was passed in."
    },
    {
        id: 6,
        question: "How should an article element be used?",
        answer: "The HTML article element represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable (e.g., in syndication). Examples include: a forum post, a magazine or newspaper article, or a blog entry."
    },
    {
        id: 7,
        question: "What is Chrome's browser engine and javascript engine?",
        answer: "Blink and Chrome V8."
    },
    {
        id: 8,
        question: "What does Safari use for its browser engine and javascript engine?",
        answer: "Webkit and Nitro"
    }
];