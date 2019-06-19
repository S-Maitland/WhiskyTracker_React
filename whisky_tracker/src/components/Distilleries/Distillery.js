import React from 'react';
import {Link} from 'react-router-dom';
import Loading from '../Loading';

const Distillery = ({distillery}) => {
  if(!distillery){
    return(
      <Loading />
    )
  }
  const url ="/distilleries/" + distillery.id;

  return(
    <React.Fragment>
      <Link to={url} className="name">
        {distillery.name} {distillery.region}
      </Link>
    </React.Fragment>
  )
}
export default Distillery;
