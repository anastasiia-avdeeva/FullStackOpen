import { InputGroup } from "./InputGroup";
import { Button } from "./button";

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
      <Button text="Apply filter" onClick={props.onApplyFilter} />
      <Button text="Discard filter" onClick={props.onDiscardFilter} />
    </div>
  );
};
