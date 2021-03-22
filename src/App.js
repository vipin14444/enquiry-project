import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './screens/Landing';
import './App.scss';
import CreateEmployeeProfile from './screens/CreateEmployeeProfile';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Switch>

          <Route exact path={'/'} component={Landing} />
          <Route exact path={'/employee-profile'} component={CreateEmployeeProfile} />

        </Switch>

      </BrowserRouter>

      {/* <Header />
      <Content />
      <Footer /> */}
    </div>
  );
}

export default App;
