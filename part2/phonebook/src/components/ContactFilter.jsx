import { InputGroup } from "./InputGroup";

export const ContactFilter = (props) => {
  return (
    <div>
      <InputGroup
        labelText="Filter contacts: "
        inputProps={{
          type: "text",
          name: "filter",
          id: "filterInput",
          value: props.filterPattern,
          onChange: props.onFilterInputChange,
        }}
      />
    </div>
  );
};
