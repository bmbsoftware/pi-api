import fs from 'fs';
import moment from 'moment';

export const getWebCamListings = (days: number) => {
	const programSourceData = JSON.parse(fs.readFileSync('./data/webCamListings.json', 'utf8'));

	const data = JSON.parse(JSON.stringify(programSourceData));
	data.listings[0].tv = [];

	programSourceData.listings[0].tv.forEach((element: any) => {
		const newElement = element;
		if (newElement.programme) {
			const format = 'YYYYMMDDHHmmss ZZ';
			for (let day = 0; day < days; day += 1) {
				const today = moment().startOf('day').add(day, 'day').format(format);
				const tomorrow = moment().startOf('day').add(day + 1, 'day').format(format);
				newElement.programme[0]._attr.start = today;
				newElement.programme[0]._attr.stop = tomorrow;
				data.listings[0].tv.push(JSON.parse(JSON.stringify(newElement)));
			}
		} else {
			data.listings[0].tv.push(JSON.parse(JSON.stringify(element)));
		}
	});

	return data;
};
