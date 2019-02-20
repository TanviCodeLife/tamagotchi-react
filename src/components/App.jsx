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
      character: null
    };
    this.handleAddingCharacter = this.handleAddingCharacter.bind(this);
  }

  handleAddingCharacter(character){
    this.setState({character: character});
  }

  render(){
    let visibleContent = null;
    if(this.state.character === null){
        visibleContent = <CharacterList onAddingCharacter={this.handleAddingCharacter}/>;
    } else {
      visibleContent = <Tamagotchi />;
    }
    return (
      <div>
        <Header/>
        {visibleContent}
      </div>
    );
  }

}

export default App;
