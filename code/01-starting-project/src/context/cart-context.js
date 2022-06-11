import React, { useState } from 'react';

const CartContext = React.createContext({
    selectedMeals: [],
    totalMeals: 0,
    totalCost: 0,
    modalActive: false,
    cartButtonActive: false,
    selectMeal: () => {},
    openModal: () => {},
    closeModal: () => {}
});
let buttonTimer;

export function CartContextProvider(props) {
    const [selectedMeals, setSelectedMeals] = useState([]);
    const [cartActive, setCartActive] = useState(false);
    const [checkoutActive, setCheckoutActive] = useState(false);
    const [totalCost, setTotalCost] = useState('0.00');
    const [cartButtonActive, setCartButtonActive] = useState(false);
    const [error, setError] = useState(false);
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(false);
    const modalActive = cartActive || checkoutActive;
    const totalMeals = selectedMeals.reduce((prev, cur) => {
        const val = prev + cur.amount;

        return val;
    }, 0);

    function selectMealHandler(meal) {
        /*
            meal = {
                title: string,
                id: string,
                amount: positive or negative integer; amount to add or subtract,
                price: number; price of a single meal
            }
        */

        setCartButtonActive(prevState => {
            if (prevState) {
                clearTimeout(buttonTimer);
            }

            buttonTimer = setTimeout(() => {
                setCartButtonActive(false);
            }, 300);

            return true;
        })
       
        setSelectedMeals(prevState => {
            let mealAlreadySelected = prevState.some(m => m.id === meal.id);
            let existingMealIndex = mealAlreadySelected ? prevState.findIndex(m => m.id === meal.id) : null;
            let returnArr = prevState;

            if (mealAlreadySelected) {
                returnArr[existingMealIndex].amount += meal.amount;
            }
            else {
                returnArr = [...returnArr, meal]
            }

            returnArr = returnArr.filter(item => item.amount > 0);

            return returnArr;
        });

        setTotalCost(prevState => Math.abs((parseFloat(prevState) + (meal.price * meal.amount))).toFixed(2));
    }

    function openModalHandler() {
        setCartActive(true);
        setCheckoutActive(false);
    }
    
    function closeModalHandler() {
        setCartActive(false);
        setCheckoutActive(false);
    }

    function openCheckoutHandler() {
        setCartActive(false);
        setCheckoutActive(true);
    }
    
    function closeCheckoutHandler() {
        setCartActive(true);
        setCheckoutActive(false);
    }

    return (
        <CartContext.Provider value={{
            selectedMeals,
            totalMeals,
            totalCost,
            cartActive,
            checkoutActive,
            modalActive,
            cartButtonActive,
            error,
            meals,
            loading,
            selectMeal: selectMealHandler,
            setSelectedMeals,
            openModal: openModalHandler,
            closeModal: closeModalHandler,
            openCheckout: openCheckoutHandler,
            closeCheckout: closeCheckoutHandler,
            setError,
            setMeals,
            setLoading
        }}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartContext;