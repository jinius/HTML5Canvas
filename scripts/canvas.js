game.canvas = (function() {
	function canvasSupport()
	{
		return Modernizr.canvas;
	}

	function selectScreen(viewScreenId, hideScreenId)
	{
		var viewScreen = document.getElementById(viewScreenId);
		var hideScreen = document.getElementById(hideScreenId);
		this.viewScreen = viewScreen;
		this.hideScreen = hideScreen;

		this.hideContext = hideScreen.getContext('2d');
	}

	function initScreen()
	{
		var screen = this.hideScreen;

		var style = document.defaultView.getComputedStyle(screen, null);
		screen.width = parseInt(style.width);
		screen.height = parseInt(style.height);

		this.hideContext = screen.getContext('2d');
	}

	function drawLogoScreen()
	{
		var context = this.hideContext;

		context.fillStyle='red';
		context.fillText("Infinibolt Logo", 125, 120);
	}

	function drawScreen()
	{
		var context = this.hideContext;

		context.fillStyle='red';
		context.fillRect(0, 0, 10, 10);
		context.fillRect(100, 0, 10, 10);
		context.fillRect(200, 0, 10, 10);
		context.fillRect(300, 0, 10, 10);
		context.fillRect(0, 100, 10, 10);
		context.fillRect(100, 100, 10, 10);
		context.fillRect(200, 100, 10, 10);
		context.fillRect(300, 100, 10, 10);
		context.fillRect(0, 200, 10, 10);
		context.fillRect(100, 200, 10, 10);
		context.fillRect(200, 200, 10, 10);
		context.fillRect(300, 200, 10, 10);
		context.fillRect(0, 300, 10, 10);
		context.fillRect(100, 300, 10, 10);
		context.fillRect(200, 300, 10, 10);
		context.fillRect(300, 300, 10, 10);
		context.fillRect(0, 400, 10, 10);
		context.fillRect(100, 400, 10, 10);
		context.fillRect(200, 400, 10, 10);
		context.fillRect(300, 400, 10, 10);
		context.fillRect(0, 500, 10, 10);
		context.fillRect(100, 500, 10, 10);
		context.fillRect(200, 500, 10, 10);
		context.fillRect(300, 500, 10, 10);

		context.fillText("Game Screen", 125, 120);
	}

	function showScreen()
	{
		var viewScreen = this.hideScreen;
		var hideScreen = this.viewScreen;

		hideScreen.style.visibility = 'hidden';
		viewScreen.style.visibility = 'visible';

		this.viewScreen = viewScreen;
		this.hideScreen = hideScreen;

		this.hideContext = hideScreen.getContext('2d');
	}

	return {
		mainScreen : null,
		hideScreen : null,
		hideContext : null,
		canvasSupport : canvasSupport,
		selectScreen : selectScreen,
		initScreen : initScreen,
		drawScreen : drawScreen,
		drawLogoScreen : drawLogoScreen,
		showScreen : showScreen
	};
})();

