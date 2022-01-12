'use strict';

module.exports = {
	configs: {
		recommended: {
			plugins: ['es5-jquery-lodash'],
			rules: {
				'es5/no-es6-methods': 0,
				'es5-jquery-lodash/no-es6-methods': 2
			}
		}
	},
	rules: {
		'no-es6-methods': require('./rules/no-es6-methods')
	}
};
