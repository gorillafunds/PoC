import React from 'react';

// Zum Optimieren der 

export default (props) => (
    <div className="FundListItem">
            <div style={{display:`inline-block`, float: `left`}}>
                <h5>{props.name}</h5> 
                <h6>Contract Address: {props.id}</h6>
            </div>
            <div style={{display: `inline-block`, float: `right`}}>
                Platzhalter
            </div>
        </div>
  );