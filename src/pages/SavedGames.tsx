import React, { useEffect, useState } from "react";
import { ButtonTo } from "../components/BackToMenuButton";
import { apiGet, apiPatch } from "../services/requestService";

interface OnGoingGamesResponse {
  data: {
    games: { gameId: string }[];
  };
  status: number;
}

export function SavedGames(): JSX.Element {
  const [games, setGames] = useState<{ gameId: string }[]>();
  useEffect(() => {
    const fetch = async () => {
      const result = await apiGet<OnGoingGamesResponse>("/api/games/ongoing");
      if (result.status === 200) {
        setGames(result.data.games);
      }
    };
    fetch();
  }, []);

  const handleResumeGameFactory = (id: string): ()=>Promise<void> => {
      const resumeGame = async(): Promise<void> => {
          await apiPatch(`/api/games/${id}/state`);
      }
      return resumeGame;
  };

  return (
    <div>
      {games?.map((game, index) => (
        <div onClick={handleResumeGameFactory(game?.gameId)}>
          <ButtonTo
            path={`/minesweeper/${game.gameId}`}
            message={`SLOT ${index} - Game ID: ${game.gameId}`}
          />
          <br />
        </div>
      ))}
      <br />
        <ButtonTo path="/menu" />
    </div>
  );
}
