import * as React from "react";
import { useDrag, useDrop } from "react-dnd";

import * as S from "./styles";
import { CardData } from "./types";
import { ItemsTypes } from "../../constants/board";
import useBoardContext from "../../hooks/useBoardContext";

type CardProps = {
  data: CardData;
  listIndex: number;
  cardIndex: number;
};

type DragItem = {
  cardId: number;
  listIndex: number;
  cardIndex: number;
};

const Card = ({ data, listIndex, cardIndex }: CardProps) => {
  const cardRef = React.useRef<HTMLLIElement | null>(null);
  const { moveCard } = useBoardContext();

  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: ItemsTypes.CARD,
    item: {
      cardId: data.id,
      listIndex,
      cardIndex,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [, dropRef] = useDrop<DragItem, void, unknown>(() => ({
    accept: ItemsTypes.CARD,
    hover: (item, monitor) => {
      if (!cardRef.current) {
        return;
      }

      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;

      const draggedCardIndex = item.cardIndex;
      const targetCardIndex = cardIndex;

      // Don't replace items with themselves
      if (
        draggedListIndex === targetListIndex &&
        draggedCardIndex === targetCardIndex
      ) {
        return;
      }

      // Determine rectangle on screen
      const hoverBoundingRect = cardRef.current.getBoundingClientRect();

      // Get vertical middle
      const targetCardCenter = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // Determine mouse position
      const draggedClientOffsetXYCord = monitor.getClientOffset();

      if (draggedClientOffsetXYCord === null) {
        return;
      }

      // Get pixels to the top
      const hoverClientY = draggedClientOffsetXYCord.y - hoverBoundingRect.top;

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (draggedCardIndex < targetCardIndex && hoverClientY < targetCardCenter) {
        return;
      }

      // Dragging upwards
      if (draggedCardIndex > targetCardIndex && hoverClientY > targetCardCenter) {
        return;
      }

      item.cardIndex = targetCardIndex;
      item.listIndex = targetListIndex;
      
      moveCard({
        fromList: draggedListIndex,
        toList: targetListIndex,
        from: draggedCardIndex,
        to: targetCardIndex,
      });
    },
  }));

  dragRef(dropRef(cardRef));

  return (
    <S.Container ref={cardRef} isDragging={isDragging}>
      <header>
        {data.labels.map((labelColor) => (
          <S.Label key={data.id + "label"} color={labelColor} />
        ))}
      </header>
      <p>
        {data.content} ID: {data.id} CARDINDEX: {cardIndex}
      </p>
      {data.user && <img src={data.user} alt="task user" />}
    </S.Container>
  );
};

export default Card;
