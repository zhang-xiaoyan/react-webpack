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
    },
    toggleAll:function (bl) {
        app.dataArr.forEach(function (item) {
            item.compile = bl;
            //console.log(item.compile);
        });
        app.info();
        app.render(app.dataArr);
    },
    toggle:function (id) {
        app.dataArr.forEach(function (item) {
            if (item.id === id){
                item.compile = !item.compile;
            }
        });
        app.info();

        app.render(app.dataArr);
    },
    deleteItem:function (id) {
        var newArr = app.dataArr.filter(function (item) {
            return item.id !== id;
        });

        app.dataArr = newArr;

        app.info();

        app.render(app.dataArr);
    }
};

app.dataArr = store("todo") || [];

export default app;