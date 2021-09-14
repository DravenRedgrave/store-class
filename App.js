import React, {useState} from 'react';
import './main.css';
import ShopItemClass from './ShopItemClass';

function App() {

    const item = {
        brand: 'Tiger of Sweden',
        title: 'Leonard coat',
        description: 'Minimalistic coat in cotton-blend',
        descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concea' +
                'led front closure and single back vent. Slim fit with clean, straight shape. Abo' +
                've-knee length.',
        price: 399,
        currency: '£'
    }

    return (
        <div className="container">
            <div className="background-element"></div>
            <div className="highlight-window">
                <div className='highlight-overlay'></div>
            </div>
            <div className="window">
                <ShopItemClass item={item}/>
            </div>
        </div>
    );
}

export default App;
