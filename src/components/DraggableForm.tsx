import React from 'react';
import Draggable from 'react-draggable';
import {getAccount} from './../web3/melonweb3';
 
export default class DraggableForm extends React.Component {
 
    constructor(props){
        super(props);
    }

    state = {
        ready: false,
        activeDrags: 0,
        deltaPosition: {
          x: 0, y: 0
        },
        controlledPosition: {
          x: 400, y: 0
        }
      };

      async componentDidMount(){
        const account = await getAccount();
        this.setState({
            ready: true,
            accountAddress: account,
            investmentAsset: ""
        });
     }

      eventLogger = (e: MouseEvent, data: Object) => {
        console.log('Event: ', e);
        console.log('Data: ', data);
      };
    
      handleDrag = (e, ui) => {
        const {x, y} = this.state.deltaPosition;
        this.setState({
          deltaPosition: {
            x: x + ui.deltaX,
            y: y + ui.deltaY,
          }
        });
      };
    
      onStart = () => {
        this.setState({activeDrags: ++this.state.activeDrags});
      };
    
      onStop = () => {
        this.setState({activeDrags: --this.state.activeDrags});
      };
    
      // For controlled component
      adjustXPos = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const {x, y} = this.state.controlledPosition;
        this.setState({controlledPosition: {x: x - 10, y}});
      };
    
      adjustYPos = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const {controlledPosition} = this.state;
        const {x, y} = controlledPosition;
        this.setState({controlledPosition: {x, y: y - 10}});
      };
    
      onControlledDrag = (e, position) => {
        const {x, y} = position;
        this.setState({controlledPosition: {x, y}});
      };
    
      onControlledDragStop = (e, position) => {
        this.onControlledDrag(e, position);
        this.onStop();
      };
    
      render() {

        if(!this.state.ready){
            return null;
        }

        const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
        //const {deltaPosition, controlledPosition} = this.state;
        const {deltaPosition} = this.state;
  
            return (
                <div>
                     <Draggable 
                     onDrag={this.handleDrag}  {...dragHandlers} 
                     defaultPosition = {{x:600, y:0}}
                     >
                        <div className="dragBox">
                            {this.props.children}
                        </div>
                    </Draggable>
            </div>
    );
  }
}