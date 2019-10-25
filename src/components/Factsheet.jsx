import React from 'react';

const EtherInWei = 1E18;

// Zum Optimieren der 

export default (props) => (
    <div className="Factsheet content-element">

        <div className="FundTitle">
            <div className="FundRow">
                <div className="FundRowItemLeft CenterItem">
                    <h4>Factsheet</h4>
                </div>
                <div className="FundRowItemRight CenterItem">
                    <h4>{props.fundname}</h4>
                </div>
            </div> 
        </div>

        <div className="FundValues">
        <div className="FundRow">
                <div className="TwoColumns CenterItem">
                    <h4>Fund-Values</h4>
                </div>
            </div>
            <div className="FundRow">
                <div className="FundRowItemLeft CenterItem">
                    <h6>
                        AUM:
                    </h6>
                </div>
                <div className="FundRowItemRight CenterItem">
                    <h6>
                        Share-Price
                    </h6>
                </div>
            </div>
            <div className="FundRow">
                <div className="FundRowItemLeft CenterItem">
                    <h6>
                        {(props.shareprice/EtherInWei*props.totalsupply/EtherInWei).toFixed(2)}
                    </h6>
                </div>
                <div className="FundRowItemRight CenterItem">
                    <h6>
                        {(props.shareprice/EtherInWei).toFixed(2)}
                    </h6>
                </div>
            </div>
        </div>

        <div className="FeeStructure">
            <div className="FundRow">
                <div className="TwoColumns CenterItem">
                    <h4>Fee-Structure</h4>
                </div>
            </div>
            <div className="FundRow">
                <div className="FundRowItemLeft CenterItem">
                    <h5>
                        Management-Fee:
                    </h5>
                </div>
                <div className="FundRowItemRight CenterItem">
                    <h5>
                        Performance-Fee:
                    </h5>
                </div>
            </div>
            <div className="FundRow">
                <div className="FundRowItemLeft CenterItem">
                    <h5>
                        {Number(props.managementfee)/EtherInWei*100}%
                    </h5>
                </div>
                <div className="FundRowItemRight CenterItem">
                    <h5>
                        {Number(props.performancefee)/EtherInWei*100}%
                    </h5>
                </div>
            </div>
        </div>


        <div className="FundPerformance">
            <div className="FundRow">
                <div className="TwoColumns CenterItem">
                    <h4>
                        Performance
                    </h4>
                </div>
            </div>
            <div className="FundRow">
                <div className="TwoColumns">
                    <div className="FundRowPerformanceButtons">
                        <div className="PerformanceButton CenterItem">
                            All Time
                        </div>
                        <div className="PerformanceButton CenterItem">
                                YTD
                        </div>
                        <div className="PerformanceButton CenterItem">
                                Year
                        </div>
                        <div className="PerformanceButton CenterItem">
                                Month
                        </div>
                        <div className="PerformanceButton CenterItem">
                                Week
                        </div>
                    </div>
                </div>
            </div>
            <div className="FundRow">
                <div className="TwoColumnsValue CenterItem">
                    <h6>
                        Value
                    </h6>
                </div>
            </div>
        </div>
    </div>
);