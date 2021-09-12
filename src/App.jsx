import "./styles.css";
import Home from "./pages/Home";
import Documentation from "./pages/Documentation";
import { BrowseRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<Documentation />} />
      </Routes>
    </div>
  );
}
