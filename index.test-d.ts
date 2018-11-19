import {expectType} from 'tsd-check';
import callsites, {CallSite} from '.';

const callsite = callsites()[0];

expectType<CallSite[]>(callsites());

expectType<unknown | undefined>(callsite.getThis());
expectType<string | null>(callsite.getTypeName());
expectType<Function | null>(callsite.getFunction());
expectType<string | null>(callsite.getFunctionName());
expectType<string | undefined>(callsite.getMethodName());
expectType<string | null>(callsite.getFileName());
expectType<number | null>(callsite.getLineNumber());
expectType<number | null>(callsite.getColumnNumber());
expectType<string | undefined>(callsite.getEvalOrigin());
expectType<boolean>(callsite.isToplevel());
expectType<boolean>(callsite.isEval());
expectType<boolean>(callsite.isNative());
expectType<boolean>(callsite.isConstructor());
