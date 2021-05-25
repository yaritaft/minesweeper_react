import React from "react";
import { useHistory } from "react-router-dom";

interface Properties {
  path: string;
  message?: string;
  handleClick?: ()=>Promise<void>;
}

export function ButtonTo(props: Properties): JSX.Element {
    const history = useHistory();
  function handleClick(): void {
      history.push(props.path);
  }

  return (
    <button type="button" onClick={props.handleClick ?? handleClick} >{props.message ?? "Go Back"}</button>
  );
}
