/*jslint node: true */
"use strict";

exports.clientName = 'TTT';
exports.minClientVersion = '1.1.6';
exports.notes = {"version":"v1.1.6","ignore":true,"msg":{"en":["Add textcoin","Device address error bug fixes","bugs fixes"],"cn":["新增 textcoin(T口令红包)功能","修复设备地址错误问题","已知问题修复"]}};

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
	'2SATGZDFDXNNJRVZ52O4J6VYTTMO2EZR',
	'33RVJX3WBNZXJOSFCU6KK7O7TVEXLXGR',
	'FYQXBPQWBPXWMJGCHWJ52AK2QMEOICR5',
	'J3XIKRBU4BV2PX2BP4PSGIXDVND2XRIF',
	'K5JWBZBADITKZAZDTHAPCU5FLYVSM752',
	'KM5FZPIP264YRRWRQPXF7F7Y6ETDEW5Y',
	'NBEFJ3LKG2SBSBK7D7GCFREOAFMS7QTQ',
	'RIHZR7AHPVKZWTTDWI6UTKC7L73BJJQW',
	'TIPXQ4CAO7G4C4P2P4PEN2KQK4MY73WD',
	'X27CW2UWU5SGE647LK5SBTIPOOIQ7GJT',
	'X6DWZUEW4IBFR77I46CAKTJVK4DBPOHE',
	'XIM76DRNUNFWPXPI5AGOCYNMA3IOXL7V'
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
