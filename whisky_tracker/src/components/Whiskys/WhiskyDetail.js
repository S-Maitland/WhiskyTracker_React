import React from 'react';
import Whisky from './Whisky';
import Loading from '../Loading';

const WhiskyDetail = (props) => {
  if (!props.whisky){
    return (
      <Loading />
    )
  }

  const handleDeleteClick = () => {
    props.onDelete(props.whisky.id);
  }

    return(
      <div className ="component">
        <Whisky whisky={props.whisky} />
        <br/>
        <p>Distillery: {props.whisky.distillery.name}</p> <p>Region: {props.whisky.distillery.region}</p>
        <button onClick={handleDeleteClick}>Delete Whisky</button>
      </div>
    )
  }

export default WhiskyDetail;
