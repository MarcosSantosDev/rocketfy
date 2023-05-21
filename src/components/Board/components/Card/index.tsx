import * as S from "./styles";

import { CardData } from "./types";

type CardProps = {
  data: CardData;
};

const Card = ({ data }: CardProps) => {
  return (
    <S.Container>
      <header>
        {data.labels.map(labelColor => (<S.Label color={labelColor} />))}
      </header>
      <p>{data.content}</p>
      {data.user && <img src={data.user} alt="task user" />}
    </S.Container>
  );
};

export default Card;
