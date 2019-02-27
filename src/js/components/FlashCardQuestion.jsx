import React from 'react';
import PropTypes from 'prop-types';

export default class FlashCardQuestion extends React.PureComponent {
    render() {
        return (<div>
            {this.props.question}
        </div>)
    }
}

FlashCardQuestion.propTypes = {
    question: PropTypes.string.isRequired
}