import React from 'react'
import './css/index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MAIN_PAGE from './components/MAIN_PAGE/MAIN_PAGE';

function App() {
   return (
      <div className="App">

         <Router>

            <Routes>

               <Route path='/' element={ <MAIN_PAGE /> } />

            </Routes>

         </Router>

      </div>
   );
}

export default App
