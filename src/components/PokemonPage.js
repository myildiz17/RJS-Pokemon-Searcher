import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

class PokemonPage extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemon: [],
      searchTerm: "",

    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
      .then((res) => res.json())
      .then((pokemon) => {
        this.setState({
          pokemon
          
        });
      });
  }

  search = (event) => {
    const term = event.target.value
    this.setState({
      searchTerm: term

    })
  };

  handleSubmit=(event)=>{
    event.preventDefault()
    const newName = event.target[0].value
    const newHp = event.target[1].value
    const newFront = event.target[2].value
    const newBack = event.target[3].value
    event.target.reset()

    const data = {
      name: newName,
      hp: newHp,
      sprites: {
        front:newFront,
        back: newBack
      }
    };

    fetch("http://localhost:3000/pokemon", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        const newPokemon = [...this.state.pokemon, data];
        this.setState({
          pokemon: newPokemon,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  render() {
    let updatedPokemon = this.state.pokemon.filter(pok => pok.name.includes(this.state.searchTerm))
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleSubmit={this.handleSubmit} />
        <br />
        <Search search={this.search} />
        <br />
        <PokemonCollection pokemon={updatedPokemon} />
      </Container>
    );
  }
}

export default PokemonPage;
