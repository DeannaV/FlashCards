import React from 'react';
import { connect } from 'react-redux';
import { UpdateStore } from '../actions';

class MessageComponent extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: props.message
        }
    }

    onChange = (event) => {
        this.setState({value: event.target.value});
    }

    onClick = (event) => {
        event.preventDefault();
        this.props.setMessage(this.state.value);
    }

    render() {
        return (
            <div className="col-8">
                <h1>Store Message</h1>
                <h2>{this.props.message}</h2>
                <form>
                    <div className="form-group col-auto">
                        <label htmlFor="messageInput">New Message</label>
                        <input
                            type="text"
                            id="messageInput"
                            className="form-control"
                            value={this.state.value}
                            onChange={this.onChange}
                        />
                    </div>
                    <button className="btn btn-primary" role="button" onClick={this.onClick}>Update</button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setMessage: message => dispatch(UpdateStore(message))
    }
}

const mapStateToProps = state => {
    return {
      message: state.message
    }
}

const ConnectedMessageComponent = connect(mapStateToProps, mapDispatchToProps)(MessageComponent);

export default ConnectedMessageComponent;