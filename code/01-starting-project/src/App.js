import React, { Component } from "react";
import Transition from 'react-transition-group/Transition';

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    modalIsShown: false,
    showBlock: false
  };

  showModal = () => {
    this.setState({
      modalIsShown: true
    });
  }
  
  closeModal = () => {
    this.setState({
      modalIsShown: false
    });
  }

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <div style={{
          marginBottom: '16px'
        }}>
          <button className="Button" onClick={() => this.setState(prevState => ({ showBlock: !prevState.showBlock }))}>Toggle Block</button>
          <Transition
            in={this.state.showBlock}
            timeout={500}
            mountOnEnter
            unmountOnExit
          >
            {state => (<div style={{
              width: 100,
              height: 100,
              margin: '16px auto',
              backgroundColor: 'lavender',
              border: '1px solid rgba(0,0,0,.3)',
              opacity: state === 'exiting' || state === 'exited' ? 0 : 1,
              transition: 'opacity .5s ease'
            }}></div>)}
          </Transition>
        </div>

        <Modal show={this.state.modalIsShown} closed={this.closeModal} />
        <Backdrop show={this.state.modalIsShown} />

        <button className="Button" onClick={this.showModal}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
