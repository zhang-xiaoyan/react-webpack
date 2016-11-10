import React from "react";
import ReactDOM from "react-dom";

import app from "./app.js";
import Item from "./item.jsx";

require("./css/base.css");
require("./css/index.css");

class Main extends React.Component{
    render(){
        var dataArr = this.props.dataArr;
        console.log(dataArr);
        var content,footer;
        if (dataArr.length !== 0){
            content = <section className="main">
                        <input className="toggle-all" type="checkbox" checked=""/>
                            <ul className="todo-list">
                                {
                                    dataArr.map(function (item,index) {
                                        return <Item key={index} {...item}/>
                                    }.bind(this))
                                }
                            </ul>
                    </section>;
            footer = <footer className="footer">
                        <span className="todo-count">
                            <strong>0</strong>
                            <span>条未选中</span>
                        </span>
                    </footer>;
        }
        return(
            <div>
                <header className="header" >
                    <h1>todos</h1>
                    <input className="new-todo" placeholder="请输入内容" defaultValue="" onKeyDown={this.downHandle}/>
                </header>
                {content}
                {footer}
            </div>
        )
    }
    downHandle(ev){
        if (ev.keyCode === 13){
            app.addItem(ev.target.value);
            ev.target.value = "";
        }
    }
}

var section = document.createElement("section");
section.className = "todoapp";
document.body.appendChild(section);

//ReactDOM.render(<Main dataArr={app.dataArr}/>,section);

function render(dataArr) {
    ReactDOM.render(<Main dataArr={dataArr}/>,section);
}

render(app.dataArr);

app.render = render;

