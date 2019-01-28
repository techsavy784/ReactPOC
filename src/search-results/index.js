import React, { Component } from 'react';
import SearchResultsRow from './search-results-row';

const SearchResults = (props) => {
  const raceRows = props.filteredRaces.map(h => 
    <SearchResultsRow key={h.EventID.toString()} race={h} 
        setActiveRace={props.setActiveRace} />);
  return (
    <div className="mt-2" >
      <h4>Results for {props.race}:</h4>
      <table className="table table-hover">
        <tbody>
          {raceRows}
        </tbody>
      </table>
    </div>
  );
}

export default SearchResults;
