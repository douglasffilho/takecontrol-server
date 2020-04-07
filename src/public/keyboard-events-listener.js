var commands = {
    40: 'DOWN',
    38: 'UP',
    37: 'LEFT',
    39: 'RIGHT',
    83: 'DOWN',
    87: 'UP',
    65: 'LEFT',
    68: 'RIGHT',
    32: 'JUMP',
    71: 'GRANADE',
    88: 'AIM'
};

(function() {
    document.addEventListener('keydown', function(event) {
        var command = commands[event.keyCode];
        var direction = command ? command : 'STAY' ;

        wsConnection.send(direction);
    });
})();
