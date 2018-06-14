/*jslint node: true */
"use strict";

require( 'trustnote-relay' );

var _conf			= require( './conf' );
var _push			= require( './push' );
var _network			= require( 'trustnote-common/network.js' );
var _event_bus			= require( 'trustnote-common/event_bus.js' );
var _desktop_app		= require( 'trustnote-common/desktop_app.js' );
var _log_ex			= require( 'trustnote-common/logex.js' );

var _sAppDataDir		= _desktop_app.getAppDataDir();
var _sLogFilename		= _conf.LOG_FILENAME || ( _sAppDataDir + '/log.txt' );
var _pfnConsoleLogOriginal	= null;





/**
 *	replace the function address of original console.log
 */
function _replaceConsoleLog()
{
	//
	//	save the last function address, imagine that it's the original address
	//
	_pfnConsoleLogOriginal	= console.log;

	//
	//	...
	//
	console.log( "---------------" );
	console.log( "From this point, output will be redirected to " + _sLogFilename );
	console.log( "To release the terminal, type Ctrl-Z, then 'bg'" );
	console.log = function()
	{
		_log_ex.push.apply( this, arguments );
	};
	console.warn = console.log;
	console.info = console.log;
}


function _compareVersions( currentVersion, minVersion )
{
	if ( currentVersion === minVersion )
	{
		return '==';
	}

	//	...
	var cV	= currentVersion.match( /([0-9])+/g );
	var mV	= minVersion.match( /([0-9])+/g );
	var l	= Math.min( cV.length, mV.length );
	var diff;
	var i;

	//	...
	for ( i = 0; i < l; i++ )
	{
		diff	= parseInt( cV[ i ], 10) - parseInt( mV[ i ], 10 );
		if ( diff > 0 )
		{
			return '>';
		}
		else if ( diff < 0 )
		{
			return '<'
		}
	}

	//	...
	diff	= cV.length - mV.length;
	if ( diff === 0 )
	{
		return '==';
	}
	else if ( diff > 0 )
	{
		return '>';
	}
	else if ( diff < 0 )
	{
		return '<';
	}
}




/**
 *	replace console.log
 */
setTimeout
(
	_replaceConsoleLog,
	1000
);


/**
 *	ON EVENT 'peer_version'
 */
_event_bus.on
(
	'peer_version',
	function ( ws, body )
	{
		if ( body.program === _conf.clientName )
		{
			if ( _conf.minClientVersion && _compareVersions( body.program_version, '1.1.3' ) === '<' )
			{
				return;
			}

			if ( _conf.minClientVersion && _compareVersions( body.program_version, _conf.minClientVersion ) === '<' )
			{
				_network.sendJustsaying( ws, 'new_version', _conf.notes );
			}

			//	if (_compareVersions(body.program_version, '1.5.1') == '<')
			//		ws.close(1000, "mandatory upgrade");
		}
	}
);


