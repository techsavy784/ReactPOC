import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RaceFilter from '../main-page/race-filter';

class race extends Component {
    state = { }

    

    render() { 
        const race = this.props.race;
        
        return (
        <div>
            <div className="row mt-2">
            <h5 className="col-md-12">{race.EventName}</h5>
            </div>
            <div className="row">
            <h3 className="col-md-12">{race.AdvertisedStartTime}</h3>
            </div>
            
            <div className="col-md-5">
                <p className="row">{race.Venue.Venue}</p>
                <p>{race.EventType.EventTypeID}</p>
              
               
            </div>
                 
        </div>
        )
    }
}
 
// RaceFilter.PropTypes ={race:PropTypes.object.isRequired}
export default race;