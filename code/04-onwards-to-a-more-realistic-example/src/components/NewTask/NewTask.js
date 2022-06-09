import { useContext } from 'react';

import Section from '../UI/Section';
import TaskForm from './TaskForm';
import DataContext from '../../context/data-context';
import useFetchData from '../../hooks/fetch-data';

const NewTask = () => {
  const context = useContext(DataContext);
  const fetchData = useFetchData();

  const enterTaskHandler = (taskText) => {
    fetchData(
      {
        method: 'POST',
        body: JSON.stringify({ text: taskText }),
        headers: {
          'Content-Type': 'application/json',
        },
      },
      'Request failed!'
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={context.loading} />
      {context.error && <p>{context.error}</p>}
    </Section>
  );
};

export default NewTask;
