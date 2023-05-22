import * as React from "react";

import { BoardContext } from "../context/BoardContext";

const useBoardContext = () => {
  const context = React.useContext(BoardContext);

  return context;
};

export default useBoardContext;