import * as S from "./styles";

import List from "./components/List";
import { loadBoardList } from "../../services/staticapi";

const boardList = loadBoardList();

const Board = () => {
  return (
    <S.Container>
      {boardList.map(item => (<List key={item.title} data={item} />))}
    </S.Container>
  );
};

export default Board;
