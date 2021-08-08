const callsites = () => {
	const _prepareStackTrace = Error.prepareStackTrace;
	Error.prepareStackTrace = (_, stack) => stack;
	// eslint-disable-next-line unicorn/error-message
	const stack = new Error().stack.slice(1);
	Error.prepareStackTrace = _prepareStackTrace;
	return stack;
};

export default callsites;
