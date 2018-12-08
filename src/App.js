import React, {Component} from 'react';
import Table from './Table';
import Form from './Form';
import ExampleApi from './Api';

class App extends Component {
  state = {
    characters: []
  };

  removeCharacter = index => {
    const {characters} = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      })
    })
  }

  handleSubmit = character => {
    this.setState({
      characters: [
        ...this.state.characters,
        character
      ]
    });
  }

  render() {
    const {characters} = this.state
    return (
      <div className='container'>
        <h3>Example Props & State</h3>
        <Table characterData={characters} removeCharacter={this.removeCharacter}/>
        <Form handleSubmit={this.handleSubmit}/>
        <hr/>
        <h3>Example Fetch API</h3>
        <ExampleApi/>
      </div>
    )
  }
}

export default App;