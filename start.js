/*jslint node: true */
"use strict";
require('trustnote-relay');
var conf = require('./conf');
var network = require('trustnote-common/network');
var eventBus = require('trustnote-common/event_bus.js');
var push = require('./push');

eventBus.on('peer_version', function (ws, body) {
	if (body.program == conf.clientName) {
		if (body.new_version) {
			if (conf.minNewClientVersion && compareVersions(body.new_version, conf.minNewClientVersion) == '<')
				network.sendJustsaying(ws, 'new_version', conf.newNotes);
		} else {
			if (conf.minClientVersion && compareVersions(body.program_version, '1.1.3') == '<')
				return;
			if (conf.minClientVersion && compareVersions(body.program_version, conf.minClientVersion) == '<')
				network.sendJustsaying(ws, 'new_version', conf.notes);
			// if (compareVersions(body.program_version, '1.5.1') == '<')
			//      ws.close(1000, "mandatory upgrade");
		}

	}
});

function compareVersions(currentVersion, minVersion) {
	if (currentVersion === minVersion) return '==';

	var cV = currentVersion.match(/([0-9])+/g);
	var mV = minVersion.match(/([0-9])+/g);
	var l = Math.min(cV.length, mV.length);
	var diff;

	for (var i = 0; i < l; i++) {
		diff = parseInt(cV[i], 10) - parseInt(mV[i], 10);
		if (diff > 0) {
			return '>';
		} else if (diff < 0) {
			return '<'
		}
	}

	diff = cV.length - mV.length;
	if (diff == 0) {
		return '==';
	} else if (diff > 0) {
		return '>';
	} else if (diff < 0) {
		return '<';
	}
}