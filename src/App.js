import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}));
  }

  onSearchChange = (e) => {
    this.setState({searchField: e.target.value});
  }

  render() {
    /*
      The two constants below in curly brackets, ie. monsters and searchField, MUST have the same spelling
      as the names of the states, otherwise it will return an error

      UPDATE: only if using it like so --> const { monsters, searchField } = this.state; <-- similar to shorthand notation I guess

      Otherwise, can do it this way:

      const monszters = this.state.monsters;
      const szearchField = this.state.searchField;

      Then reference that in the subsequent code like so:
      const filteredMonsters = monszters.filter(monster => monster.name.toLowerCase().includes(szearchField.toLowerCase().trim()));

    */

    const { searchField, monsters } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase().trim()));

    /*
    console.log("searchField: " + searchField);
    console.log(filteredMonsters);
    */

    return (
      <div className="App">
        {/*
          To check if value of searchField in state is properly updated, can log value to console but have to
          pass in a callback function in the second parameter of the onChange

        <input type='search' placeholder='Search Monsters' onChange={e => this.setState({searchField: e.target.value}, 
            () => console.log(this.state))} />

        -- before input was made into its own component...
        <input type='search' placeholder='Search Monsters' onChange={e => this.setState({searchField: e.target.value})} />

          <SearchBox
            placeholder='Search Monsters'
            handleChange={e => this.setState({searchField: e.target.value})}
          />
        */}
        <h1> Monsters Rolodex </h1>
        <SearchBox
          placeholder='Search Monsters'
          onSearchChange={this.onSearchChange}
        />
        
        {/*
          The original CardList...
          <CardList monsterz={this.state.monsters} />
        */}
        
        <CardList monsterz={filteredMonsters} />
      </div>
    );
  }
}

export default App;
