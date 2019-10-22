import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from 'gatsby';
import Web3Address from "./Web3Address";
//import { invest, redeem } from "../web3/melonCalls";
//import web3dialog from "./web3dialog";
import web3 from "../web3/web3";

const account = web3.currentProvider.selectedAddress;

function invest(){
    console.log("Click Invest");
    openInvestmentForm();
}

function redeem(){
    console.log("Click Redeem");
    openRedeemForm();
}

function openInvestmentForm(){
    document.getElementById("InvestForm").style.display = "block";
}

function closeInvestmentForm(){
    document.getElementById("InvestForm").style.display = "none";
}

function openRedeemForm(){
    document.getElementById("RedeemForm").style.display = "block";
}

function closeRedeemForm(){
    document.getElementById("RedeemForm").style.display = "none";
}

function investAmount(ether){
    alert("Invested");
    alert(ether);
    //alert(document.getElementById("ether").value);
    //alert(document.getElementById("gasI").value);
    //alert(ether);
    //alert(gas);
}

function redeemAmount(){
    alert("Redeemed");
    //alert(document.getElementById("shares").value);
    //alert(document.getElementById("gasR").value);
   // alert(shares);
    //alert(gas);
}

/*function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      //if present, the header is where you move the DIV from:
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      //otherwise, move the DIV from anywhere inside the DIV:
      elmnt.onmousedown = dragMouseDown;
    }
  
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  
    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
*/


export default (props) => (
    
    <StaticQuery
        query={graphql`
            query MyNewQuery {
                allSitePage(filter: {path: {regex: "/0x.*/"}}, limit: 10) {
                    edges {
                        node {
                            path
                        }
                    }
                }
             }`
        }
        
        render={data => (
            <div className="Menu DynamicMenu">
                <Web3Address/>
                <div className="InvestRedeemButtons">
                    <div className="base_button InvestButton" onClick={() => invest(props.fundaddress)}><h3>Invest</h3></div>
                    <div className="base_button RedeemButton" onClick={() => redeem(props.fundaddress)}><h3>Redeem</h3></div>
                </div>
                    <div class="form-popup" id="InvestForm">
                        <form action={investAmount} class="form-container" method="POST">
                            <h1 display={{color: 'black'}}>Invest in the Fund</h1>
                            <h6>
                            Are you sure that you want to invest in the fund {props.fundaddress}?
                            </h6>
                            <label for="Crypto"><b>Ether</b></label>
                            <input type="text" id="ether" placeholder="Enter ETH-Amount" name="ether" required/>

                            <label for="gas"><b>Gasprice</b></label>
                            <input type="text" id="gas" placeholder="Enter Gasprice" name="gasI" required/>

                            <button type="submit" class="btn" onClick={() => investAmount(document.getElementById("ether").value)}>Invest</button>
                            <button type="button" class="btn cancel" onClick={closeInvestmentForm}>Close</button>
                        </form>
                    </div>

                    <div class="form-popup" id="RedeemForm">
                        <form action={investAmount} class="form-container">
                            <h1>Redeem Shares</h1>
                            <h6>
                            Are you sure that you want to redeem shares from the fund {props.fundaddress}?
                            </h6>

                            <label for="shares"><b>Shares</b></label>
                            <input type="text" id="shares" placeholder="Enter Shares" name="shares" required/>

                            <label for="gas"><b>Gasprice</b></label>
                            <input type="text" id="gas" placeholder="Enter Gasprice" name="gasR" required/>

                            <button type="submit" class="btn" onClick={() => redeemAmount()}>Redeem</button>
                            <button type="button" class="btn cancel" onClick={closeRedeemForm}>Close</button>
                        </form>
                    </div>
                
               
                <div className="ExploreTheFundsLink">
                    <Link to="/fundlistpage" style={{ color: `whitesmoke`,padding: `none`, backgroundImage: `none`, float: `right` }}>
                        <h3 syle={{float: `left`}}>{props.title}</h3> 
                    </Link>
                </div>
            </div>
        )}
    />
); 

