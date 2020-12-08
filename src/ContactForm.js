import { useState } from "react";
import { Button, Form } from "semantic-ui-react";

const ContactForm = (props) => {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");

  const [contact, setContact] = useState({ fname: "", phone: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };
  const handleChange = (e) => {
    console.log(e.target);
    console.log(e.target.value);
    console.log(e.target.name);
    // {name,phone}
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  return (
    <Form unstackable onSubmit={handleSubmit}>
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
      <Button type="submit">Add Contact</Button>
    </Form>
  );
};

export default ContactForm;
