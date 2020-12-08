const { List, Image } = require("semantic-ui-react");

// => ( ) implict multine return no need for 'return'
const Contact = ({ name, phone }) => (
  <List.Item>
    <Image
      avatar
      src="https://react.semantic-ui.com/images/avatar/small/rachel.png"
    />
    <List.Content>
      <List.Header>{name}</List.Header>
      <List.Description>{phone}</List.Description>
    </List.Content>
  </List.Item>
);

export default Contact;
