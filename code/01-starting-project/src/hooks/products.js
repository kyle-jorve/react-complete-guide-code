import { initStore } from "./store";

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

function configureStore() {
    const actions = {
        TOGGLE_FAV: (curState, id) => {
            const prods = curState.products.slice();
            const thisProd = prods[curState.products.findIndex(p => p.id === id)];

            thisProd.isFavorite = !thisProd.isFavorite;

            return {
                products: prods
            }
        }
    };

    initStore(actions, {
        products: demoProducts
    });
}

export default configureStore;