import React from 'react';
import { TILE_SIZE, HEAD_OFFSET, EDirection } from '../../settings/constants';

import './index.css';
import useEnemyMoviment from '../../hooks/useEnemyMoviment';

const MiniDemon = () => {
  const { position, direction } = useEnemyMoviment({ x: 5, y: 5 });
  return (
    <div style={{
      position: 'absolute',
      bottom: TILE_SIZE * position.y,
      left: TILE_SIZE * position.x,
      width: TILE_SIZE,
      height: TILE_SIZE + HEAD_OFFSET,
      backgroundImage: "url(./assets/MINI-DEMON.png)",
      backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`,
      backgroundRepeat: "no-repeat",
      animation: 'mini-demon-animation 1s steps(4) infinite',
      transform: `scaleX(${direction === EDirection.RIGHT ? 1 : -1})`,

    }}
    />
  );
}

export default MiniDemon;