import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import WhiskyController from './WhiskyController';
import DistilleryController from './DistilleryController';
import NavBar from '../NavBar';

const MainController = () => {

  return(
    <div>
      <Router>
        <React.Fragment>
          <NavBar>
            <Switch>
              <Route path="/whiskys" component="{WhiskyController}"/>
              <Route path="/distilleries" component="{DistilleryController}"/>
            </Switch>
          </NavBar>
        </React.Fragment>
      </Router>
    </div>
  )
}

export default MainController;
