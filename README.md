# Take Control
Control your Android touch events from computer service (needs the [Android Service](https://github.com/douglasffilho/takecontrol/blob/master/README.md) to be running)

## How it works
Requires Node JS 13.11.0 installed on your PC, get into project root folder then enter `yarn start` command.

Under [HTML Main Screen](http://localhost:9092) mouse and keyboard events will be cautgh and send to Android via WebSockets.

The [Android Service](https://github.com/douglasffilho/takecontrol/blob/master/README.md) must be running on device background just after the service get started (maybe it requires App Service to be restarted).

It's important that your Android Phone and the WebApp must be under the same network to work better.