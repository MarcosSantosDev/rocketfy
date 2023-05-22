import * as React from "react";
import { produce } from "immer";

import { loadBoardList } from "../../../services/staticapi";
import { ListItem } from "../../../services/@types/board";

type MoveCardArgs = {
  fromList: number;
  toList: number;
  from: number;
  to: number;
};

type BoardContextProps = {
  list: ListItem[];
  moveCard(args: MoveCardArgs): void;
};

export const BoardContext = React.createContext({} as BoardContextProps);

const boardList = loadBoardList();

export const BoardContextProvider = ({
  children,
}: React.PropsWithChildren<unknown>) => {
  const [list, setList] = React.useState(boardList);

  const moveCard = ({ fromList, toList, from, to }: MoveCardArgs) => {
    // console.log(to);
    setList(
      produce((draft) => {
        const dragged = draft[fromList].cards[from];

        draft[fromList].cards.splice(from, 1);
        draft[toList].cards.splice(to, 0, dragged);
      })
    );
  };

  return (
    <BoardContext.Provider value={{ list, moveCard }}>
      {children}
    </BoardContext.Provider>
  );
};
