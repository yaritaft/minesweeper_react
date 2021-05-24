import React from 'react';
import { useParams } from 'react-router-dom';
import { BackToMenuButton } from '../components/BackToMenuButton';

interface RouteParams {
  id: string
}

export function Minesweeper(): JSX.Element {
  const { id } = useParams<RouteParams>();

  return (
    <div>
        aa.aaa: id {id}
        < br/>
        <BackToMenuButton />
    </div>
  );
}
