import React ,{ Component} from 'react';
import './App.css';
import SearchBox from './searchBox.js' ;
import CardList from './cardList' ;
import Scroll from './scroll.js' ;
import { robo } from './robofriends' ;


class App extends Component {
  constructor(){
    super() ;
    this.state = {
      robo:[]  ,
      searchfield : '' 
    } ;
  }
  onSearchChange = (event) => {
    this.setState({searchfield : event.target.value})
    console.log(event.target.value) ;
   }

   componentDidMount(){
     fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
      return response.json() ;
     })
     .then(users =>{
       this.setState({robo : users })
     })
   }

render(){
  const filternames = this.state.robo.filter( robo => {
    return robo.name.toLowerCase().includes(this.state.searchfield.toLowerCase()) }) ;
  return (
      
    <div className='pa2 tc'>
    <h1>Robo Friends</h1>
    <SearchBox searchChange={this.onSearchChange} />
    <Scroll>
    <CardList robo={ filternames } /> 
    </Scroll>

    </div>
  ) ;
}
  

}
    
    
  



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


export default App;
