import React from "react";
import logo from "./logo.svg";
import "./App.css";

// example of renaming imports
import { Container, Divider, Header as Headerz } from "semantic-ui-react";
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

  // expecting an object with name and phone keys
  addContact = (contactObj) => {
    // add a harcoded users, then worry about form
    let newContact = {
      id: Math.random(),
      name: contactObj.name,
      phone: contactObj.phone,
    };

    // how do I add a contact to state?
    let contacts = [...this.state.contacts, newContact];
    this.setState({ contacts: contacts });
  };

  updateContact = (updateContact) => {
    // how do update my array contacts in functional js land
    let contacts = this.state.contacts.map((c) =>
      c.id === updateContact.id ? updateContact : c
    );

    this.setState({ contacts });
  };

  render() {
    // es6 destructing
    const { contacts } = this.state;
    return (
      <Container style={{ marginTop: "20px" }}>
        <Headerz as="h2">React Contact List</Headerz>
        <ContactForm addContactYo={this.addContact} />
        <div onClick={this.updateContact}>update</div>
        <Divider />
        {/* <ContactList listOfContacts={this.state.contacts} /> */}
        <ContactList
          listOfContacts={contacts}
          updateHandler={this.updateContact}
        />
      </Container>
    );
  }
}

export default App;
