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
            //event.preventDefault();
            this.setState({
                showMenu: false 
            });  
      }

    render(){
        return (<div 
                    className="MenuForDropDown" 
                    onMouseEnter={this.showMenu}
                    onClick={this.showMenu}
                    onMouseLeave={this.closeMenu}
                    >
                     <div style={{margin: `auto`, padding: `auto`, color: `white`}}>
                        {this.props.title}
                    </div>
            {
                this.state.showMenu
                    ?
                    <div 
                        className="DropDownMenu" 
                        onMouseEnter={this.showMenu}
                        onMouseLeave={this.closeMenu}
                    >
                        <Link to={this.props.link1} style={{color: `white`}} >
                            <div className="MenuItem" onClick={this.closeMenu} style={{gridRow: '1 / 2'}}>
                                <div className="MenuLink" style={{color: `white`,  padding:'0'}}>
                                    {this.props.item1} 
                                </div>
                            </div>
                        </Link>
                         
                        <Link to={this.props.link2} style={{gridRow: '2 / 3'}}>
                            <div className="MenuItem" onClick={this.closeMenu} >
                                <div className="MenuLink" style={{color: `white`,  padding:'0'}}>
                                    {this.props.item2} 
                                </div>
                            </div>
                        </Link> 
                        

                        <Link to={this.props.link3} style={{gridRow: '3 / 4'}}>
                            <div className="MenuItem" onClick={this.closeMenu} >
                                <div className="MenuLink" style={{color: `white`,  padding:'0'}}>
                                    {this.props.item3} 
                                </div>
                            </div>
                        </Link>

                        {/*<Link to={this.props.link4} style={{gridRow: '4 / 5'}}>
                            <div className="MenuItem" onClick={this.closeMenu} >
                                <div className="MenuLink" style={{color: `white`,  padding:'0'}}>
                                    {this.props.item4} 
                                </div>
                            </div>
                        </Link>*/}
                    </div>
                    :(
                        null
                    )
                }
            </div>
            )
        }
    }