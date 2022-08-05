import React from 'react'
import './css/index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MAIN_PAGE from './components/MAIN_PAGE/MAIN_PAGE';
import T_AND_C from './components/TERMS_CONDITIONS/T_AND_C';
import CONTACT from './components/CONTACT PAGE/CONTACT';
import ArrowTop from './components/Layout/ArrowTop';

function App() {
   return (
      <div className="App">

         <Router>

            <Routes>

               <Route path='/' element={ <MAIN_PAGE /> } />
               <Route path='/terms-and-conditions' element={ <T_AND_C /> } />
               <Route path='/contact' element={ <CONTACT /> } />

            </Routes>

         </Router>

         <ArrowTop />

      </div>
   );
}

export default App
