import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ButtonTo } from "../components/BackToMenuButton";
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
        const {rows, columns } = gameInfo;
        if(rows * columns >100){
          alert(`The maximum amount of cells is 100 and you entered ${rows*columns} cells (row x columns).`)
        }else{
          const response = await apiPost<NewGameResponse>("/api/games", gameInfo);
          if(response?.data?.gameId){
              history.push(`/minesweeper/${response.data.gameId}`);
          }
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
      <label>Rows<br />
     <input type="number" name="rows" value={gameInfo.rows} onChange={handleChange} />
     </label><br/>
     <label>Columns<br />
     <input type="number" name="columns" value={gameInfo.columns} onChange={handleChange}></input>
     </label><br/>
     <label>Amount of mines<br />
     <input type="number" name="amountOfMines" value={gameInfo.amountOfMines} onChange={handleChange}></input>
     </label><br/>
        <button type="button" onClick={handleNewGame}>New Game</button>
    <br/>
      <ButtonTo path="/saved-games" message="Load Game" />
    </div>
  );
}
