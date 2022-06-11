import React, { useContext, useEffect } from 'react';
import useFetchData from './hooks/fetch-data';

import Header from './components/Layout/Header/Header';
import Hero from './components/Layout/Hero/Hero';
import Card from './components/UI/Card/Card';
import Menu from './components/Menu/Menu';
import Modal from './components/UI/Modal/Modal';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

import CartContext from './context/cart-context';

import heroStyles from './components/Layout/Hero/Hero.module.css';

const heroImg = 'https://kylejorve.com/dist/media/images/home-hero/home-hero-1920.jpg';

function App() {
    const fetchMeals = useFetchData();
    const context = useContext(CartContext);

    useEffect(() => {
        fetchMeals();
    }, []);

	return (
        <React.Fragment>
            <Modal active={context.modalActive}>
                {
                    context.cartActive &&
                    <Cart/>
                }
                {
                    context.checkoutActive &&
                    <Checkout/>
                }
            </Modal>
            <Header title={'Eat It'} />
            <Hero imgUrl={heroImg} >
                <h2 className={heroStyles['hero__title']}>Here's Some Food. Eat it.</h2>
                <p className={heroStyles['hero__desc']}>Do you have any idea how long it takes those cups to decompose. I was part of something special. Hey, take a look at the earthlings. Goodbye! Eventually, you do plan to have dinosaurs on your dinosaur tour, right? Must go faster... go, go, go, go, go!</p>
            </Hero>
            <section>
                <div className="wrapper">
                    {!context.loading && !context.error && <Menu items={context.meals} />}
                    {
                        context.loading && !context.error &&
                        <Card>
                            <p className="loading-text">Loading...</p>
                        </Card>
                    }
                    {
                        context.error &&
                        <Card>
                            <p className="error-text">{context.error}</p>
                        </Card>
                    }
                </div>
            </section>
        </React.Fragment>
	);
}

export default App;
