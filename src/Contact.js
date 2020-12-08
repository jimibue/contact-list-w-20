import { useState } from "react";
import ContactForm from "./ContactForm";
const { List, Image, Button, Icon } = require("semantic-ui-react");

// => ( ) implict multine return no need for 'return'
const Contact = ({ name, phone, id, updateHandler, removeContact }) => {
  const [showForm, setShowForm] = useState(false);
  return (
    <List.Item>
      <Image
        avatar
        src="https://react.semantic-ui.com/images/avatar/small/rachel.png"
      />
      <List.Content>
        <List.Header>{name}</List.Header>
        <List.Description>{phone}</List.Description>
      </List.Content>
      <List.Content floated="right">
        <Button icon="pencil" onClick={() => setShowForm(!showForm)} />
        <Button icon="trash" color="red" onClick={() => removeContact(id)} />
      </List.Content>
      {showForm && (
        <ContactForm
          editContactYo={updateHandler}
          id={id}
          name={name}
          phone={phone}
          hideEditForm={() => setShowForm(false)}
        />
      )}
    </List.Item>
  );
};

export default Contact;
