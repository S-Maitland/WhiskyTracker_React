import React from 'react';
import Distillery from './Distillery';
import Loading from '../Loading';

const DistilleryList = (props) => {
  if(!props.distilleries.length === 0){
    return(
      <Loading />
    )
  }

  const allDistilleries = props.distilleries.map((distillery) => {
    return(
      <li key={distillery.id} className="component-item">
        <div className="component">
          <Distillery distillery={distillery} />
        </div>
      </li>
    )
  })

  return(
    <ul className="component-list">
      {allDistilleries}
    </ul>
  )
}

export default DistilleryList;
