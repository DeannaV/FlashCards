import React from 'react';

import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';

import { connect } from 'react-redux';
import { createFlashCard } from '../thunks/flashCardThunks';
import { FetchState } from '../reducers/flashCardReducer';
import './AddFlashCard.css';

class AddFlashCard extends React.Component {
    state = {
        question: "",
        answer: ""
    }

    onChangeQuestion = (e) => {
        this.setState({question: e.target.value});
    }

    onChangeAnswer = (e) => {
        this.setState({answer: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.createFlashCardThunk({question: this.state.question, answer: this.state.answer});
    }

    render() {
        return (
            <div>
                {this.props.fetchState === FetchState.Success ? <div className="alert alert-success">Successfully added new flashcard.</div> : null}
                {this.props.fetchState === FetchState.Failure ? <div className="alert alert-danger">Failed to save flashcard.</div> : null}
                <h2>Add Flashcard</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="question">Question</label>
                        <input
                            className="form-control"
                            id="question"
                            value={this.state.question}
                            onChange={this.onChangeQuestion}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="answer">Answer</label>
                        <input
                            className="form-control"
                            id="answer"
                            value={this.state.answer}
                            onChange={this.onChangeAnswer}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Create
                    </button>
                    {this.props.fetchState === FetchState.Pending ? <ReactLoading type="spinningBubbles" color="#007bff" width={30} height={30} className="loading"/> : null}
                </form>
            </div>
        );
    }
}

AddFlashCard.propTypes = {
    fetchState: PropTypes.number,
    createFlashCardThunk: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        fetchState: state.flashCard.fetchState
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createFlashCardThunk: flashCard => dispatch(createFlashCard(flashCard))
    }
}

const AddFlashCardConnected = connect(() => (mapStateToProps), mapDispatchToProps)(AddFlashCard);

export default AddFlashCardConnected;