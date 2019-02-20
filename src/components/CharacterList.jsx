import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import { v4 } from 'uuid';

function CharacterList(props){
  let _chosenCharacter = null

  function handleChoosenCharacter(event){
    event.preventDefault();
    props.onAddingCharacter({name: _chosenCharacter.value, hunger: 10, sleep: 10, happy: true, lifeTime: new Moment(), id: v4()});
  }

  return (
    <div>
      <form onSubmit={handleChoosenCharacter}>
        <select ref={(option) => {_chosenCharacter = option}}>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="rabbit">Rabbit</option>
          <option value="dinosaur">Dinosaur</option>
        </select>
        <button type="submit">Start the game!</button>
      </form>
    </div>
  )
}

CharacterList.propTypes = {
  onAddingCharacter: PropTypes.func
}

export default CharacterList;
