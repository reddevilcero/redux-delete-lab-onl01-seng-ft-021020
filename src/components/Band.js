import React, { Component } from "react";

class Band extends Component {
  render() {
    const { name, id } = this.props.band;
    return (
      <li>
        {name}

        <span>
          <button
            onClick={() => this.props.deleteBand(id)}
          >
            Delete
          </button>
        </span>
      </li>
    );
  }
}

export default Band;
