var wsConnection = null;

(function () {
    wsConnection = new WebSocket('ws://localhost:9092');

    wsConnection.onopen = function () {
        console.log("Connected");
    };

    wsConnection.onerror = function (error) {
        console.error(error);
    };
})();