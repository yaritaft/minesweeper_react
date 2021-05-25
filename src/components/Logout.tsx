import React from "react";
import { useHistory } from "react-router-dom";

export function Logout(): JSX.Element {
    const history = useHistory();
  function handleClick(): void {
      localStorage.removeItem("authorization");
      history.push("/");
  }

  return (
    <button type="button" onClick={handleClick} >Logout</button>
  );
}
