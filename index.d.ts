type AnyFunction = (...args: any[]) => any;

export interface CallSite {
	/**
	Returns the value of `this`.
	*/
	getThis(): unknown | undefined;

	/**
	Returns the type of `this` as a string. This is the name of the function stored in the constructor field of `this`, if available, otherwise the object's `[[Class]]` internal property.
	*/
	getTypeName(): string | null;

	/**
	Returns the current function.
	*/
	getFunction(): AnyFunction | undefined;

	/**
	Returns the name of the current function, typically its `name` property. If a name property is not available an attempt will be made to try to infer a name from the function's context.
	*/
	getFunctionName(): string | null;

	/**
	Returns the name of the property of `this` or one of its prototypes that holds the current function.
	*/
	getMethodName(): string | undefined;

	/**
	Returns the name of the script if this function was defined in a script.
	*/
	getFileName(): string | null;

	/**
	Returns the current line number if this function was defined in a script.
	*/
	getLineNumber(): number | null;

	/**
	Returns the current column number if this function was defined in a script.
	*/
	getColumnNumber(): number | null;

	/**
	Returns a string representing the location where `eval` was called if this function was created using a call to `eval`.
	*/
	getEvalOrigin(): string | undefined;

	/**
	Returns `true` if this is a top-level invocation, that is, if it's a global object.
	*/
	isToplevel(): boolean;

	/**
	Returns `true` if this call takes place in code defined by a call to `eval`.
	*/
	isEval(): boolean;

	/**
	Returns `true` if this call is in native V8 code.
	*/
	isNative(): boolean;

	/**
	Returns `true` if this is a constructor call.
	*/
	isConstructor(): boolean;

	/**
	Returns `true` if this call is asynchronous (i.e. `await`, `Promise.all()`, or `Promise.any()`).
	*/
	isAsync(): boolean;

	/**
	Returns `true` if this is an asynchronous call to `Promise.all()`.
	*/
	isPromiseAll(): boolean;

	/**
	Returns the index of the promise element that was followed in `Promise.all()` or `Promise.any()` for async stack traces, or `null` if the `CallSite` is not an asynchronous `Promise.all()` or `Promise.any()` call.
	*/
	getPromiseIndex(): number | null;
}

/**
Get callsites from the V8 stack trace API.

@returns An array of `CallSite` objects.

@example
```
import callsites from 'callsites';

function unicorn() {
	console.log(callsites()[0].getFileName());
	//=> '/Users/sindresorhus/dev/callsites/test.js'
}

unicorn();
```
*/
export default function callsites(): CallSite[];
