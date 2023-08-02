export default function callsites() {
	const _prepareStackTrace = Error.prepareStackTrace;
	try {
		const result = [];
		Error.prepareStackTrace = (_, callSites) => {
			const callSitesWithoutCurrent = callSites.slice(1);
			result.push(...callSitesWithoutCurrent);
			return callSitesWithoutCurrent;
		};

		new Error().stack; // eslint-disable-line unicorn/error-message, no-unused-expressions
		return result;
	} finally {
		Error.prepareStackTrace = _prepareStackTrace;
	}
}
