import {store} from "./util.js";

let app = {
    dataArr:[],
    info:function () {
        store("todo",app.dataArr);
    },
    addItem:function (value) {
        app.dataArr.push({
            id:Date.now(),
            content:value,
            compile:false
        });

        app.info();

        app.render(app.dataArr);
    }
};

store("todo",app.dataArr);

app.dataArr = store("todo");

export default app;