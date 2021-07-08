
import LandingPage from './View/LandingPage';
import SigninPage from './View/SigninPage';
import SignupPage from './View/SignupPage';
import HomePage from './View/HomePage';
import NavBar from './View/Modules/NavBar'
import Responsive from './View/Modules/Responsive'
import PrivateRoute from './View/Modules/PrivateRoute'
import {AnimatePresence} from 'framer-motion'
import {Route,Switch,useLocation} from 'react-router-dom'
import AuthProvider from './View/Modules/AuthProvider'
import {variants} from './View/Modules/setup'
import NavBarSetup from './View/Modules/NavBarSetup';
function App() {
  const location = useLocation()
  return (
      <AnimatePresence exitBeforeEnter={false}>
          <Responsive>
            <AuthProvider>
              <NavBarSetup>
                <NavBar/>
                <Switch location={location} key={location.key}>  
                    <Route exact path="/" component={()=><LandingPage variants={variants}/>}/>
                    <Route path="/signin" component={()=><SigninPage variants={variants}/>}/>
                    <Route path="/howtoregister?" component={LandingPage}/>
                    <Route path="/signup" component={()=><SignupPage variants={variants}/>}/>
                    <PrivateRoute exact path="/user/:id" component={()=><HomePage variants={variants}/>}/>
                </Switch>
              </NavBarSetup>
            </AuthProvider>
          </Responsive>
      </AnimatePresence>
  );
}

export default App;
