game.canvas = (function() {
	function canvasSupport()
	{
		return Modernizr.canvas;
	}

	function selectScreen(screenId)
	{
		var screen = document.getElementById(screenId);
		this.selectedScreen = screen;
	}

	function initScreen()
	{
		var screen = this.selectedScreen;

		var style = document.defaultView.getComputedStyle(screen, null);
		screen.width = parseInt(style.width);
		screen.height = parseInt(style.height);
	}

	function drawLogoScreen()
	{
		var context = this.selectedScreen.getContext('2d');

		context.fillStyle='red';
		context.fillRect(0, 0, 10, 10);
		context.fillRect(0, 100, 10, 10);
		context.fillRect(0, 200, 10, 10);
		context.fillRect(0, 300, 10, 10);
		context.fillRect(100, 0, 10, 10);
		context.fillRect(100, 100, 10, 10);
		context.fillRect(100, 200, 10, 10);
		context.fillRect(100, 300, 10, 10);
		context.fillRect(200, 0, 10, 10);
		context.fillRect(200, 100, 10, 10);
		context.fillRect(200, 200, 10, 10);
		context.fillRect(200, 300, 10, 10);
		context.fillRect(300, 0, 10, 10);
		context.fillRect(300, 100, 10, 10);
		context.fillRect(300, 200, 10, 10);
		context.fillRect(300, 300, 10, 10);
		context.fillRect(400, 0, 10, 10);
		context.fillRect(400, 100, 10, 10);
		context.fillRect(400, 200, 10, 10);
		context.fillRect(400, 300, 10, 10);

		context.fillText("Infinibolt Logo", 125, 120);
	}

	function drawScreen()
	{
		var context = this.selectedScreen.getContext('2d');
		context.fillStyle='red';
		context.fillText("Game Screen", 125, 120);
	}

	function showScreen()
	{
		if( this.activeScreen )
			this.activeScreen.style.visibility = 'hidden';

		var screen = this.selectedScreen;
		screen.style.visibility = 'visible';

		this.activeScreen = screen;
	}

	function hideScreen()
	{
		if( this.activeScreen )
			this.activeScreen.style.visibility = 'hidden';
	}

	return {
		activeScreen : null,
		selectedScreen : null,
		canvasSupport : canvasSupport,
		selectScreen : selectScreen,
		initScreen : initScreen,
		drawScreen : drawScreen,
		drawLogoScreen : drawLogoScreen,
		showScreen : showScreen
	};
})();

