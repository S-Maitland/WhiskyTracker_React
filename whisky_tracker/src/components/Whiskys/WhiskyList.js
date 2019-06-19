import React from 'react';
import Whisky from './Whisky';
import Loading from '../Loading';


const WhiskyList = (props) => {
  if(props.whiskys.length === 0){
    return(
      <Loading />
    )
  }
  const allWhiskys = props.whiskys.map((whisky) => {
    return(
      <li key={whisky.id} className="component-item">
        <div className="component">
          <Whisky whisky={whisky} />
        </div>
      </li>
    )
  })
  
  return(
    <ul className="component-list">
      {allWhiskys}
    </ul>
  )
}

export default WhiskyList;
