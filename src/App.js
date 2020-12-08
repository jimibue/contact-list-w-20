import React from "react";
import logo from "./logo.svg";
import "./App.css";

// example of renaming imports
import { Container, Header as Headerz } from "semantic-ui-react";
// example of renaming defualt import
import ContactList, { test as textz } from "./ContactList";
import ContactForm from "./ContactForm";

class App extends React.Component {
  state = {
    contacts: [
      { id: 1, name: "Jerry", phone: "801-121-5656" },
      { id: 2, name: "George", phone: "626-567-1872" },
      { id: 3, name: "Cosmo", phone: "802-134-9876" },
    ],
  };

  render() {
    // es6 destructing
    const { contacts } = this.state;
    return (
      <Container>
        <ContactForm />
        <Headerz as="h2">React Contact List</Headerz>
        {/* <ContactList listOfContacts={this.state.contacts} /> */}
        <ContactList listOfContacts={contacts} />
      </Container>
    );
  }
}

export default App;
