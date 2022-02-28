import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Pages
import Home from "./pages/Home";

// Styles
import "./styles/App.css";

// Files
import { LangProvider } from "./utils/context/LangContext";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="App" sx={{ paddingRight: open ? 500 : 0 }}>
      <LangProvider>
        <Routes>
          <Route path="/" element={<Home open={open} setOpen={setOpen} />} />
        </Routes>
      </LangProvider>
    </div>
  );
}

export default App;
