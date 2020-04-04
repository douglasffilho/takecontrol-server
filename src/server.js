import express from 'express';
import http from 'http';
import path from 'path';
import ejs from 'ejs';
import Events from './events';

const app = express();
const httpPort = 9092;
const publicPath = path.join(__dirname, 'public');

app.use(express.static(publicPath));
app.set('views', publicPath);
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

app.use('/', (req, res) => {
    return res.render('index.html');
});

const server = http.createServer(app);

server.listen(httpPort, () => {
    console.log(`Server initialized on port ${httpPort}`);
});

Events.startLoop(server);
