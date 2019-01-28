import React from 'react';

const SearchResultsRow = (props) => {
    const setActive = (e) => {
        e.preventDefault();
        props.setActiveHouse(props.house);
    };

    return <tr onClick={setActive}>
        <td>{props.race.EventID}</td>
        <td>{props.race.MasterEventID}</td>
        <td>{props.race.EventTypeDesc}</td>
        <td>{props.race.Venue.Venue}</td>
    </tr>
};

export default SearchResultsRow;