import { Route, Routes } from "react-router-dom";
import RecoilTest from "./Components/RecoilTest.jsx";
import { MobX } from "./Components/MobX.jsx";
import ContextAPI from "./Components/ContextAPI.jsx";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/recoil" element={<RecoilTest />} />
        <Route path="/mobx" element={<MobX />} />
        <Route path="/context" element={<ContextAPI />} />
      </Routes>
    </div>
  );
}

export default App;
