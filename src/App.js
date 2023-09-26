import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from './components/Main';
import Performance from "./components/Performance";
import Analysis from "./components/Analysis";

function App() {
  return (
    <Router>
      <div dir='rtl'>
        <Header />
        <div class="home">
          <div class="container-fluid p-0 d-flex">
            <Sidebar />
            <Routes>
              <Route path="/" exact Component={Main} />
              <Route path="/Performance.js" Component={Performance}/>
              <Route path="/Analysis.js" Component={Analysis}/>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
  }

export default App;
