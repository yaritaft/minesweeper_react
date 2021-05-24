import React from "react";
import { useHistory } from "react-router-dom";

export function BackToMenuButton(): JSX.Element {
    const history = useHistory();
  function handleClick(): void {
      localStorage.removeItem("authorization");
      history.push(process.env.PUBLIC_URL+"/menu");
  }

  return (
    <button type="button" onClick={handleClick} >GO BACK TO MENU</button>
  );
}
