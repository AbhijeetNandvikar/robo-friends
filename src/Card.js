import React from 'react' ;
import 'tachyons' ;
const card = ({ name,desc,line}) => {
   return(
        <div className='tc bg-gray dib br3 ma2 pa3 grow shadow-5 bw-2 .glow'> 
        <img alt='meme' src={`https://robohash.org/${name}?200x200`}/>
        <div className='white' >
            <h2>{name}</h2>
            <h3>{desc}</h3>
            <h3>{line}</h3>
        </div>
        </div>
    );
}
export default card ;   