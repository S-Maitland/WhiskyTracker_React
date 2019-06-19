import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../helpers/request';
import WhiskyList from '../components/Whiskys/WhiskyList';
import WhiskyDetail from '../components/Whiskys/WhiskyDetail'
import WhiskyFormContainer from './WhiskyFormContainer';

class WhiskyController extends Component{
  constructor(props){
    super(props);
    this.state = {
      whiskys: []
    }
    this.findWhiskyById = this.findWhiskyById.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleWhiskyPost = this.handleWhiskyPost.bind(this);
  }

  componentDidMount(){
    const request = new Request();
    request.get("/api/whiskies")
    .then((data) => {
      this.setState({whiskys: data._embedded.whiskies});
    }
  )
}

findWhiskyById(id){
  return this.state.whiskys.find((whisky) => {
    return whisky.id === parseInt(id);
  })
}

handleDelete(id){
  const request = new Request();
  const url = "/api/whiskies/" + id;
  request.delete(url)
  .then(() => {
    window.location = "/whisky";
  });
}

handleWhiskyPost(whisky){
  const request = new Request();
  request.post("/api/whiskies/", whisky)
  .then(() => {
    window.location = "/whisky";
  })
}

render(){
  return(
    <Router>
      <React.Fragment>
        <Switch>
          <Route exact path="/whiskys" render={() => <WhiskyList
            whiskys={this.state.whiskys} />} />

            <Route exact path="/whiskys/new" render={() => {
              return <WhiskyFormContainer handleWhiskyPost={this.handleWhiskyPost} />
            }} />

            <Route exact path="/whiskys/:id" render={(props) => {
              const id = props.match.params.id;
              const whisky = this.findWhiskyById(id);
              return <WhiskyDetail whisky={whisky}
                onDelete={this.handleDelete} />
            }} />
          </Switch>
        </React.Fragment>
      </Router>
    )
  }
}

export default WhiskyController;
