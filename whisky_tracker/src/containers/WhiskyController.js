import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../helpers/request';
import WhiskyList from '../components/Whiskys/WhiskyList';
import WhiskyDetail from '../components/Whiskys/WhiskyDetail'

class WhiskyController extends Component{
  constructor(props){
    super(props);
    this.state = {
      whiskys: []
    }
    this.findWhiskyById = this.findWhiskyById.bind(this);
  }

  componentDidMount(){
    const request = new Request();

    request.get('/api/whiskies')
    .then((data) => {
      this.setState({whiskys: data._embedded.whiskies});
    }
  )
}

findWhiskyById(id){
  return this.state.whisky.find((whisky) => {
    return whisky.id === parseInt(id);
  })
}

render(){
  return(
    <Router>
      <React.Fragment>
        <Switch>
          <Route exact path="/whiskies/" render={() => <WhiskyList
            whiskys={this.state.whiskys} />} />
            <Route exact path="/whiskies/:id" render={(props) => {
              const id = props.match.params.id;
              const whisky = this.findWhiskyById(id);
              return <WhiskyDetail whisky={whisky} />
            }} />
          </Switch>
        </React.Fragment>
      </Router>
    )
  }
}

export default WhiskyController;
