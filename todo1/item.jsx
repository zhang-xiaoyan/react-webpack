import React from "react";
import ReactDOM from "react-dom";

export default class Item extends React.Component{
    render(){
        return(
            <li className="completed">
                <div className="view">
                    <input className="toggle" type="checkbox" checked=""/>
                    <label>{this.props.content}</label>
                    <button className="destroy"></button>
                </div>
                <input className="edit" defaultValue="多多对对对"/>
            </li>
        )
    }
}
