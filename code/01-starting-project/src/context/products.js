import React, { useState } from 'react';

const demoProducts = [
    {
        id: 'p1',
        title: 'Red Scarf',
        description: 'A pretty red scarf.',
        isFavorite: false
    },
    {
        id: 'p2',
        title: 'Blue T-Shirt',
        description: 'A pretty blue t-shirt.',
        isFavorite: false
    },
    {
        id: 'p3',
        title: 'Green Trousers',
        description: 'A pair of lightly green trousers.',
        isFavorite: false
    },
    {
        id: 'p4',
        title: 'Orange Hat',
        description: 'Street style! An orange hat.',
        isFavorite: false
    }
];

export const ProductsContext = React.createContext({
    products: demoProducts,
    toggleFavorite: (id) => {}
});

export default props => {
    const [products, setProducts] = useState(demoProducts);

    function toggleFavorite(id) {
        setProducts(prev => {
            const prods = prev.slice();
            const thisProd = prods[prev.findIndex(p => p.id === id)];

            thisProd.isFavorite = !thisProd.isFavorite;

            return prods;
        });
    }

    return (
        <ProductsContext.Provider value={{
            products: products,
            toggleFavorite
        }}>
            {props.children}
        </ProductsContext.Provider>
    )
}