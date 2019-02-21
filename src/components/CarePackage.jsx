import React from 'react';
import PropTypes from 'prop-types';

function CarePackage(props){
  return(
    <div>
      <p>P-tag: {props.game[0].emoji}</p>
      <ul>
        {props.game.map((item) =>

        <li>{item.emoji}
          <p>P-tag-li: {item.emoji}</p>
        </li>

      )}
      </ul>

    </div>
  )
}

CarePackage.propTypes ={
  game: PropTypes.object
}


export default CarePackage;
