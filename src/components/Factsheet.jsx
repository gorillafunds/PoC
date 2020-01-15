import React from 'react';
import { toBigNumber } from '@melonproject/melonjs/utils/toBigNumber';
import FactSheetItem from "./FactSheetItem";

const EtherInWei = 1E18;

export default class Factsheet extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            value: this.caclulatePerformance('alltime'),
        }
        this.handleClick = this.handleClick.bind(this);
    }

    caculateValue(dateString){
        //console.log("Vergleich", dateString);
            const shareP = this.props.calculationshistory.filter(element => {    
                return element.x === dateString;
            });
        //console.log("shareP:",shareP);
        if(shareP.length !== 0){
            return (((toBigNumber(this.props.shareprice).dividedBy(toBigNumber(shareP[0].sharePrice)) - 1)*100-1).toFixed(1) + "%");
        } else {
            return "Not Available";
        }
    }

    caclulatePerformance(time){

        //console.log(this.props);
        let today = new Date();
        //let day = today.toLocaleDateString();
        
        let dayMinusWeek = new Date(today.setDate(today.getDate() - 7));
        let dayWeek = dayMinusWeek.toLocaleDateString();
               
        let dayMinusMonth =  new Date(today.setDate(today.getDate() - 23));
        let dayMonth = dayMinusMonth.toLocaleDateString();
        
        let dayMinusYear =  new Date(today.setDate(today.getDate()-335));
        let dayYear =  dayMinusYear.toLocaleDateString();
        
        let dayMinusYTD = new Date(new Date().getFullYear(), 0, 1);
        let dayYTD = dayMinusYTD.toLocaleDateString();


        switch(time){
            case 'alltime':
                return ((this.props.shareprice/this.props.calculationshistory[0].sharePrice - 1)*100).toFixed(1)+"%";
            case 'year':
                return this.caculateValue(dayYear);
            case 'ytd':
                return this.caculateValue(dayYTD);
            case 'month':
                return this.caculateValue(dayMonth);
            case 'week':
                return this.caculateValue(dayWeek);
            default: 
                return ((toBigNumber(this.props.shareprice).dividedBy(toBigNumber(this.props.calculationshistory[0].sharePrice)) - 1)*100).toFixed(1)+"%"; 
        }
    }
   
    handleClick(time){
    
        switch(time){
            case 'alltime':
                this.setState({value: this.caclulatePerformance(time)});
                return  this.caclulatePerformance(time); 
            case 'year':
                this.setState({value: this.caclulatePerformance(time)});
                return  this.caclulatePerformance(time); 
            case 'ytd':
                this.setState({value: this.caclulatePerformance(time)});
                return  this.caclulatePerformance(time); 
            case 'month':
                this.setState({value: this.caclulatePerformance(time)});
                return  this.caclulatePerformance(time); 
            case 'week':
                this.setState({value: this.caclulatePerformance(time)});
                return  this.caclulatePerformance(time); 
            default: 
                this.setState({value: this.caclulatePerformance(time)});
                return  this.caclulatePerformance(time); 
        } 
    }

    render(){

        return (
        <div className="Factsheet content-element">

            <div className="FundTitle">
                <div className="FundRow">
                    <div className="FundRowItemLeft CenterItem">
                        <h4>Factsheet</h4>
                    </div>
                    <div className="FundRowItemRight CenterItem">
                        <h4>{this.props.fundname}</h4>
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
                        <FactSheetItem shareprice={this.props.shareprice} accountingContractAddress={this.props.accountingContractAddress} aum={false} totalsupply={this.props.totalsupply}/>
                        </h6>
                    </div>
                    <div className="FundRowItemRight CenterItem">
                        <h6>
                           <FactSheetItem shareprice={this.props.shareprice} accountingContractAddress={this.props.accountingContractAddress} aum={true} totalsupply={this.props.totalsupply}/>

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
                            {(Number(this.props.managementfee)/EtherInWei*100).toFixed(1)}%
                        </h5>
                    </div>
                    <div className="FundRowItemRight CenterItem">
                        <h5>
                            {(Number(this.props.performancefee)/EtherInWei*100).toFixed(1)}%
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
                            <div className="PerformanceButton CenterItem" id="alltime" onClick={() => this.handleClick('alltime')}>
                                All Time
                            </div>
                            <div className="PerformanceButton CenterItem"  id="year" onClick={() => this.handleClick('year')}>
                                    Year
                            </div>
                            <div className="PerformanceButton CenterItem"  id="ytd" onClick={() => this.handleClick('ytd')}>
                                    YTD
                            </div>
                            <div className="PerformanceButton CenterItem"  id="month" onClick={() => this.handleClick('month')}>
                                    Month
                            </div>
                            <div className="PerformanceButton CenterItem"  id="week" onClick={() => this.handleClick('week')}>
                                    Week
                            </div>
                        </div>
                    </div>
                </div>
                <div className="FundRow">
                    <div className="TwoColumnsValue CenterItem">
                        <h6>
                            {this.state.value}
                        </h6>
                    </div>
                </div>
            </div>
        </div>
        )   
    }
}