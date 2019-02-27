import React, { Component } from "react";
import {BrowserRouter, Route} from 'react-router-dom'

import PropTypes from 'prop-types';
import FlashCardViewAll from './js/components/FlashCardViewAll';
import FlashCardView from './js/components/FlashCardView';
import AddFlashCard from "./js/components/AddFlashCard";
import NavBar from "./js/components/NavBar";
import { connect } from 'react-redux';
import { initializeApp } from './js/thunks/initializeAppThunk';
import { FetchState } from './js/reducers/flashCardReducer';
import ReactLoading from 'react-loading';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (this.props.fetchState === FetchState.Failure) {
      return (<p>Sorry, there has been a problem initializing Flashcard app. Please reload.</p>)
    }

    if (this.props.fetchState == null || this.props.fetchState === FetchState.Pending) {
      return (<ReactLoading type="bars" color="#007bff" width={160} height={160} className="loading"/>)
    }

    return (
      <BrowserRouter>
        <div className="container">
          <header className="text-center">
            <h1>Flash Card App</h1>
          </header>
          <NavBar/>
          <Route path="/all" component={FlashCardViewAll}/>
          <Route path="/flashcard/:id" component={FlashCardView}/>
          <Route path="/flashcard/add" component={AddFlashCard}/>
        </div>
      </BrowserRouter>
    );
  }
} 

App.propTypes = {
  initializeApp: PropTypes.func.isRequired,
  fetchState: PropTypes.number
}

const mapStateToProps = state => {
  return {
      fetchState: state.initializer.fetchState
  }
}

const mapDispatchToProps = dispatch => {
  return {
    initializeApp: () => dispatch(initializeApp())
  }
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp;