import "./App.css";
import Header from "../src/components/HomePage/Header/Header";
import AllTransactions from "../src/components/HomePage/AllTransactions/AllTransactions";
import Visualizations from "../src/components/Visualizations/Visualizations/Visualizations";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Toaster />
      <Router>
        <div className="flex flex-col max-w-screen gap-8">
          <Header />
          <Routes>
            <Route path="/" element={<AllTransactions />} />
            <Route path="/visualizations" element={<Visualizations />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
