import useEventListener from '@use-it/event-listener';
import React from 'react';
import { EDirection, EWalker } from '../../settings/constants';
import { CanvasContext } from '../../contexts/canvas';
import { ChestsContext } from '../../contexts/chests';

function useHeroMoviment(initialPosition) {
  const canvasContext = React.useContext(CanvasContext);
  const chestsContext = React.useContext(ChestsContext);

  const [position, updatePositionState] = React.useState(initialPosition);
  const [direction, updateDirectionState] = React.useState(EDirection.RIGHT);

  useEventListener('keydown', (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key.indexOf('Arrow') === -1) {
      return;
    }

    const direction: EDirection = event.key as EDirection;

    const moviment = canvasContext.updateCanvas(direction, position, EWalker.HERO);

    if (moviment.nextMove.valid) {
      updatePositionState(moviment.nextPosition);
      if (EDirection.RIGHT === direction || EDirection.LEFT === direction) {
        updateDirectionState(direction);
      }
    }

    if (moviment.nextMove.dead) {
      setTimeout(() => {
        alert("Você morreu!");
      })
      window.location.reload();
    }

    if (moviment.nextMove.chest) {
      chestsContext.updateOpenedChests(moviment.nextPosition);
    }

    if (chestsContext.totalChests === chestsContext.openedChests.total && moviment.nextMove.door) {
      setTimeout(() => {
        alert('Você venceu!');
      })
      window.location.reload();
    }
  });

  return {
    position: position,
    direction: direction,
  }
}

export default useHeroMoviment;