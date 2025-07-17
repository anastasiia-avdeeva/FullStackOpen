import { InputGroup } from "./InputGroup";
import { Button } from "./button";

export const PersonForm = (props) => {
  return (
    <form onSubmit={props.onAddPerson}>
      <InputGroup
        labelText="Name: "
        inputProps={{
          type: "text",
          id: "nameInput",
          name: "name",
          value: props.newName,
          // required: true,
          onChange: props.onNameInputChange,
        }}
      />
      <InputGroup
        labelText="Phone number: "
        inputProps={{
          type: "tel",
          id: "phoneInput",
          name: "number",
          minLength: "3",
          maxLength: "20",
          value: props.newNumber,
          // required: true,
          onChange: props.onPhoneInputChange,
        }}
      />
      <Button text="add contact" type="submit" />
    </form>
  );
};
