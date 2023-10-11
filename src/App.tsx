import './App.css';
import Menu from './Menu';
import { BrowserRouter, Route, Switch,Redirect } from 'react-router-dom'
import routes from './route-config';
import configureValidation from './Validations';

configureValidation();

function App() {

  return (
    <BrowserRouter forceRefresh>
      <Menu />
      <div className='container'>
        <Switch>
          {routes.map(route =>
            <Route key= {route.path} path={route.path} exact={route.exact}>
              <route.component />
            </Route>)}
            
        </Switch>
      </div>

    </BrowserRouter >
  )
}

export default App;
