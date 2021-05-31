import './App.css';
import {Switch,Route} from 'react-router-dom'
import { HomeView } from './Views/HomeView';
import { SignupView } from './Views/SignupView';
import { LoginView } from './Views/LoginView';
function App() {
  return (
    <div className="App">
        <Switch>
            <Route exact path='/'>
                <HomeView user={null}/>
            </Route>
            <Route exact path='/signin'>
                <LoginView />
            </Route>
            <Route exact path='/signup'>
                <SignupView user={null}/>
            </Route>
        </Switch>
    </div>
  );
}

export default App;
