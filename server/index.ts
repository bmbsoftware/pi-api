import http from 'http';
import app from './server';

const server = http.createServer(app);
let currentApp = app;
server.listen(3000);
const myModule = module as any;
if (myModule.hot) {
	myModule.hot.accept('./server', () => {
		server.removeListener('request', currentApp);
		server.on('request', app);
		currentApp = app;
	});
}
