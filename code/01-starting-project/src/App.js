import React from 'react';

import Header from './components/Layout/Header/Header';
import Hero from './components/Layout/Hero/Hero';
import Menu from './components/Menu/Menu';

const meals = [
    {
        title: 'Sushi',
        description: `Some raw fish or something. Just fucking eat it.`,
        price: 22.99
    },
    {
        title: 'Schnitzel',
        description: `A big fat sausage. Choke on it.`,
        price: 16.5
    },
    {
        title: 'Barbeque Burger',
        description: `An American treat. It's pretty big. Don't be scared.`,
        price: 12.99
    },
    {
        title: 'Salad Bowl',
        description: `If you're a pussy.`,
        price: 18.99
    },
];

function App() {
    const heroImg = 'https://kylejorve.com/dist/media/images/home-hero/home-hero-1920.jpg'
    const heroContent = `
        <h2>Here's Some Food. Eat it.</h2>
        <p>Do you have any idea how long it takes those cups to decompose. I was part of something special. Hey, take a look at the earthlings. Goodbye! Eventually, you do plan to have dinosaurs on your dinosaur tour, right? Must go faster... go, go, go, go, go!</p>`;

	return (
        <React.Fragment>
            <Header title={'ReactMeals'} />
            <Hero
                imgUrl={heroImg}
                content={heroContent} />
            <Menu items={meals} />
        </React.Fragment>
	);
}

export default App;
