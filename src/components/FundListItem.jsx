import React from 'react';
import IOSStats from '../../media/ios-stats.svg';

// Zum Optimieren der 

export default (props) => (
    <div className="FundListItem ">
            <div className="FundListItemName" style={{display:`inline-block`, float: `left`}}>
                <h5>{props.name}</h5> 
                <h6>Contract Address: {props.id}</h6>
            </div>
            <div className="Placeholder FundListItemDiagramm" style={{display: `inline-block`, float: `right`}}>
             <img src={IOSStats} style={{imageRendering:`auto` }}/>
            </div>
        </div>
  );