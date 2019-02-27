import React from 'react';
import PropTypes from 'prop-types';

export default class FlashCardAnswer extends React.PureComponent {
    render() {
        return (<div>
            {this.props.answer}
        </div>)
    }
}

FlashCardAnswer.propTypes = {
    answer: PropTypes.string.isRequired
}