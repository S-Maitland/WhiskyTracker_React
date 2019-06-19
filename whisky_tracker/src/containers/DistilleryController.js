import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../helpers/request';
import DistilleryList from '../components/Distilleries/DistilleryList';
import DistilleryDetail from '../components/Distilleries/DistilleryDetail';
import DistilleryFormContainer from './DistilleryFormContainer';

class DistilleryController extends Component{
  constructor(props){
    super(props);
    this.state = {
      distilleries: []
    }
    this.findDistilleryById = this.findDistilleryById.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleDistilleryPost = this.handleDistilleryPost.bind(this);
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
  return this.state.distilleries.find((distillery) => {
    return distillery.id === parseInt(id);
  })
}

handleDelete(id){
  const request = new Request();
  const url = "/api/distilleries/" + id;
  request.delete(url)
  .then(() => {
    window.location = "/distilleries";
  });
}

handleDistilleryPost(distillery){
  const request = new Request();
  request.post("/api/distilleries/", distillery)
  .then(() => {
    window.location = "/distillery";
  })
}

render(){
  return(
    <Router>
      <React.Fragment>
        <Switch>
          <Route exact path="/distilleries/" render={() => <DistilleryList
            distilleries={this.state.distilleries} />} />

            <Route exact path="/distilleries/new" render={() => {
              return <DistilleryFormContainer handleDistilleryPost={this.handleDistilleryPost} />
            }} />

            <Route exact path="/distilleries/:id" render={(props) => {
              const id = props.match.params.id;
              const distillery = this.findDistilleryById(id);
              return <DistilleryDetail distillery={distillery} onDelete={this.handleDelete}/>
            }} />
          </Switch>
        </React.Fragment>
      </Router>
    )
  }
}

export default DistilleryController;
