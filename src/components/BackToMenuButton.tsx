import React from "react";
import { useHistory } from "react-router-dom";

interface Properties {
  path: string;
  message?: string;
}

export function ButtonTo(props: Properties): JSX.Element {
    const history = useHistory();
  function handleClick(): void {
      history.push(props.path);
  }

  return (
    <button type="button" onClick={handleClick} >{props.message ?? "Go Back"}</button>
  );
}
