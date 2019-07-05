import React from 'react';
import Main from './Main'
import History from './History'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


class App extends React.Component{

    render() {
        return (
            <Router>
            <div className="ui secondary  menu">
                  <Link className="item" to="/">Главная</Link>
                  <Link className="item" to="/history">История</Link>
                  </div>
              <hr />
              <Switch>
                <Route exact path="/" render={() => <Main />} />
                <Route exact path="/history" render={() => <History />} />
              </Switch>
          
          </Router>
        )
    }
}

export default App;