addEventListener('message', onMessage, false);

function onMessage(evt) {
    var result = [];
    console.log(evt.data);
    for (var i = 0; i < evt.data.n; i++) {
        var tmp = (evt.data.width < evt.data.height) ? evt.data.width : evt.data.height;
        var r = Math.floor((Math.random() * (tmp / 10)) + 1);
        var tmpWidth = Math.floor((Math.random() * (evt.data.width - (r*2))) + r);
        var tmpHeight = Math.floor((Math.random() * (evt.data.height - (r*2))) + r);
        result.push({"r":r, "y":tmpHeight,"x": tmpWidth});
    }
    postMessage(result);
}
