import React from 'react';
import Header from './Header';
import CharacterList from './CharacterList';
import Tamagotchi from './Tamagotchi';
import HealthButton from './HealthButton';
import Moment from 'moment';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      character: {}
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

  handleAddingCharacter(character){
    console.log(character)
    this.setState({character: character});
  }

  updateLifeTime(){
    let newCharacter = this.state.character;
    newCharacter.hunger--;
    newCharacter.sleep--;
    this.setState({character: newCharacter});
  }

  // handleHunger(){
  //
  //   this.setState({})
  // }

  render(){
    let visibleContent = null;

    if(this.state.character.name === undefined){
        visibleContent = <CharacterList onAddingCharacter={this.handleAddingCharacter}/>;
    } else {
      visibleContent = <Tamagotchi />;
    }
    return (
      <div>
        <Header onSetCharacter={this.state.character}/>
        {visibleContent}
      </div>
    );
  }

}

export default App;
