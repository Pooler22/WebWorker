addEventListener('message', onMessage, false);

function onMessage(evt) {

    for (var i = 0; i < evt.data.length; i += 4) {
        evt.data[i] = 255 - evt.data[i];
        evt.data[i + 1] = 255 - evt.data[i + 1];
        evt.data[i + 2] = 255 - evt.data[i + 2];
    }
    postMessage(evt.data);
}
