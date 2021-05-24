import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { apiPost } from "../services/requestService";

interface NewGameResponse {
    data: {
        gameId: string;
    },
    status: number;
}

interface State {
    rows: number;
    columns: number;
    amountOfMines: number;
  }
  

export function GameMenu(): JSX.Element {
    const [gameInfo, setGameInfo] = useState<State>({
        rows: 0,
        columns: 0,
        amountOfMines: 0,
    });
    const history = useHistory();
    const handleNewGame = async ()=> {
        const response = await apiPost<NewGameResponse>("/api/games", gameInfo);
        if(response?.data?.gameId){
            history.push(`/minesweeper/${response.data.gameId}`);
        }
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
        const value = event.target.value;
        setGameInfo({
          ...gameInfo,
          [event.target.name]: Number(value),
        });
      }

  return (
    <div>
      <label>Rows
     <input type="number" name="rows" value={gameInfo.rows} onChange={handleChange} />
     </label><br/>
     <label>Columns
     <input type="number" name="columns" value={gameInfo.columns} onChange={handleChange}></input>
     </label><br/>
     <label>Amount of mines
     <input type="number" name="amountOfMines" value={gameInfo.amountOfMines} onChange={handleChange}></input>
     </label><br/>
        <button type="button" onClick={handleNewGame}>New Game</button>
    <br/>
      <a href="/saved-games">
        <button type="button">Load Game</button>
      </a>
    </div>
  );
}
