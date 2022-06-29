import React from 'react';
import Transition from 'react-transition-group/Transition';
import CSSTransition from 'react-transition-group/CSSTransition';

import './Modal.css';

const animationTiming = {
    enter: 400,
    exit: 1000
};

const modal = (props) => {
    // const cssClasses = ['Modal', props.show ? 'Modal--open' : 'Modal--closed'];
    // const cssClasses = [
    //     'Modal',
    //     props.show === 'entering' ?
    //         'Modal--open' :
    //         props.show === 'exiting' ?
    //         'Modal--closed' :
    //         null
    // ];

    return (
        <CSSTransition
          in={props.show}
          timeout={animationTiming}
          mountOnEnter
          unmountOnExit
        //   classNames="Modal--animate"
            classNames={{
                enter:  '',
                enterActive: 'Modal--open',
                exit: '',
                exitActive: 'Modal--closed',
                appear: '',
                appearActive: ''
            }}
        >
            <div className="Modal">
                <h1>A Modal</h1>
                <button className="Button" onClick={props.closed}>Dismiss</button>
            </div>
        </CSSTransition>
        // <Transition
        //   in={props.show}
        //   timeout={animationTiming}
        //   mountOnEnter
        //   unmountOnExit
        //   onEnter={() => console.log('enter')}
        //   onEntering={() => console.log('entering')}
        //   onEntered={() => console.log('entered')}
        //   onExit={() => console.log('exit')}
        //   onExiting={() => console.log('exiting')}
        //   onExited={() => console.log('exited')}
        // >
        //   {state => {
        //     const cssClasses = [
        //         'Modal',
        //         state === 'entering' ?
        //         'Modal--open' :
        //         state === 'exiting' ?
        //         'Modal--closed' :
        //         null
        //     ];

        //     return (
        //         <div className={cssClasses.join(' ')}>
        //             <h1>A Modal</h1>
        //             <button className="Button" onClick={props.closed}>Dismiss</button>
        //         </div>
        //     );
        //   }}
        // </Transition>
    );
};

export default modal;