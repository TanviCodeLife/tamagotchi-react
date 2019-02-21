import React from 'react';
import PropTypes from 'prop-types';
import CarePackage from './CarePackage';

function GamePlay(props){
  return(
    <div>
      <CarePackage game={props.pantry} />
      <CarePackage game={props.play} />
      <CarePackage game={props.naps} />
    </div>
  )
}

GamePlay.propTypes ={
  pantry: PropTypes.array,
  naps: PropTypes.array,
  play: PropTypes.array
}

export default GamePlay;
