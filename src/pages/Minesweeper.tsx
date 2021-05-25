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

  useEffect(() => {
    const getGame = async () => {
      const response = await apiGet<GameResponse>(`/api/games/${id}`);
      if (response.status===200 && response.data) {
        const updatedGame = response.data;
        if ([GameState.Lost, GameState.Won].includes(updatedGame.state)){
          alert(`You have ${updatedGame?.state}`)
          console.log(`You have ${updatedGame.state}`)
          console.log(JSON.stringify(updatedGame))
          history.push("/menu");
        }
        setGame(updatedGame);
      }
    };
    getGame();
  }, [history, id]);

  
  useEffect(() => {
        console.log(JSON.stringify(game))
        if (game?.state && [GameState.Lost, GameState.Won].includes(game.state)){
          alert(`You have ${game?.state}`)
          console.log(`You have ${game.state}`)
          console.log(JSON.stringify(game))
          history.push("/menu");
        }
  }, [game, history]);


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
