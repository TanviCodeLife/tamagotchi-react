import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import { v4 } from 'uuid';

function CharacterList(props){
  let _chosenCharacter = null

  function handleChoosenCharacter(event){
    event.preventDefault();
    props.onAddingCharacter({name: _chosenCharacter.value, hunger: 10, sleep: 10, happy: true, lifeTime: new Moment(), id: v4()},
    [{banana: '\u{1f34c}', score: 1, q: 4}, {stew: '\u{1f372}', score: 3, q: 2}, {apple: '\u{1f34e}', score: 2, q: 3}],
    {naps: '\u{1f31a}', score: 1, q: 10},
    [{bike: '\u{1f6b4}', score: 2, q: 4}, {book: '\u{1f4d5}', score: 1, q: 6}, {sun: '\u{1f31e}', score: 3, q: 3}]);
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
