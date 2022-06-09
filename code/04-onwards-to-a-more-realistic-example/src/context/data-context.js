import React, { useState } from 'react';

const DataContext = React.createContext({
    loading: false,
    error: false,
    tasks: []
});

export function DataContextProvider(props) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [tasks, setTasks] = useState([]);

    function loadingStateHandler(isLoading) {
        setLoading(isLoading);
    }

    function errorHandler(error) {
        setError(error);
    }

    function taskHandler(newTasks) {
        setTasks(prevState => [...prevState, ...newTasks]);
    }

    return <DataContext.Provider value={{
        loading,
        error,
        tasks,
        toggleLoadingState: loadingStateHandler,
        toggleError: errorHandler,
        addTasks: taskHandler,
    }}>
        {props.children}
    </DataContext.Provider>
}

export default DataContext;