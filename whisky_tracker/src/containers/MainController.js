import React from 'react';
import {BrowserRoute as Router, Route, Switch} from 'react-router-dom';
import WhiskyController from './WhiskyController';

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
