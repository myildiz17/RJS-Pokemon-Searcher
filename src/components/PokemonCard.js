import React from "react";
import { Card } from "semantic-ui-react";

class PokemonCard extends React.Component {
  constructor() {
    super();
    this.state = {
      toggle: true,
    };
  }

  handleToggle = () => {
    // const newToggle = !this.state.toggle
    // this.setState({
    //   toggle: newToggle
    // })

    this.setState(prev=>{
      return{
        toggle: !prev.toggle
      }
    })
  };

  render() {
    const { name, hp, sprites } = this.props.pok;
    return (
      <Card>
        <div onClick={this.handleToggle}>
          <div className="image">
            {this.state.toggle ? (
              <img src={sprites.front} alt="oh no!" />
            ) : (
              <img src={sprites.back} alt="oh no!" />
            )}
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp}
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;
