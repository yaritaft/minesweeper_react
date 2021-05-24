import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import { Logout } from "./components/Logout";
import { GameMenu } from "./pages/GameMenu";
import { Login } from "./pages/Login";
import { Minesweeper } from "./pages/Minesweeper";
import { Registry } from "./pages/Registry";
import { SavedGames } from "./pages/SavedGames";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Switch>
            <Route exact path={"/minesweeper_react"}>
              <Login />
            </Route>
             <Route exact path={"/registry"}>
                <Registry />
              </Route>
             <Route exact path={"/menu"}>
                <GameMenu />
              </Route>
              <Route exact path={"/saved-games"}>
                <SavedGames />
              </Route>
              <Route exact path={"/minesweeper/:id"}>
                <Minesweeper />
              </Route>
          </Switch>
        </BrowserRouter>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Logout />
      </header>
    </div>
  );
}

export default App;
