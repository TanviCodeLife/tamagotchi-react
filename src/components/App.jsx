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
      character: null,
      hunger: 10,
      sleep: 10,
      happy: "happy"
    };
    this.handleAddingCharacter = this.handleAddingCharacter.bind(this);
  }

  handleAddingCharacter(character){
    this.setState({character: character});
  }

  // handleHunger(){
  //
  //   this.setState({})
  // }

  render(){
    let visibleContent = null;
    if(this.state.character === null){
        visibleContent = <CharacterList onAddingCharacter={this.handleAddingCharacter}/>;
    } else {
      visibleContent = <Tamagotchi />;
    }
    return (
      <div>
        <Header happy={this.state.happy} hunger={this.state.hunger} sleep={this.state.sleep}/>
        {visibleContent}
      </div>
    );
  }

}

export default App;
