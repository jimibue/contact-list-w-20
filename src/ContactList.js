import { Header, List } from "semantic-ui-react";
import Contact from "./Contact";

// takes contact and loops over them
const Contacts = ({ listOfContacts, updateHandler }) => {
  let renderContacts = () => {
    return listOfContacts.map((c) => {
      // return <Contact key={c.id} name={c.name} phone={c.phone} id={c.id} />;
      return <Contact key={c.id} {...c} updateHandler={updateHandler} />;
    });
  };

  return (
    <div>
      <List divided>{renderContacts()}</List>
    </div>
  );
};

export default Contacts;

export const test = () => {};

// {propsYo.listOfContacts.map((c) => (
//   <h1>{c.name}</h1>
// ))}
