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
        <li>{props.hunger}</li>
        <li>{props.sleep}</li>
        <li>{props.happy}</li>
      </ul>
    </div>
  );
}

Header.propTypes = {
  hunger: PropTypes.number.isRequired,
  sleep: PropTypes.number.isRequired,
  happy: PropTypes.string.isRequired
}

export default Header;
