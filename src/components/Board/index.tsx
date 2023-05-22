import * as S from "./styles";

import List from "./components/List";
import useBoardContext from "./hooks/useBoardContext";

const Board = () => {
  const { list: boardList } = useBoardContext();

  return (
    <S.Container>
      {boardList.map((item, listIndex) => (
        <List key={item.title} listIndex={listIndex} data={item} />
      ))}
    </S.Container>
  );
};

export default Board;
