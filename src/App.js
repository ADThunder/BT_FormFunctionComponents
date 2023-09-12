import "./App.css";
import BaiTapForm from "./components/BaiTapForm/BaiTapForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Edit from "./components/BaiTapForm/Edit";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BaiTapForm />} />
          <Route path="/edit/:maSV" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
