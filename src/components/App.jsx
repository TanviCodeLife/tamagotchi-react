import React from 'react';
import Header from './Header';
import CharacterList from './CharacterList';
import Tamagotchi from './Tamagotchi';
import GamePlay from './GamePlay';
import Moment from 'moment';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      character: {},
      pantry: [],
      play: [],
      naps: []
    };
    this.handleAddingCharacter = this.handleAddingCharacter.bind(this);
    this.updateLifeTime = this.updateLifeTime.bind(this);
  }

  componentDidMount(){
    this.lifeTimer = setInterval(() =>
      this.updateLifeTime(),
      3000
    );
  }

  componentWillUnmount(){
    clearInterval(this.lifeTimer);
  }

  componentDidUpdate(){
      if((this.state.character.hunger === 0) && (this.state.character.sleep === 0)){
        clearInterval(this.lifeTimer);
      }
  }

  handleAddingCharacter(character, pantry, naps, play){
    this.setState({character: character});
    this.setState({pantry: pantry});
    this.setState({naps: naps});
    this.setState({play: play});
  }

  updateLifeTime(){
    let newCharacter = this.state.character;
    newCharacter.hunger--;
    newCharacter.sleep--;
    this.setState({character: newCharacter});
  }

  render(){
    let visibleContent = null;
    if(this.state.character.name === undefined){
        visibleContent = <CharacterList onAddingCharacter={this.handleAddingCharacter}/>;
    } else {
      visibleContent =
      <div>
        <Header onSetCharacter={this.state.character}/>
        <GamePlay pantry={this.state.pantry}
          play={this.state.play}
          naps={this.state.naps}
          />
        <Tamagotchi />
      </div>;
    }
    return (
      <div>
        {visibleContent}
      </div>
    );
  }

}

export default App;
