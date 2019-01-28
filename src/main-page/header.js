import React from 'react';
import BetEasyLogo from './BetEasyLogo.jpg';


  
const Header = (props) => (
    <header className="row">
        <div className="col-md-3">
            <img src={BetEasyLogo} className="logo" alt="logo" />
        </div>
        
        
    </header>
);

export default Header;