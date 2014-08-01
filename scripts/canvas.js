game.canvas = (function() {
	function canvasSupport()
	{
		return Modernizr.canvas;
	}

	function initScreen( viewScreenId, hideScreenId )
	{
		var screen;
		var style;

		screen				= document.getElementById( viewScreenId );
		style				= document.defaultView.getComputedStyle( screen, null );
		screen.width		= parseInt( style.width );
		screen.height		= parseInt( style.height );
		this.viewScreen		= screen;

		screen				= document.getElementById( hideScreenId );
		style				= document.defaultView.getComputedStyle( screen, null );
		screen.width		= parseInt( style.width );
		screen.height		= parseInt( style.height );
		this.hideScreen		= screen;

		this.drawContext	= screen.getContext( '2d' );
		this.clearScreen( "#dddddd" );
	}

	function clearScreen( color )
	{
		var screen = this.hideScreen;
		var context = this.drawContext;

		context.fillStyle = color;
		context.fillRect( 0, 0, screen.width, screen.height );
	}

	function drawScreen( color, drawFuncList )
	{
		var context = this.drawContext;

		context.fillStyle = color;
		context.font = "20px Arial";

		for( var i in drawFuncList )
		{
			drawFuncList[i]( context );
		}
	}

	function showScreen()
	{
		var viewScreen = this.hideScreen;
		var hideScreen = this.viewScreen;

		hideScreen.style.visibility = 'hidden';
		viewScreen.style.visibility = 'visible';

		this.viewScreen = viewScreen;
		this.hideScreen = hideScreen;

		this.drawContext = hideScreen.getContext('2d');
		this.clearScreen( "#dddddd" );
	}

	function drawRect( x, y, size )
	{
		return function( context )
		{
			context.fillRect( x - size / 2, y - size / 2, size, size );
		};
	}

	function drawCircle( x, y, size )
	{
		return function( context )
		{
			context.beginPath();
			context.arc( x, y, size / 2, 0, Math.PI * 2, false );
			context.fill();
		};
	}

	function drawText( x, y, text )
	{
		return function( context )
		{
			context.fillText( text, x, y );
		};
	}

	return {
		drawContext : null,
		viewScreen : null,
		hideScreen : null,
		canvasSupport : canvasSupport,
		initScreen : initScreen,
		clearScreen : clearScreen,
		drawScreen : drawScreen,
		showScreen : showScreen,
		drawRect : drawRect,
		drawCircle : drawCircle,
		drawText : drawText
	};
})();

