import { createSlice, configureStore } from '@reduxjs/toolkit';

/*
item = {
    id: number/string,
    amount: number,
    price: number,
    title: string,
    description: string,
}
*/

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        shown: false,
        items: [],
        notification: null,
        changed: false
    },
    reducers: {
        toggle(state) {
            state.shown = !state.shown;
        },
        updateItems(state, action) {
            const existingItem = state.items.find(item => item.id === action.payload.id);

            state.changed = true;

            if (existingItem) {
                existingItem.amount = existingItem.amount + action.payload.amount;
            }
            else {
                state.items.push(action.payload);
            }

            state.items = state.items.filter(item => item.amount > 0);
        },
        setNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            }
        }
    }
});
const store = configureStore({
    reducer: cartSlice.reducer
});
const cartActions = cartSlice.actions;
const api = 'https://react-udemy-course-c204b-default-rtdb.firebaseio.com/cart.json';

function sendCartData(cart) {
    if (!cart) return;

    return dispatch => {
        dispatch(cartActions.setNotification({
            status: 'pending',
            title: 'Sending',
            message: 'Sending cart data...'
        }));

        fetch(api, {
            method: 'PUT',
            body: JSON.stringify(cart),
          })
            .then(res => {
              if (!res.ok) {
                throw new Error(`${res.status} ${res.statusText}`);
              }
      
              return res.json();
            })
            .then(data => {      
              dispatch(cartActions.setNotification({
                status: 'success',
                title: 'Success!',
                message: 'Cart data sent successfully'
              }));
            })
            .catch(err => {
                console.log(err);
        
                dispatch(cartActions.setNotification({
                    status: 'error',
                    title: 'Error',
                    message: 'Sending cart data failed 🙁'
                }));
            });
    }
}

function getCartData() {
    return dispatch => {
        dispatch(cartActions.setNotification({
            status: 'pending',
            title: 'Getting',
            message: 'Getting cart data...'
        }));

        fetch(api)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`${res.status} ${res.statusText}`);
                  }
          
                  return res.json();
            })
            .then(data => {
                if (!data) data = []

                data.forEach(d => dispatch(cartActions.updateItems(d)));
      
                dispatch(cartActions.setNotification({
                    status: 'success',
                    title: 'Success!',
                    message: 'Cart data pulled successfully'
                }));
            })
            .catch(err => {
                console.log(err);
        
                dispatch(cartActions.setNotification({
                    status: 'error',
                    title: 'Error',
                    message: 'Getting cart data failed 🙁'
                }));
            });
    }
}

export {cartActions, sendCartData, getCartData};
export default store;