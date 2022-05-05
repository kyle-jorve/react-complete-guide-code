import React, { useState } from 'react';

const CartContext = React.createContext({
    selectedMeals: [],
    totalMeals: 0,
    totalCost: 0,
    cartActive: false,
    cartButtonActive: false,
    selectMeal: () => {},
    openCart: () => {},
    closeCart: () => {}
});
let buttonTimer;

export function CartContextProvider(props) {
    const [selectedMeals, setSelectedMeals] = useState([]);
    const [cartActive, setCartActive] = useState(false);
    const [totalMeals, setTotalMeals] = useState(0);
    const [totalCost, setTotalCost] = useState('0.00');
    const [cartButtonActive, setCartButtonActive] = useState(false);

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
        
        setTotalMeals(prevState => prevState += meal.amount);

        setTotalCost(prevState => Math.abs((parseFloat(prevState) + (meal.price * meal.amount))).toFixed(2));
    }

    function openCartHandler() {
        setCartActive(true);
    }
    
    function closeCartHandler() {
        setCartActive(false);
    }

    return (
        <CartContext.Provider value={{
            selectedMeals,
            totalMeals,
            totalCost,
            cartActive,
            cartButtonActive,
            selectMeal: selectMealHandler,
            openCart: openCartHandler,
            closeCart: closeCartHandler
        }}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartContext;