import React from "react";

export interface RouterContextObject {
  path: string;
  changePath: (path: string) => void;
}

export const RouterContext = React.createContext<RouterContextObject>(null!);
