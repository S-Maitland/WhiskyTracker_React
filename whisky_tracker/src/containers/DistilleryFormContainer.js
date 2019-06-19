import React, {Component} from 'react';

class DistilleryFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      region: ""
    }
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleRegion = this.handleRegion.bind(this);
  }

  handleName(event){
    this.setState({name: event.target.value})
  }

  handleRegion(event){
    this.setState({region: event.target.value})
  }

   handleSubmit(event){
    event.preventDefault();
    const newDistillery = {
      name: this.state.name,
      region: this.state.region
    }
    this.props.handleDistilleryPost(newDistillery);
  }

  render(){
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
      <input type="text" placeholder="Distillery Name" name="name" onChange={this.handleName} value={this.state.name} />
      <input type="text" placeholder="Distillery Region" name="region" onChange={this.handleRegion} value={this.state.region} />
      <button type="submit">Save</button>
      </form>
      </div>
    )
  }
}

export default DistilleryFormContainer;
