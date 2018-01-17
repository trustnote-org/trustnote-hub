/*jslint node: true */
"use strict";

exports.clientName = 'TTT';
exports.minClientVersion = '1.0.6';

// https://console.developers.google.com
exports.pushApiProjectNumber = 0;
exports.pushApiKey = '';

exports.port = 6655;
//exports.myUrl = 'wss://mydomain.com/bb';
exports.bServeAsHub = true;
exports.bSaveJointJson = true;
exports.bLight = false;

// this is used by wallet vendor only, to redirect bug reports to developers' email
exports.bug_sink_email = 'admin@example.org';
exports.bugs_from_email = 'bugs@example.org';

exports.HEARTBEAT_TIMEOUT = 300*1000;

exports.storage = 'sqlite';


exports.initial_witnesses = [
	'4MOQ4BKKIYLPIW2EBIPPYKAVKZKKAGUU',
	'5EOIHMAKADLGJPA3V7I6WFPP25UJGVFO',
	'73ZYEJQUAONT6CM43JPGVMOIWDSSTOWU',
	'ABV25PLKEIP7UPJGW36N5KEVZITOJP62',
	'FEBQADJX3YJBMYG7M3762REGC3LX7IGY',
	'FIFZLR4ZBCE7AWUH4CTDFHFZH7HMQ3WC',
	'HSK4ZFD2XJ3OPGVIMEOPH7HI5OV6NQHY',
	'L7YICPOR2U4QSMLPU7BXYWURKBFT2NB6',
	'P3P4BETQLFZDQJ7WKI7UYHFHLFW5FJFK',
	'PDWOVHJUS3ISA6EHIINUSUIJFNR3LY25',
	'TOLHUGF72FZR2H44ZLA6LVKFKFXGPIIE',
	'YURUGBTFGLFXU4Y2PKPYYLPZKQSRQ7PL'
];

exports.initial_peers = [
'wss://victor.trustnote.org/tn',
'wss://eason.trustnote.org/tn',
'wss://lymn.trustnote.org/tn',
'wss://bob.trustnote.org/tn',
'wss://curry.trustnote.org/tn',
'wss://kake.trustnote.org/tn'
];

console.log('finished hub conf');
