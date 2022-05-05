import React, { useContext } from 'react';

import Header from './components/Layout/Header/Header';
import Hero from './components/Layout/Hero/Hero';
import Menu from './components/Menu/Menu';
import Modal from './components/UI/Modal/Modal';
import CartContext from './context/cart-context';

import heroStyles from './components/Layout/Hero/Hero.module.css';

const meals = [
    {
        title: 'Sushi',
        id: 'sushi',
        description: `Some raw fish or something. Just fucking eat it.`,
        price: 22.99
    },
    {
        title: 'Schnitzel',
        id: 'schnitzel',
        description: `A big fat sausage. Choke on it.`,
        price: 16.5
    },
    {
        title: 'Barbeque Burger',
        id: 'bbq-burger',
        description: `An American treat. It's pretty big. Don't be scared.`,
        price: 12.99
    },
    {
        title: 'Salad Bowl',
        id: 'salad-bowl',
        description: `If you're a little girly-man.`,
        price: 18.99
    },
];
const heroImg = 'https://kylejorve.com/dist/media/images/home-hero/home-hero-1920.jpg';

function App() {
    const context = useContext(CartContext);

	return (
        <React.Fragment>
            <Modal title={'Total Amount'} active={context.cartActive}></Modal>
            <Header title={'Eat It'} />
            <Hero imgUrl={heroImg} >
                <h2 className={heroStyles['hero__title']}>Here's Some Food. Eat it.</h2>
                <p className={heroStyles['hero__desc']}>Do you have any idea how long it takes those cups to decompose. I was part of something special. Hey, take a look at the earthlings. Goodbye! Eventually, you do plan to have dinosaurs on your dinosaur tour, right? Must go faster... go, go, go, go, go!</p>
            </Hero>
            <section>
                <Menu items={meals} />
            </section>
        </React.Fragment>
	);
}

export default App;
