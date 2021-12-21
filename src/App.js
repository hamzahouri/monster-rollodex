import React,{Component} from 'react'
import './App.css'
import CardList from './components/card-list/card-list'
import SearchBox from './components/search-box/search-box'

class App extends Component {

  state= {
   student : [ ],
   searchField : ''
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
    .then(y => this.setState({student : y})); 
    console.log(this.state.student);
  }
 
  render () {
   const {student, searchField}= this.state;
   const filtredStudent= student.filter(x=> x.name.toLowerCase().includes(searchField.toLocaleLowerCase()))
   
  
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
         <SearchBox
          placeholder='search monster'
          handleChange={e=> 
         this.setState({searchField : e.target.value})}/>
         
        <CardList name={filtredStudent} />
      
      </div>
    );
  }
 
}

export default App;
