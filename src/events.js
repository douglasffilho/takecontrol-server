
import { server } from "websocket";

const Events = {

    startLoop(httpServer) {
        const wsServer = new server({httpServer});

        wsServer.on("request", (request) => {
            const connection = request.accept(null, request.origin);

            connection.on("message", (message) => {
                console.log(message);
                wsServer.broadcastUTF(message.utf8Data);
            });

            connection.on("close", () => {
                console.log("Closed connection");
                console.log(`Connections: ${wsServer.connections.length}`);
            });
        });
    }

}

export default Events;