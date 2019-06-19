import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../helpers/request';
import DistilleryList from '../components/Distilleries/DistilleryList';
import DistilleryDetail from '../components/Distilleries/DistilleryDetail'

class DistilleryController extends Component{
  constructor(props){
    super(props);
    this.state = {
      distilleries: []
    }
    this.findDistilleryById = this.findDistilleryById.bind(this);
  }

  componentDidMount(){
    const request = new Request();

    request.get('/api/distilleries')
    .then((data) => {
      this.setState({distilleries: data._embedded.distilleries});
    }
  )
}

findDistilleryById(id){
  return this.state.distillery.find((distillery) => {
    return distillery.id === parseInt(id);
  })
}

render(){
  return(
    <Router>
      <React.Fragment>
        <Switch>
          <Route exact path="/distilleries/" render={() => <DistilleryList
            distilleries={this.state.distilleries} />} />
            <Route exact path="/distilleries/:id" render={(props) => {
              const id = props.match.params.id;
              const distillery = this.findDistilleryById(id);
              return <DistilleryDetail distillery={distillery} />
            }} />
          </Switch>
        </React.Fragment>
      </Router>
    )
  }
}

export default DistilleryController;
