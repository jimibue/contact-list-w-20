import { useState } from "react";
import { Button, Form } from "semantic-ui-react";

const ContactForm = (props) => {
  // breaking up form state peices into individaul pieces
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");

  const [contact, setContact] = useState({ fname: "", phone: "" });

  const handleSubmit = (e) => {
    // e.preventDefault(); don't need with semantic Form
    // props.addContact({ name: name, phone: phone });
    // short hand if key value have same name on objects
    props.addContactYo({ name, phone });
    setName("");
    setPhone("");
  };

  // generic handle change function
  const handleChange = (e) => {
    // {name,phone}
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  return (
    <Form unstackable onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <Form.Group widths={2}>
        <Form.Input
          // onChange={handleChange}
          // value={contact.name}
          size="small"
          name="fname"
          label="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="name"
        />
        <Form.Input
          // onChange={handleChange}
          // value={contact.phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          size="small"
          value={phone}
          name="phone"
          label="phone"
          placeholder="phone"
        />
      </Form.Group>
      {/* <Form.Checkbox label="I agree to the Terms and Conditions" /> */}
      <Button style={{ marginTop: "20px" }} type="submit">
        Add Contact
      </Button>
    </Form>
  );
};

export default ContactForm;
