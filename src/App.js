
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import WeatherView from "./views/WeatherView";


function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route path = "/" exact component = {WeatherView}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
