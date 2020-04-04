
import { server } from "websocket";

const Events = {

    startLoop(httpServer) {
        const wsServer = new server({httpServer});

        wsServer.on("request", (request) => {
            const connection = request.accept(null, request.origin);
            connection.on("message", (message) => {
                console.log(message);
            });
        });
    }

}

export default Events;