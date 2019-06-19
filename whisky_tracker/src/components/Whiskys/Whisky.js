import React from 'react';
import {Link} from 'react-router-dom';
import Loading from '../Loading';

const Whisky = ({whisky}) => {
  if(!whisky){
    return(
      <Loading />
    )
  }

  const url ="/whiskys/" + whisky.id;

  return(
    <React.Fragment>
      <Link to={url} className="name">
        {whisky.name} {whisky.age} {whisky.year}
      </Link>
    </React.Fragment>
  )
}
export default Whisky;
