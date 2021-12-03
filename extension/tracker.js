'use strict';

const nodecg = require('./utils/nodecg-api-context').get();
const https = require('https');

const POLL_RATE = 1000;


if (nodecg.bundleConfig && nodecg.bundleConfig.enable) {
	if (!nodecg.bundleConfig.eventUrl) {
		nodecg.log.warn('GDQ Donation Tracker support is enabled but no event URL is specified.');
	}
	
	if (!nodecg.bundleConfig.eventUrl) return;
	
	nodecg.log.info('GDQ Donation Tracker integration is enabled.');

	const donationTotal = nodecg.Replicant('donationTotal', { 
		persistent: false,
		defaultValue: 0
	});

	const isFetching = { current: false };

	function updateDonationTotal() {
		if (isFetching.current) return;

		isFetching.current = true;

		const req = https.get(`${nodecg.bundleConfig.eventUrl}?json`, res => {
			let body = '';

			res.on('data', chunk => {
				body += chunk.toString();
			});
			
			res.on('error', e => {
				nodecg.log.error('Donation total poll error', e);
				isFetching.current = false;
			});

			res.on('end', () => {
				try {
					const data = JSON.parse(body);
		
					if (donationTotal.value !== data.agg.amount) {
						donationTotal.value = data.agg.amount;
					}
				} catch (e) {
					nodecg.log.error('Donation total parse error', e);

				}

				isFetching.current = false;
			});
		});

		req.on('error', e => {
			nodecg.log.error('Donation total poll error', e);
			isFetching.current = false;
		});
	}

	setInterval(updateDonationTotal, POLL_RATE);

	updateDonationTotal();
}