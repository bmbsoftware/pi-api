import xml from 'xml';
import { getWebCamListings } from 'tv/listings';
import { Router } from 'express';

const appRouter = (router: Router) => {
	router.get('/', (_req, res) => {
		res.send({
			message: 'Hello JSON API world!!'
		});
	});

	router.get('/tvlistings/:days', (req, res) => {
		res.json(getWebCamListings(req.params.days || 1));
	});

	router.get('/xml', (_req, res) => {
		res.set('Content-Type', 'text/xml');
		res.send(xml({
			message: 'Hello XML API world!!'
		}));
	});

	router.get('/xml/tvlistings/:days', (req, res) => {
		var data = xml(getWebCamListings(req.params.days || 1).listings, { indent: '  ', declaration: true });
		res.set('Content-Type', 'text/xml');
		res.send(data);
	});
};

export default appRouter;
