import React from "react";
import { RouterContext } from "./context";

export function useNavigate() {
  const { path, changePath } = React.useContext(RouterContext);

  const navigate = React.useCallback(
    (nextPath: string) => {
      if (path === nextPath) {
        return;
      }

      changePath(nextPath);
    },
    [path, changePath]
  );

  return navigate;
}
