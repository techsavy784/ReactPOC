import React, { Component } from 'react';
import './main-page.css';
import HEADER from './header';
import RaceFilter from './race-filter';
import SearchResults from '../search-results';
import RaceDetail from '../race';
import Moment from 'react-moment';
import icon from './icon1.JPG';

class App extends Component {
  constructor(props) {
    super(props);
  this.state = {
    result: [],
    isLoading: false,
  };
}

  componentDidMount() {
    this.setState({ isLoading: true });
    this.fetchDataFromAPI();
  }

  fetchDataFromAPI = () => {
    fetch('https://s3-ap-southeast-2.amazonaws.com/bet-easy-code-challenge/next-to-jump')
    .then(rsp => rsp.json())
    .then(jsonResponseFromAPI => {
      this.jsonResponseFromAPI = jsonResponseFromAPI;   
      this.setState({ result:jsonResponseFromAPI.result, isLoading: false  });   
      this.determineUniqueRaces();
      console.log('parsed json', jsonResponseFromAPI);
    })
   .catch(error => this.setState({ error, isLoading: false }));
  }
  determineUniqueRaces = () => {
    const races = this.jsonResponseFromAPI.result
      ? Array.from(new Set(this.jsonResponseFromAPI.result.map(result => result.EventName)))
      : [];
      races.unshift(null);
    this.setState({ races });
  }
  filterRaces = (race) => {
    this.setState({ activeRace: null });
    const filteredRaces = this.jsonResponseFromAPI.result.filter((result) => result.EventName === race);
    this.setState({ filteredRaces });
    this.setState({ race });   
  }
  setActiveRace = (race) => {
    this.setState({ activeRace: race });
  }
  render() { 
    let activeComponent = null;
    if (this.state.race)
    activeComponent = <SearchResults race={this.state.race} 
      filteredHouses={this.state.filteredRaces} setActiveRace={this.setActiveRace} />;
    if (this.state.activeRace)
      activeComponent = <RaceDetail race={this.state.activeRace}/>;
    // if (!activeComponent)
    //   activeComponent = <FeaturedHouse house={this.state.featuredRace} />;
    const { result, isLoading  } = this.state; 

    const divStyle = {
      color: 'blue',     
      liststyleimage: 'url('+icon+')',
    };
    if (isLoading) {
      return <p>Loading ...</p>;
    } 

   
    return ( 
    <div>
         <div className="container">
           <HEADER />
            <RaceFilter races={this.state.races} filterRaces={this.filterRaces}/>
        </div>
        <div className="container">
          <div >     
           <ul >
           {result.map(result =>
           <li  key={result.EventID}> 
           <div className="row">           
             <div   className="col-sm">
              <h4 > {result.Venue.Venue}</h4>
            </div> 
             <div className="col-sm" style={divStyle}>
              <h4 >{result.EventName}</h4>
              <h4 style={{ color: "red" }} >
              <Moment fromNow>{result.AdvertisedStartTime}</Moment>            
              </h4>
            </div>
           </div>       

          </li>
        )}
      </ul>    
    </div>
    </div>
    </div>
    );
  }
}

export default App;
