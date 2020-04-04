(function() {
    document.addEventListener('keydown', function(event) {
        var command = commands[event.key];
        var direction = command ? command : 'STAY' ;

        movePlayer(direction);
    });
})();
