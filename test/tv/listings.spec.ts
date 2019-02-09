import { getWebCamListings } from 'tv/listings';

describe('listings tests', () => {
	describe('getWebCamListings', () => {
		it('should return listings for 2 days', () => {
			const result = getWebCamListings(2);
			expect(result).toBeDefined();
			expect(result.listings[0].tv).toBeDefined();
			expect(result.listings[0].tv.length).toBeGreaterThan(2);
		});
	});
});
