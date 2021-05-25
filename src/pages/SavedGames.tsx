import React, { useEffect, useState } from 'react';
import { ButtonTo } from '../components/BackToMenuButton';
import { apiGet } from '../services/requestService';


interface OnGoingGamesResponse {
    data: {
        games: {gameId:string}[]
    },
    status: number;
}

export function SavedGames(): JSX.Element {
    const [games, setGames] = useState<{gameId:string}[]>();
    useEffect(() =>{
        const fetch = async ()=> {
            const result = await apiGet<OnGoingGamesResponse>("/api/games/ongoing");
            if(result.status===200){
                setGames(result.data.games);
            }
        };
        fetch();

    }, [])

    return (
    <div>
        {games?.map((game, index) => <><ButtonTo path={`/minesweeper/${game.gameId}`} message={`SLOT ${index} - Game ID: ${game.gameId}`} /><br/></> )}
        < br/>
        <ButtonTo path="/menu" />
    </div>
  );
}
