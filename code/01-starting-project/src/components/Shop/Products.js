import ProductItem from './ProductItem';
import classes from './Products.module.css';

const prods = [
  {
    id: 'p1',
    price: 12,
    title: 'Some Stupid Product',
    description: 'A very fine product for dumb weasel people.'
  },
  {
    id: 'p2',
    price: 18,
    title: 'Even Dumber, Honestly',
    description: `If you buy this you're a fucking tool.`
  },
  {
    id: 'p3',
    price: 6,
    title: 'I Can Keep Going',
    description: 'Why are you still reading?!'
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {
          prods.map(prod => {
            return (
              <ProductItem
                key={prod.id}
                id={prod.id}
                title={prod.title}
                price={prod.price}
                description={prod.description}
              />
            )
          })
        }
      </ul>
    </section>
  );
};

export default Products;
