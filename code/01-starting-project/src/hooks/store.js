import { useState, useEffect } from 'react';

let globalState = {};
let listeners = [];
let actions = {};

function useStore() {
    const setState = useState(globalState)[1];

    function dispatch(action, payload) {
        const newState = actions[action](globalState, payload);

        globalState = {
            ...globalState,
            ...newState
        };

        for (let listener of listeners) {
            listener(globalState);
        }
    }

    useEffect(() => {
        listeners.push(setState);

        return () => (listeners = listeners.filter(li => li !== setState));
    }, [setState]);

    return [globalState, dispatch];
}

export function initStore(userActions, initialState) {
    if (!initialState) return;

    globalState = {
        ...globalState,
        ...initialState
    };

    actions = {
        ...actions,
        ...userActions
    };
}

export default useStore;