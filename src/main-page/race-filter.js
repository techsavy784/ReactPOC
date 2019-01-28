import React, { Component } from 'react';

class RaceFilter extends Component {
  state = {}

  onSearchChange = (e) => {
    const racename = e.target.value;
    this.props.filterRaces(racename);
  }

  render() {
    const search = this.state.search;
    const races = this.props.races || [];

    return (
      <div className="form-group row mt-3">
        <div className="offset-md-2 col-md-4">
          Select and Filter Race by Name:
        </div>
        <div className="col-md-4">
          <select className="form-control" value={search} onChange={this.onSearchChange}>
            {races.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>
    );
  }
}

export default RaceFilter;
