import React from 'react' ;
import Card from './Card' ;
const CardList = ({ robo }) => {
    const cardArray = robo.map((user,i)  => {
        return <Card key={robo[i].id} name={robo[i].name} desc={robo[i].desc} line={robo[i].line} />
    });
    return(
        <div>
            {cardArray}
        </div>
    ) ;
        // <div className='bg-light-green dib br3 ma2 pa3 grow shadow-5'> 
        // <img src="https://robohash.org/test?200x200"/>
        // <div>
        //     <h2>Name</h2>
        //     <h3>Hii This is Bhau</h3>
        // </div>
        // </div>
}
export default CardList ;   