import M from "minimatch";
import React, { useEffect, useState } from "react";
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
}

export function MatrixComponent(props: Properties): JSX.Element {
  const [game, setGame] = useState<Game>();
  const getGame = async (): Promise<Game | undefined> => {
    const response = await apiGet<GameResponse>(`/api/games/${props.id}`);
    if (response.status === 200) {
      console.log(response.data);
      return response.data;
    }
  };

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
  useEffect(() => {
    const tempGetGame = async () => {
      const response = await getGame();
      if (response) {
        setGame(response);
      }
    };
    tempGetGame();
  }, [getGame, game]);

  return (
    <div>
      {game?.state}
      <br />
      {game && game.state && game.matrix && generateCell(game)}
    </div>
  );
}
