import { BrowserRouter as BrowserRouter, Routes, Route,  } from "react-router-dom";
import HomePage from "./components/HomePage";
import Recruiter from "./components/recuiter"
import Buisness from "./components/buisness";
import Data from "./components/data";
import Model from "./components/model";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="data" element={<Data />} />
          <Route path="model" element={<Model />} />
          <Route path="/" element={<HomePage />} />
          <Route path="buisness" element={<Buisness />} />
          <Route path="recuiter" element={<Recruiter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
