import {expectType} from 'tsd';
import callsites = require('.');
import {CallSite} from '.';

const callsite = callsites()[0];

expectType<CallSite[]>(callsites());
expectType<unknown | undefined>(callsite.getThis());
expectType<boolean>(callsite.isConstructor());
