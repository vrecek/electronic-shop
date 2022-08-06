import React from 'react'
import './css/index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MAIN_PAGE from './components/MAIN_PAGE/MAIN_PAGE';
import T_AND_C from './components/TERMS_CONDITIONS/T_AND_C';
import CONTACT from './components/CONTACT PAGE/CONTACT';
import ArrowTop from './components/Layout/ArrowTop';
import LOGIN_PAGE from './components/LOGREG_PAGE/LOGIN_PAGE';
import REGISTER_PAGE from './components/LOGREG_PAGE/REGISTER_PAGE';
import USERS_BASKET from './components/BASKET_PAGE/USERS_BASKET';

function App() {
   return (
      <div className="App">

         <Router>

            <Routes>

               <Route path='/' element={ <MAIN_PAGE /> } />
               <Route path='/terms-and-conditions' element={ <T_AND_C /> } />
               <Route path='/contact' element={ <CONTACT /> } />

               <Route path='/log-in' element={ <LOGIN_PAGE /> } />
               <Route path='/register' element={ <REGISTER_PAGE /> } />
               
               <Route path='/basket' element={ <USERS_BASKET /> } />

            </Routes>

         </Router>

         <ArrowTop />

      </div>
   );
}

export default App
