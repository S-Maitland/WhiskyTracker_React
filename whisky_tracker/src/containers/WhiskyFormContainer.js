import React, {Component} from 'react';
import Request from '../helpers/request';
import Loading from '../components/Loading'

class WhiskyFormContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      distilleries: [],
      name: "",
      age: "",
      year: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleAge = this.handleAge.bind(this);
    this.handleYear = this.handleYear.bind(this);
  }

  componentDidMount() {
    const request = new Request();
    request.get('/api/distilleries').then((data) => {
      console.log("bguabguarbg");
      this.setState({distilleries: data._embedded.distilleries})
    })
  }

  handleName(event){
    this.setState({name: event.target.value})
  }

  handleAge(event){
    this.setState({age: event.target.value})
  }

  handleYear(event){
    this.setState({year: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
    const newWhisky = {
      name: this.state.name,
      age: this.state.age,
      year: this.state.year,
      distillery: event.target.distillery.value
    }
    this.props.handleWhiskyPost(newWhisky);
  }

  render(){

    if (!this.state.distilleries.length === 0){
      return <Loading />
    }

    const distilleryOptions = this.state.distilleries.map((distillery, index) => {
      return <option key={index} value={distillery._links.self.href}>{distillery.name}</option>
    })

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Name" name="name" onChange={this.handleName} value={this.state.name} />
          <input type="number" placeholder="Age" name="age" onChange={this.handleAge} value={this.state.age}/>
          <input type="text" placeholder="year" name="year" onChange={this.handleYear} value={this.state.year} />
          <select name="distillery">
            {distilleryOptions}
          </select>
          <button type="submit">Save</button>
        </form>
      </div>
    )
  }
}

export default WhiskyFormContainer;
