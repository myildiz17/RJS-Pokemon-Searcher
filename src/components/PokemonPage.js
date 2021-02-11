import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  constructor(){
    super()
    this.state={
      pokemon: []
    }
  }

  componentDidMount(){
    fetch( "http://localhost:3000/pokemon")
    .then(res=>res.json())
    .then(pokemon=>{
      this.setState({
        pokemon
      })
    })
  }
  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search />
        <br />
        <PokemonCollection  pokemon={this.state.pokemon}/>
      </Container>
    )
  }
}

export default PokemonPage
