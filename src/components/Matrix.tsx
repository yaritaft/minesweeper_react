import React, { SetStateAction } from "react";
import {
  CellState,
  Game,
} from "../models/Game";
import { CellComponent } from "./Cell";

interface Properties {
  id: string;
  clickAction: CellState;
  game: Game;
  setGame: React.Dispatch<SetStateAction<Game | undefined>>;
}

function MatrixComponentInternal(props: Properties): JSX.Element {
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
export const MatrixComponent = React.memo(MatrixComponentInternal);
