import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStarWarsRequest } from "../actions";

class App extends Component {
  render() {
    const { starWars } = this.props;

    let starWarsPersons;

    console.log(starWars);
    if (starWars.persons && starWars.persons.length !== 0) {
      starWarsPersons = starWars.persons.map((person, i) => (
        <h4 key={i}>{person.name}</h4>
      ));
    } else {
      starWarsPersons = <h4>No persons here</h4>;
    }

    return (
      <div className="App">
        <h1>Redux Saga</h1>
        <div>{starWarsPersons}</div>
        <button onClick={this.props.fetchStarWarsRequest}>Load More</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  starWars: state.persons
});

export default connect(
  mapStateToProps,
  { fetchStarWarsRequest }
)(App);
