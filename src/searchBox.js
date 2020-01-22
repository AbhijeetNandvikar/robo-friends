import React from 'react' ;
const SearchBox = ({searchfield , searchChange}) => {
    return(
        <input
        className='pa3 ba b--green bg-lightest-blue b tc ' 
        type='search'
        placeholder='search names' 
        onChange={searchChange} />
        
    );
}
 export default SearchBox ; 