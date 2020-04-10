import React from "react";
import PersonItem from "./PersonItem";

const personList = [
  { fullName: "John Doe", id: 1 },
  { fullName: "John D", id: 2 }
];

class Person extends React.Component {
  state = {
    persons: personList,
    showPersons: false
  };

  togglePersons = e => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  render() {
    const { persons, showPersons } = this.state;
    return (
      <div>
        <h3>Person.js</h3>
        <button onClick={this.togglePersons}>Toggle Persons</button>
        <hr />
        {persons.length > 0 && showPersons
          ? persons.map(user => <PersonItem key={user.id} user={user} />)
          : null}
      </div>
    );
  }
}

export default Person;
