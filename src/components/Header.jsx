import React from 'react';
import PropTypes from 'prop-types';

const headerStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly'
}

function Header(props){
  return (
    <div>
      <ul style={headerStyle}>
        <li>{props.onSetCharacter.hunger}</li>
        <li>{props.onSetCharacter.sleep}</li>
        <li>{props.onSetCharacter.happy}</li>
      </ul>
    </div>
  );
}

Header.propTypes = {
  onSetCharacter: PropTypes.object
}

export default Header;
