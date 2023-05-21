import { MdAdd } from "react-icons/md";

import * as S from "./styles";
import { ListItem } from "./types";

import Card from "../Card";

type ListProps = {
  data: ListItem;
};

const List = ({ data }: ListProps) => {
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

      <ul>
        {data.cards.map((cardData) => (
          <Card key={cardData.id} data={cardData} />
        ))}
      </ul>
    </S.Container>
  );
};

export default List;
