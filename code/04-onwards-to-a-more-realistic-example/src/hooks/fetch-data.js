import { useContext } from 'react';

import DataContext from '../context/data-context';

const api = 'https://react-udemy-course-c204b-default-rtdb.firebaseio.com/tasks.json'

function useFetchData() {
    const context = useContext(DataContext);

    function fetchData(
        options = {},
        errorMessage = 'Something went wrong 🙁'
    ) {
        context.toggleLoadingState(true);
        context.toggleError(false);

        fetch(api, options)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`${res.status} ${res.statusText}`);
                }

                return res.json();
            })
            .then(data => {
                let tasks = [];

                if (options?.method === 'POST') {
                    const task = {
                        id: data.name,
                        text: JSON.parse(options.body).text
                    };
                    
                    context.addTasks([task]);

                    return;
                }

                for (let key in data) {
                    tasks.push({
                        id: key,
                        text: data[key].text
                    });
                }

                context.addTasks(tasks);
            })
            .catch(err => {
                console.error(err);
                context.toggleError(errorMessage);
            })
            .finally(() => {
                context.toggleLoadingState(false);
            });
    }

    return fetchData;
}

export default useFetchData;