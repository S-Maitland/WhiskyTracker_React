import React from 'react';
import Distillery from './Distillery';
import Loading from '../Loading';

const DistilleryDetail = (props) => {
  if (!props.distillery){
    return (
      <Loading />
    )
  }

  const handleDeleteClick = () => {
    props.onDelete(props.distillery.id);
  }

  const allWhiskies = props.distillery.whiskies.map((whisky, index) => {
    return <li key={index}>{whisky.name}</li>
  })

  return(
    <div className ="component">
      <Distillery distillery={props.distillery} />
      <br/>
      <p>Distillery: {props.distillery.name}</p> <p>Region: {props.distillery.region}</p>
      <ul>
        {allWhiskies}
      </ul>
      <button onClick={handleDeleteClick}>Delete distillery</button>
    </div>
  )
}

export default DistilleryDetail;
