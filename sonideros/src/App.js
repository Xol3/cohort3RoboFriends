//the main component
import React, { Component } from 'react'; // destructuring and importing Component ''=from module (react library)
import CardList from './CardList'; //importing compoents
import SearchBox from './SearchBox';
import {robots} from './Robots'; //importing the array that has objects

//creating an APP class from Component
class App extends Component  {
  constructor(){ //what is used to create an instance of APP
    super() // calls on the Super constructor and returns its build
    this.state = { // this references states that the instace is in.
      // the properties of the state
      robots: robots, //references robot array
      searchfield: "" //empty string
    }
  }
  onSearchChange = (event) => {
    //find out about target.value
    //sets the current state to what we put inside the search box
    this.setState({searchfield: event.target.value})
  }
  // renders the component
  render(){
    //filtes from robots arr to only contain the objects that include the char in the str in searchfield
    const filteredRobots = this.state.robots.filter(robots =>{
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    // returns the jsx that we wish to render
    // render the two components
    return(
      <div className="tc">
      <h1>Sonidero</h1>
      <SearchBox onSearchChange={this.onSearchChange} />
      <CardList robots={filteredRobots} />
      </div>
    );
  }

}

export default App;
