import React, { useState } from "react";
import { useHistory } from "react-router";
import { ButtonTo } from "../components/BackToMenuButton";
import { apiPost } from "../services/requestService";

interface State {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

interface Response {
    data: object;
    status: number;
}

export function Registry(): JSX.Element {
    const history = useHistory();
  const [registryInfo, setRegistryInfo] = useState<State>({
    email: "",
    password: "",
    lastName: "",
    firstName: "",
  });

  async function handleSubmit(): Promise<any> {
    const response = await apiPost<Response>("/api/user/register", {
      ...registryInfo,
    });
    if (response?.status===200) {
        history.push("/");
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const value = event.target.value;
    setRegistryInfo({
      ...registryInfo,
      [event.target.name]: value,
    });
  }

  return (
    <>
      <form>
        <label>
          Name:
          <input
            type="text"
            value={registryInfo.firstName}
            name="firstName"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          LastName:
          <input
            type="text"
            value={registryInfo.lastName}
            name="lastName"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="text"
            value={registryInfo.email}
            name="email"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={registryInfo.password}
            name="password"
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="button" onClick={handleSubmit}>Register</button>
      </form>
      <br/>
      <ButtonTo path="/" />
    </>
  );
}
