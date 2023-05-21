
export type CardData = {
  id: number;
  content: string;
  labels: string[];
  user?: string;
}

export type ListItem = {
  title: string;
  creatable: boolean;
  done?: boolean;
  cards: CardData[];
}
