import React, { SetStateAction } from "react";
import { CellState, ClickRequest, Game, GameResponse } from "../models/Game";
import { apiPatch } from "../services/requestService";

interface Properties {
  x: number;
  y: number;
  cellState: CellState;
  setGame: React.Dispatch<SetStateAction<Game | undefined>>;
  clickAction: CellState;
  id: string;
}

export function CellComponent(props: Properties): JSX.Element {
    const clickRequest:ClickRequest = { x: props.x, y: props.y, type: props.clickAction };
  const handleClick = async (): Promise<void> => {
    const response = await apiPatch<GameResponse>(
      `/api/games/${props.id}/click`,
      clickRequest
    );
    if (response.data) {
      props.setGame(response.data);
    }
  };
  return (
    <button type="button" onClick={handleClick}>
      {props.cellState === CellState.Checked
        ? "✓"
        : props.cellState === CellState.Flagged
        ? "⚑"
        : props.cellState === CellState.Question
        ? "?"
        : " "}
        <br />
    </button>
  );
}
