import React from "react";
import { Link } from "gatsby";

export default class ButtonDropDown extends React.Component{

    constructor(props) {
        super(props);
        
        this.state = {
          showMenu: false,
        }
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
      }

      showMenu(event) {
        event.preventDefault();
        
        this.setState({
          showMenu: true,
        });
      }

      closeMenu(event) {
            event.preventDefault();
            this.setState({
                showMenu: false 
            });  
      }

    render(){
        return (<div 
                    className="MenuForDropDown" 
                    onMouseEnter={this.showMenu}
                    onMouseLeave={this.closeMenu}
                    >
                     <Link to="/about" style={{margin: `auto`, padding: `auto`, color: `white`}}>
                        {this.props.title}
                    </Link>
            {
                this.state.showMenu
                    ?
                    <div 
                        className="DropDownMenu" 
                        onMouseEnter={this.showMenu}
                        onMouseLeave={this.closeMenu}
                    >
                        <div className="MenuItem" onClick={this.closeMenu} style={{gridRow: '1 / 2'}}>
                        <Link to={this.props.link1} style={{color: `white`}} >
                            <div className="MenuLink">
                                {this.props.item1} 
                            </div>
                        </Link>
                        </div>
                        <div className="MenuItem" onClick={this.closeMenu} style={{gridRow: '2 / 3'}}> 
                            <Link to={this.props.link2} style={{color: `white`,  padding:'0'}}>
                            <div className="MenuLink">
                                    {this.props.item2} 
                                </div>
                            </Link> 
                        </div>
                        
                        <div className="MenuItem" onClick={this.closeMenu} style={{gridRow: '3 / 4'}}>
                            <Link to={this.props.link3} style={{color: `white`}}>
                                <div className="MenuLink">
                                    {this.props.item3} 
                                </div>
                            </Link>  
                        </div>
                    </div>
                    :(
                        null
                    )
                }
            </div>
            )
        }
    }