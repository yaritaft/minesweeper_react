import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ButtonTo } from '../components/BackToMenuButton';
import { MatrixComponent } from '../components/Matrix';
import { CellState, GameResponse } from '../models/Game';
import { apiPatch } from '../services/requestService';

interface RouteParams {
  id: string
}

const clickActions: CellState[] = [CellState.Checked, CellState.Flagged, CellState.Question];

export function Minesweeper(): JSX.Element {
  const { id } = useParams<RouteParams>();
  const [clickAction, setClickAction] = useState<CellState>(CellState.Checked);
  const handleClickAction =()=> {
    const clickActionIndex = clickActions.indexOf(clickAction);
    const clickNewActionIndex = clickActionIndex !== 2 ? clickActionIndex + 1 : 0;
    setClickAction(clickActions[clickNewActionIndex]);
  };
  const handleSaveGame = async ()=> {
    await apiPatch(`/api/games/${id}/state`);
  }



  return (
    <div>
        <button onClick={handleClickAction}>{clickAction===CellState.Checked ? "Click" : clickAction===CellState.Flagged ? "Flag" : clickAction }</button><br/>
        aa.aaa: id {id}<br/>
        <MatrixComponent id={id} clickAction={clickAction} />
        <br />
        <button type="button" onClick={handleSaveGame} >Save Game</button>
        < br/>
        <ButtonTo path="/menu" />
    </div>
  );
}
