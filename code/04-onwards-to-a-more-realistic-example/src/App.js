import React, { useEffect, useContext } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import DataContext from './context/data-context';
import useFetchData from './hooks/fetch-data';

function App() {
  const context = useContext(DataContext);
  const fetchData = useFetchData();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <NewTask />
      <Tasks
        items={context.tasks}
        loading={context.loading}
        error={context.error}
        onFetch={fetchData}
      />
    </React.Fragment>
  );
}

export default App;
