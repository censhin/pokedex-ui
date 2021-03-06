import React from "react";
import { Link } from "react-router";
import Infinite from "react-infinite";
import { getPokemon } from "./api";

class PokemonList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pokemon: [] };
  }
  
  componentWillMount() {
    getPokemon().then((pokemon) => {
      this.setState({ pokemon: pokemon });
    });
  }

  render() {
    const pokemon = this.state.pokemon;

    const css = {
      liStyle: {
        "display": "inline-block"
      },
      spanStyle: {
        "display": "block",
        "textAlign": "center"
      }
    };

    return(
      <div>
        <ul>
          <Infinite containerHeight={500} elementHeight={90} useWindowAsScrollContainer>
            {
              pokemon.map(function(p){
                let imgSrc = `./img/${p.number}.png`;
                let pokeSrc = `/pokemon/${p.name}`;
                return (
                  <li key={p.number} style={css.liStyle}>
                    <Link to={pokeSrc}>
                      <img src={imgSrc} />
                      <span style={css.spanStyle}>{p.name}</span>
                    </Link>
                  </li>
                );
              })
            }
          </Infinite>
        </ul>
      </div>
    );
  }
}

export default PokemonList;
