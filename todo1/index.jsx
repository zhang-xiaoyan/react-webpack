import React from "react";
import ReactDOM from "react-dom";

require("./css/base.css");
require("./css/index.css");

class Main extends React.Component{
    render(){
        return(
            <div>
                <header className="header" >
                    <h1>todos</h1>
                    <input className="new-todo" placeholder="请输入内容" value=""/>
                </header>
            </div>
        )
    }
}

var section = document.createElement("section");
section.className = "todoapp";
document.body.appendChild(section);

ReactDOM.render(<Main/>,section);

