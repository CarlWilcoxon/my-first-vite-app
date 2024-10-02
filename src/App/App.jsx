import './App.css'
import Home from '../Home/Home'
import { Router, Link, Switch, Route } from 'react-router-dom'

function App() {

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>

            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
