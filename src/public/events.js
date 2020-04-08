var wsConnection = null;

(function () {
    wsConnection = new WebSocket('ws://localhost:9092');

    wsConnection.onopen = function () {
        wsConnection.send("Front-end done!");
    };

    wsConnection.onmessage = function (message) {
        if (message.data === 'Front-end done!') {
            document.getElementById("self-connection").textContent = "Server Connected";
            document.getElementById("self-connection").style = "color: green";
        } else if (message.data === 'App done!') {
            document.getElementById("app-connection").textContent = "App Connected";
            document.getElementById("app-connection").style = "color: green";
        } else if (message.data === 'App disconnected!') {
            document.getElementById("app-connection").textContent = "App Disconnected";
            document.getElementById("app-connection").style = "color: red";
        }
    };

    wsConnection.onclose = function () {
        document.getElementById("self-connection").textContent = "Server Disconnected";
        document.getElementById("self-connection").style = "color: red";
    };
})();