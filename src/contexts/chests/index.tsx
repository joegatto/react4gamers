import React from "react";

interface IProps {
  children: React.ReactNode;
}

export const ChestsContext = React.createContext({
  totalChests: 2,
  openedChests: {
    total: 0,
    positions: []
  },
  updateOpenedChests: () => null
});

function ChestProvider(props: IProps) {
  const [chestsState, updateChestsState] = React.useState({
    totalChests: 2,
    openedChests: {
      total: 0,
      positions: []
    },
    updateOpenedChests: () => {
      console.log("chests");
    }
  });
  return (
    <ChestsContext.Provider value={chestsState}>{props.children}</ChestsContext.Provider>
  )
}

export default ChestProvider