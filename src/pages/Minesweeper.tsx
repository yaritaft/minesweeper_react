import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { ButtonTo } from '../components/BackToMenuButton';
import { MatrixComponent } from '../components/Matrix';
import { CellState, Game, GameResponse, GameState } from '../models/Game';
import { apiGet, apiPatch } from '../services/requestService';

interface RouteParams {
  id: string
}

const clickActions: CellState[] = [CellState.Checked, CellState.Flagged, CellState.Question];

export function Minesweeper(): JSX.Element {
  const { id } = useParams<RouteParams>();
  const history = useHistory();
  const [clickAction, setClickAction] = useState<CellState>(CellState.Checked);
  const [game, setGame] = useState<Game>();
  const handleClickAction =()=> {
    const clickActionIndex = clickActions.indexOf(clickAction);
    const clickNewActionIndex = clickActionIndex !== 2 ? clickActionIndex + 1 : 0;
    setClickAction(clickActions[clickNewActionIndex]);
  };
  const handleSaveGame = async ()=> {
    await apiPatch(`/api/games/${id}/state`);
    history.push("/menu")
  }

  const getGame = async (): Promise<Game | undefined> => {
    const response = await apiGet<GameResponse>(`/api/games/${id}`);
    if (response.status === 200) {
      console.log(response.data);
      return response.data;
    }
  };
  
  useEffect(() => {
    const tempGetGame = async () => {
      const response = await getGame();
      if (response) {
        if ([GameState.Lost, GameState.Won].includes(response?.state)){
          alert(`Ỳou have ${response?.state}`)
          history.push("/menu");
        }
        setGame(response);
      }
    };
    tempGetGame();
  }, [getGame, game]);


  return (
    <div>
        <button onClick={handleClickAction}>{clickAction===CellState.Checked ? "Click" : clickAction===CellState.Flagged ? "Flag" : clickAction }</button><br/>
        {game && <MatrixComponent id={id} game={game} setGame={setGame} clickAction={clickAction} />}
        <br />
        <button type="button" onClick={handleSaveGame} >Save Game</button>
        < br/>
        <ButtonTo path="/menu" />
    </div>
  );
}
