addEventListener('message', onMessage, false);

function onMessage(evt) {
    for (var i = 0, n = evt.data.length; i < n; i += 4) {
        var grayscale = evt.data[i] * .3 + evt.data[i + 1] * .59 + evt.data[i + 2] * .11;
        evt.data[i] = grayscale;
        evt.data[i + 1] = grayscale;
        evt.data[i + 2] = grayscale;
    }
    postMessage(evt.data);
}
