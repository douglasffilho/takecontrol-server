(function() {
    document.addEventListener('mousemove', function(event) {
        var x = parseFloat((event.x / document.body.clientWidth) * 100).toFixed(2);
        var y = parseFloat((event.y / document.body.clientHeight) * 100).toFixed(2);

        wsConnection.send(`${x}:${y}`);
    });

    document.addEventListener('click', function(event) {
        wsConnection.send('CLICK');
    });
})();