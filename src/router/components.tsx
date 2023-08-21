import React from "react";
import { RouterContext } from "./context";

export interface RouterProps {
  children: React.ReactNode;
}

export function Router(props: RouterProps) {
  const [path, setPath] = React.useState(window.location.pathname);

  const changePath = (path: string) => {
    setPath(path);
    window.history.pushState({ path }, "", path);
  };

  React.useEffect(() => {
    const handlePopStateEvent = (event: PopStateEvent) => {
      setPath(event.state?.path || "/");
    };

    window.addEventListener("popstate", handlePopStateEvent);

    return () => {
      window.removeEventListener("popstate", handlePopStateEvent);
    };
  }, []);

  return (
    <RouterContext.Provider value={{ path, changePath }}>
      {props.children}
    </RouterContext.Provider>
  );
}
