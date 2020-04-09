var staticCommands = {
    40: 'SWIPE-DOWN',
    38: 'SWIPE-UP',
    37: 'SWIPE-LEFT',
    39: 'SWIPE-RIGHT',
    32: 'SHOT',
    71: 'GRANADE',
    88: 'AIM',
    17: 'SQUAT',
    18: 'JUMP'
};

var motionCommands = {
    83: {
        hit: false,
        startCommand: 'START-MOVING-DOWN',
        stopCommand: 'STOP-MOVING-DOWN'
    },
    87: {
        hit: false,
        startCommand: 'START-MOVING-UP',
        stopCommand: 'STOP-MOVING-UP'
    },
    65: {
        hit: false,
        startCommand: 'START-MOVING-LEFT',
        stopCommand: 'STOP-MOVING-LEFT'
    },
    68: {
        hit: false,
        startCommand: 'START-MOVING-RIGHT',
        stopCommand: 'STOP-MOVING-RIGHT'
    }
};

function isStatic(event) {
    return !!staticCommands[event.keyCode];
}

function isMotion(event) {
    return !!motionCommands[event.keyCode];
}

function getMotionCommand(event) {
    return motionCommands[event.keyCode];
}

function getStaticCommand(event) {
    return staticCommands[event.keyCode];
}

(function() {
    document.addEventListener('keydown', function(event) {
        event.preventDefault();
        if (isMotion(event)) {
            var command = getMotionCommand(event);
            if (!command.hit) {
                command.hit = true;
                
                wsConnection.send(command.startCommand);
            }
        } else if (isStatic(event)) {
            var command = getStaticCommand(event);

            wsConnection.send(command);
        }
    }, false);

    document.addEventListener('keyup', function(event) {
        event.preventDefault();
        if (isMotion(event)) {
            var command = getMotionCommand(event);
            if (command.hit) {
                command.hit = false;

                wsConnection.send(command.stopCommand);
            }
        }
    }, false);
})();
