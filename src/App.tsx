import { Router, Routes, Route } from "@/router";
import Page from "@/pages/Page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/A" component={<Page name="A" />} />
        <Route path="/B" component={<Page name="B" />} />
        <Route path="/C" component={<Page name="C" />} />
      </Routes>
    </Router>
  );
}

export default App;
