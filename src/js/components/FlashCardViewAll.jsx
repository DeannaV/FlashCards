import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FlashCard from './FlashCard';

class FlashCardViewer extends React.PureComponent {
    render() {
        console.log('My props', this.props);
        return (
        <div>
            {this.props.flashCards.map(f => (<FlashCard question={f.question} answer={f.answer} key={f.id}/>))}
        </div>
        );
    }
}

FlashCardViewer.propTypes = {
    flashCards: PropTypes.array.isRequired
}

const mapStateToProps = state => {
    console.log('Flashcardviewer map state to props', state);
    return {
      flashCards: state.flashCard.flashCards
    }
}

const FlashCardViewerConnected = connect(mapStateToProps, {})(FlashCardViewer);

export default FlashCardViewerConnected;