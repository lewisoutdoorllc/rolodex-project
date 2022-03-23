import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  // 1: constructor runs first always in any class
  constructor() {
    super();
    // 2: the constructor is used to initialize the state
    this.state = {
      monsters: [],
      searchField: '',
    }
  }
  // 4: componentDidMount runs after the render function
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(monsters => this.setState({ monsters }))
      .catch(err => console.log(err));
  }

  onSearchChange = (event) => {
    // making a search variable to lowercase the search string to help with case sensitivity
    const searchField = event.target.value.toLocaleLowerCase();
    // then we are going to set the state to the filtered monsters
    this.setState(() => {
      return { searchField }
    }
    )
  }
  // 3: render runs after the constructor sets the state for the first time
  // 5: after componentDidMount runs, the render function is called again to reflect the changes that were made in the state
  render() {
    const { monsters, searchField } = this.state
    const { onSearchChange } = this;
    // making a new variable to filter thru the monsters array 
    const filteredMonsters = monsters.filter((monster) => {
      // then we are going to check if the monster name includes the value of the search box
      return monster.name.toLocaleLowerCase().includes(searchField);
    })

    return (
      <div className='App'>
        {/* SEARCH INPUT FIELD */}
        <SearchBox
          className='search-box'
          onChangeHandler={onSearchChange}
          placeholder='Search Monsters' />
        {/* CARD LIST */}
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
