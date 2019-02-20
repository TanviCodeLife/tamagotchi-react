import React from 'react';
import PropTypes from 'prop-types';

function CarePackage(props){

  // showfood(food){
  //   let foodArray = [];
  //   for(let i = 0; i < food; i++){
  //     if (food === 'banana'){
  //       foodArray.push(🍌)
  //     } else if (food === 'stew'){
  //       foodArray.push(🍲)
  //     }
  //   }
  // }
  console.log(props);

  return(
    <div>
      <ul>
      </ul>
    </div>
  )
}

CarePackage.propTypes ={
  pantry: PropTypes.array,
  naps: PropTypes.object,
  play: PropTypes.array
}

export default CarePackage;
