import { MdAdd } from "react-icons/md";

import * as S from "./styles";
import { ListItem } from "./types";

import Card from "../Card";

type ListProps = {
  data: ListItem;
  listIndex: number;
};

const List = ({ data, listIndex }: ListProps) => {
  return (
    <S.Container done={data?.done}>
      <header>
        <h3>{data.title}</h3>
        {data.creatable && (
          <button type="button">
            <MdAdd size={24} color="#fff" />
          </button>
        )}
      </header>

      <ul key={listIndex}>
        {data.cards.map((card, cardIndex) => (
          <Card
            key={card.id}
            listIndex={listIndex}
            cardIndex={cardIndex}
            data={card}
          />
        ))}
      </ul>
    </S.Container>
  );
};

export default List;
