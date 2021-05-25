import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ButtonTo } from "../components/BackToMenuButton";
import { apiPost } from "../services/requestService";

interface State {
  email: string;
  password: string;
}

interface TokenResponse {
    data: {
        authorization: string;
    }
    status: number;
}

export function Login(): JSX.Element {
    const history = useHistory();
  const [loginInfo, setLoginInfo] = useState<State>({
    email: "",
    password: "",
  });
  async function handleSubmit(): Promise<any> {
      const value = await apiPost<TokenResponse>("/api/user/login", {...loginInfo});
      if(value?.data?.authorization){
          localStorage.setItem('authorization', value.data.authorization);
          history.push("/menu")
      }

}

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const value = event.target.value;
    setLoginInfo({
      ...loginInfo,
      [event.target.name]: value,
    });
  }

  return (
    <>
      <form>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={loginInfo.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={loginInfo.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="button" onClick={handleSubmit}>Log In</button>

      </form>
      <br/ >
      <ButtonTo path="/registry" message="Sign Up" />
    </>
  );
}
