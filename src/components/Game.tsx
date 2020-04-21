import React from 'react';
import CanvasProvider from '../contexts/canvas';
import Debugger from './Debugger';
import Board from './Board';
import ChestProvider from '../contexts/chests';

function Game() {
  return (
    <CanvasProvider>
      <ChestProvider>
        <Debugger />
        <Board />
      </ChestProvider>
    </CanvasProvider>
  )
};

export default Game;