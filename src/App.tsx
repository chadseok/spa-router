import { Router, Routes, Route } from "@/router";
import Page from "@/pages/Page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/page-1" component={<Page name="1" />} />
        <Route path="/page-2" component={<Page name="2" />} />
        <Route path="/page-3" component={<Page name="3" />} />
      </Routes>
    </Router>
  );
}

export default App;
