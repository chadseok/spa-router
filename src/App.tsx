import { Router, Routes, Route } from "@/router";
import Page from "@/pages/Page";
import { Navigate } from "./router/components";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" component={<Navigate to="/page-1" />} />
        <Route path="/page-1" component={<Page name="1" />} />
        <Route path="/page-2" component={<Page name="2" />} />
        <Route path="/page-3" component={<Page name="3" />} />
      </Routes>
    </Router>
  );
}

export default App;
