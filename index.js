const callsites = () => {
	const _prepareStackTrace = Error.prepareStackTrace;
	Error.prepareStackTrace = (_, stack) => stack;
	const stack = new Error('_').stack.slice(1);
	Error.prepareStackTrace = _prepareStackTrace;
	return stack;
};

export default callsites;
