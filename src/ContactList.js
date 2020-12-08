import { List } from "semantic-ui-react";
import Contact from "./Contact";

// takes contact and loops over them
const Contacts = ({ listOfContacts }) => {
  let renderContacts = () => {
    return listOfContacts.map((c) => {
      return <Contact />;
    });
  };

  return (
    <div>
      <h1>contact here</h1>
      <List>{renderContacts()}</List>
    </div>
  );
};

export default Contacts;

export const test = () => {};

// {propsYo.listOfContacts.map((c) => (
//   <h1>{c.name}</h1>
// ))}
