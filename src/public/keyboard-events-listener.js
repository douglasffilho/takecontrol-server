var commands = {
    'ArrowDown': 'DOWN',
    'ArrowUp': 'UP',
    'ArrowLeft': 'LEFT',
    'ArrowRight': 'RIGHT',
    's': 'DOWN',
    'w': 'UP',
    'a': 'LEFT',
    'd': 'RIGHT',
    'S': 'DOWN',
    'W': 'UP',
    'A': 'LEFT',
    'D': 'RIGHT'
};

(function() {
    document.addEventListener('keydown', function(event) {
        var command = commands[event.key];
        var direction = command ? command : 'STAY' ;

        wsConnection.send(direction);
    });
})();
