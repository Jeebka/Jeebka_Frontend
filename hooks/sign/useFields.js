import { useState } from "react";

export function useFields(initialState) {
  const [fields, setValues] = useState(initialState);

  return [
    fields,
    function(event) {
      console.log(event.target.value);
      setValues({
        ...fields,
        [event.target.id]: event.target.value
      });
    }
  ];
}
