import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FlashCard from './FlashCard';

class FlashCardView extends React.PureComponent {
    render() {
        console.log('My props', this.props);
        return (
        <div>
            {this.props.flashCard != null ? (
                <FlashCard question={this.props.flashCard.question} answer={this.props.flashCard.answer} key={this.props.flashCard.id}/>
            ) : null}
        </div>
        );
    }
}

FlashCardView.propType = {
    flashcard: PropTypes.object
}

const mapStateToProps = (state, props) => {
    return {
      flashCard: state.flashCard.flashCards[props.match.params.id]
    }
}

const FlashCardViewConnected = connect(mapStateToProps, {})(FlashCardView);

export default FlashCardViewConnected;