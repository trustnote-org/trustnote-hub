/*jslint node: true */
"use strict";

exports.clientName = 'TTT';

exports.minClientVersion = '1.2.0';
exports.notes = {
	"version": "1.2.0",
	"ignore": true,
	"msg": {
		"en": ["Add textcoin", "Device address error bug fixes", "bugs fixes"],
		"cn": ["新增 textcoin(T口令红包)功能", "修复设备地址错误问题", "已知问题修复"]
	}
};

exports.minNewClientVersion = '2.1.0';
exports.newNotes = {
	"version": "2.1.0",
	"ignore": true,
	"msg": {
		"en": ["Add textcoin", "Device address error bug fixes", "bugs fixes"],
		"cn": ["新增 textcoin(T口令红包)功能", "修复设备地址错误问题", "已知问题修复"]
	}
};


// https://console.developers.google.com
exports.WS_PROTOCOL = 'ws://';
exports.pushApiProjectNumber = 0;
exports.pushApiKey = '';

exports.port = 6617;
//exports.myUrl = 'wss://mydomain.com/bb';
exports.bServeAsHub = true;
exports.bSaveJointJson = true;
exports.bLight = false;

// this is used by wallet vendor only, to redirect bug reports to developers' email
exports.bug_sink_email = 'admin@example.org';
exports.bugs_from_email = 'bugs@example.org';

exports.HEARTBEAT_TIMEOUT = 300 * 1000;

exports.storage = 'sqlite';


exports.initial_witnesses = [
	"34NRY6HRBMWYMJQUKBF22R7JEKXYUHHW",
	"3C3OHD7WEFKV6RDF2U4M74RVK7YMDP7I",
	"4QBVMWX7DRAIVV4CZEVKS3IAQAFDPFBB",
	"4VCBX74SQMW46OKDTHXDVIFVIP2V6NFX",
	"4VYYR2YO6NV4NTF572AUBEKJLSTM4J4E",
	"AKB7DYDKTIMSOUNHUFB5PHKXOOYCM3YF",
	"B4Z366GZMCWJGPCQI5ROPK3L5OEBT7QD",
	"D27P6DGHLPO5A7MSOZABHOOWQ3BJ56ZI",
	"I6IK6MIYY34C4LV3JU6MNMGCJJN6VSKC",
	"KPQ3CRPBG5FSKVEH6Y76ETGD5D2N7QZ7",
	"NKLP6XURGMNT3ZUCJBCUVHB6BRNZTZL5",
	"QSOMNL7YPFQCYDKFUO63Y7RBLXDRDVJX"
];


exports.initial_peers = [
	"ws://172.16.0.6:6616"
];
exports.trustedRegistries = {
	'WO5JFJREQMTMYB66TSBX2R5IICATFDLU': 'market'
};

console.log('finished hub conf');