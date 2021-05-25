import M from "minimatch";
import React, { SetStateAction, useEffect, useState } from "react";
import {
  Cell,
  CellState,
  ClickRequest,
  Game,
  GameResponse,
} from "../models/Game";
import { apiGet, apiPatch } from "../services/requestService";
import { CellComponent } from "./Cell";

interface Properties {
  id: string;
  clickAction: CellState;
  game: Game;
  setGame: React.Dispatch<SetStateAction<Game | undefined>>;
}

export function MatrixComponent(props: Properties): JSX.Element {
  const {game, setGame} = props;
  const generateCell = (game: Game): JSX.Element => (
    <>
      {game?.matrix?.map((row, indexRow) => (
        <>
          {row.map((column, indexColumn) => (
            <>
              {game?.matrix?.[indexRow]?.[indexColumn]?.state && (
                <CellComponent
                  x={indexRow}
                  y={indexColumn}
                  cellState={game?.matrix?.[indexRow]?.[indexColumn]?.state}
                  setGame={setGame}
                  id={props.id}
                  clickAction={props.clickAction}
                />
              )}
            </>
          ))}
          <br />
        </>
      ))}
    </>
  );

  return (
    <div>
      <br />
      {game && game.state && game.matrix && generateCell(game)}
      <br />
      {`Game State: ${game?.state}`}

    </div>
  );
}
