import { useContext } from 'react';

import CartContext from '../context/cart-context';

const mealsAPI = 'https://react-udemy-course-c204b-default-rtdb.firebaseio.com/meals.json';
const ordersAPI = 'https://react-udemy-course-c204b-default-rtdb.firebaseio.com/orders.json';

function useFetchData(orders = false) {
    const context = useContext(CartContext);

    function fetchData(options = {}, errorMessage = 'Something went wrong 🙁') {
        if (!orders) {
            context.setLoading(true);
        }
        context.setError(false);

        fetch(orders ? ordersAPI : mealsAPI, options)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`${res.stats} ${res.statusText}`);
                }

                return res.json();
            })
            .then(data => {
                let meals = [];

                if (options?.method === 'POST') {
                    console.log(data);

                    return;
                }

                for (let key in data) {
                    meals.push({
                        id: key,
                        title: data[key].title,
                        description: data[key].description,
                        price: data[key].price,
                    });
                }

                context.setMeals(meals);
            })
            .catch(err => {
                console.log(err);
                context.setError(errorMessage);
            })
            .finally(() => context.setLoading(false));
    }

    return fetchData;
}

export default useFetchData;