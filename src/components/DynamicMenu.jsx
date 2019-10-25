import React from "react"
import { Link } from "gatsby"
import Web3Address from "./Web3Address";
import Form from "./Form";

function investAction(){
    console.log("Click Invest");
    openInvestmentForm();
}

function redeemAction(){
    console.log("Click Redeem");
    openRedeemForm();
}

function openInvestmentForm(){
    document.getElementById("InvestForm").style.display = "block";
}

function openRedeemForm(){
    document.getElementById("RedeemForm").style.display = "block";
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
    
            <div className="Menu DynamicMenu">
                <Web3Address/>
                {console.log("Dynamic Menu",props)}

                <div className="InvestRedeemButtons">
                    <div className="base_button InvestButton" onClick={investAction}><h3>Invest</h3></div>
                    <div className="base_button RedeemButton" onClick={redeemAction}><h3>Redeem</h3></div>
                </div>
                <div className="ExploreTheFundsLink">
                <Form fundAddress={props.fundAddress} participationContractAddress={props.participationContractAddress} allowedAssets={props.allowedAssets}/>
                    <Link to="/fundlistpage" style={{ color: `whitesmoke`,padding: `none`, backgroundImage: `none`, float: `right` }}>
                        <h3 syle={{float: `left`}}>{props.title}</h3> 
                    </Link>
                </div>
            </div>
)     

/*

<button type="submit" class="btn" onClick={() => investAmount(this.getElementById("ether").value)}>Invest</button>
<option value="bat-address" label="BAT">BAT</option>
*/
