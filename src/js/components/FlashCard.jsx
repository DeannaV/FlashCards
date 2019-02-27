import React from 'react';
import PropTypes from 'prop-types';
import FlashCardQuestion from './FlashCardQuestion';
import FlashCardAnswer from './FlashCardAnswer';

export default class FlashCard extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            showAnswer: false
        }
    }

    toggleShowAnswer = () => {
        this.setState({showAnswer: !this.state.showAnswer});
    }

    render() {
        const showHideText = this.state.showAnswer ? 'Hide' : 'Show';
        return (
            <div className="pb-2">
                <div className="d-flex justify-content-between">
                    <FlashCardQuestion question={this.props.question}/>
                    <button className="btn btn-link" onClick={this.toggleShowAnswer}>{showHideText}</button>
                </div>
                <div className="mb-4 text-muted">
                    {this.state.showAnswer ? <FlashCardAnswer answer={this.props.answer}/> : null}
                </div>
            </div>
        );
    }
}

FlashCard.propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired
}