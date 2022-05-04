import React, { useState } from 'react';

const CartContext = React.createContext({
    selectedMeals: [],
    setSelectedMeals: () => {}
});

export function CartContextProvider(props) {
    const [selectedMeals, setSelectedMeals] = useState([]);

    return (
        <CartContext.Provider value={{
            selectedMeals,
            setSelectedMeals
        }}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartContext;