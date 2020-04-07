var wsConnection = null;

(function () {
    wsConnection = new WebSocket('ws://localhost:9092');

    wsConnection.onopen = function() {
        wsConnection.send("Front-end done!");
    };

    wsConnection.onclose = function() {
        console.log("Connection lost");
    };
})();