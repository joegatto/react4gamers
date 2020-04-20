import React from 'react';

import { TILE_SIZE, HEAD_OFFSET, EDirection } from '../../settings/constants';

import './index.css';
import useHeroMoviment from '../../hooks/useHeroMoviment';

interface IProps {
  initialPosition: { x: number; y: number }
}

const Hero = (props: IProps) => {
  const moviment = useHeroMoviment(props.initialPosition);
  return (
    <div style={{
      position: 'absolute',
      top: `${moviment.position.y * TILE_SIZE - HEAD_OFFSET}px`,
      left: TILE_SIZE * moviment.position.x,
      width: TILE_SIZE,
      height: TILE_SIZE + HEAD_OFFSET,
      backgroundImage: "url(./assets/HERO.png)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`,
      animation: 'hero-animation 1s steps(4) infinite',
      transform: `scaleX(${moviment.direction === EDirection.RIGHT ? 1 : -1})`,
      zIndex: 1
    }}
    />
  );
}

export default Hero;