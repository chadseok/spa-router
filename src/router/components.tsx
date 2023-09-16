import React from "react";
import { RouterContext } from "./context";
import { useNavigate } from "./hooks";

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

export interface RoutesProps {
  children: Array<React.ReactElement>;
}

export function Routes(props: RoutesProps) {
  const { path } = React.useContext(RouterContext);

  let childComponent = null;

  React.Children.forEach(props.children, (child) => {
    if (child.props.path === path) {
      childComponent = child.props.component;
    }
  });

  return childComponent;
}

export interface RouteProps {
  component: React.ReactElement;
  path: string;
}

export function Route(props: RouteProps) {
  return props.component;
}

export interface NavigateProps {
  to: string;
}

export function Navigate({ to }: NavigateProps) {
  const navigate = useNavigate();

  React.useEffect(() => navigate(to), [navigate, to]);

  return null;
}
