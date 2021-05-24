import React from 'react';
import { useParams } from 'react-router-dom';

interface RouteParams {
  id: string
}

export function Minesweeper(): JSX.Element {
  const { id } = useParams<RouteParams>();

  return (
    <div>
        aaaaa: id {id}
    </div>
  );
}
