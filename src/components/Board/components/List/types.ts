import { CardData } from "../Card/types";

export type ListItem = {
  title: string;
  creatable: boolean;
  done?: boolean;
  cards: CardData[];
}