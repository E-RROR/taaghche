import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import {Leaf} from "./layouts/Leaf.layout";
import {Cards} from "./layouts/Cards.layout";
import {Prize} from "./layouts/Prize.layout";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/barg" element={<Leaf />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/prize" element={<Prize />} />
        </Routes>
    </Router>
  );
}

export default App;
