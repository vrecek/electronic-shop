import React from 'react'
import './css/index.css'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import MAIN_PAGE from './components/MAIN_PAGE/MAIN_PAGE';
import T_AND_C from './components/TERMS_CONDITIONS/T_AND_C';
import CONTACT from './components/CONTACT PAGE/CONTACT';
import ArrowTop from './components/Layout/ArrowTop';
import LOGIN_PAGE from './components/LOGREG_PAGE/LOGIN_PAGE';
import REGISTER_PAGE from './components/LOGREG_PAGE/REGISTER_PAGE';
import USERS_BASKET from './components/BASKET_PAGE/USERS_BASKET';
import SEARCH_PAGE from './components/SEARCH_PAGE/SEARCH_PAGE';
import PRODUCT_PAGE from './components/PRODUCT_PAGE/PRODUCT_PAGE';
import Fetches from './functions/Fetches';
import { LoadingCss } from './functions/Loading';
import { DEFAULTSTATE, Hook, HookLoad } from './interfaces/ReusableInterfaces';
import UserType from './interfaces/UserInterface';
import BlankPage from './components/Common/BlankPage';
import ERROR_PAGE from './components/ERROR/ERROR_PAGE';
import ADMIN_LOGIN from './components/ADMIN/ADMIN_LOGIN';
import PROFILE_PAGE from './components/PROFILE_PAGE/PROFILE_PAGE';
import BASKET_CONCLUSION from './components/BASKET_PAGE/Conclusion/BASKET_CONCLUSION';
import ORDERED_MESSAGE from './components/BASKET_PAGE/OrderedMessage/ORDERED_MESSAGE';
import CookiePopup from './components/Layout/Cookie/CookiePopup';
import Cookies from 'universal-cookie';

const UserContext = React.createContext<Hook<UserType>>(null)

function App() {
   const [user, setUser] = React.useState<HookLoad<UserType>>(DEFAULTSTATE)
   const hasConfirmedCookie: boolean = !!new Cookies().get('cookie')

   // GET LOGGED USER OR NULL
   React.useEffect(() => {
      const init = async () => {
         const l = new LoadingCss('')
         l.defaultStyleCircle()
         l.append(document.body)

         try {
            const data = await Fetches.mix<{ user: UserType | null }>(process.env.REACT_APP_API_USER_IS_USER_LOGGED!, 'GET')
            setUser({
               finished: true,
               data: data.json.user
            })
         }
         catch(err: any) { window.location.pathname = '/error' }
         finally { l.remove() }
      }
      init()
   }, [])

   if(user.finished)
   return (
      <div className="App">

         <UserContext.Provider value={ user.data }>

            <Router>

               <Routes>

                  <Route path='/' element={ <MAIN_PAGE /> } />
                  <Route path='/terms-and-conditions' element={ <T_AND_C /> } />
                  <Route path='/contact' element={ <CONTACT /> } />

                  <Route path='/log-in' element={ <LOGIN_PAGE /> } />
                  <Route path='/register' element={ <REGISTER_PAGE /> } />

                  <Route path='/profile' element={ <PROFILE_PAGE /> } />
                  
                  <Route path='/basket'>

                     <Route path='' element={ <USERS_BASKET /> } />
                     <Route path='conclusion' element={ <BASKET_CONCLUSION /> } />
                     <Route path='conclusion/final' element={ <ORDERED_MESSAGE /> } />

                  </Route>

                  <Route path='/search/:type/:query' element={ <SEARCH_PAGE /> } />

                  <Route path='/product/:id' element={ <PRODUCT_PAGE /> } />

                  <Route path={ process.env.REACT_APP_ADMIN_URL } element={ <ADMIN_LOGIN /> } />

                  <Route path='/error' element={ <ERROR_PAGE /> } />

               </Routes>

            </Router>

         </UserContext.Provider>

         <ArrowTop />

         {
            !hasConfirmedCookie && <CookiePopup />
         }

      </div>
   );

   return (
      <BlankPage />
   )
}

export default App
export { UserContext }
