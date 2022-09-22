const _prepareStackTrace = Error.prepareStackTrace;

export default function callsites() {
	Error.prepareStackTrace = (_, stack) => stack;
	const stack = new Error().stack.slice(1); // eslint-disable-line unicorn/error-message
	Error.prepareStackTrace = _prepareStackTrace;
	return stack;
}
