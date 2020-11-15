import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import img9 from '../images/img-9.jpg'
import img2 from '../images/img-2.jpg'
import img3 from '../images/img-3.jpg'
import img8 from '../images/img-8.jpg'
import img4 from '../images/img-4.jpg'
function Cards() {
    return (
        <div className='cards'>
            <h1>Check out there EPIC Destinations!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                            src={img9}
                            text='Explore the hidden waterfall deep inside the Amazon Jungle' 
                            label='Adventure' 
                            path='/services'
                        /> 
                        <CardItem 
                            src={img2}
                            text='Explore the beach into the sky out side the city fall in lovevs' 
                            label='Beach' 
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem 
                            src={img3}
                            text='Explore the hidden waterfall deep inside the Amazon Jungle' 
                            label='Adventure' 
                            path='/services'
                        /> 
                        <CardItem 
                            src={img8}
                            text='Explore the beach into the sky out side the city fall in lovevs' 
                            label='Beach' 
                            path='/services'
                        />
                        <CardItem 
                            src={img4}
                            text='Explore the beach into the sky out side the city fall in lovevs' 
                            label='Mystery' 
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
