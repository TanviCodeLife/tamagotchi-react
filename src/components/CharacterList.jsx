import React from 'react';
import PropTypes from 'prop-types';

function CharacterList(props){
  let _chosenCharacter = null

  function handleChoosenCharacter(event){
    event.preventDefault();
    props.onAddingCharacter(_chosenCharacter.value)
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
