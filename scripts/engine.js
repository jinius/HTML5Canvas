game.engine = (function() {
	var canvas = game.canvas;

	function startGame() {
		game.canvas.selectScreen("logo-screen");
		game.canvas.initScreen();
		game.canvas.drawLogoScreen();
		game.canvas.showScreen();
		game.canvas.selectScreen("game-screen");
		game.canvas.initScreen();
		game.canvas.drawScreen();
		game.canvas.showScreen();

//		for( var count = 0; count < 10; count++ )
		{
			game.canvas.selectScreen("logo-screen");
			game.canvas.showScreen();
			game.canvas.selectScreen("game-screen");
			game.canvas.showScreen();
		}
	}

	return {
		startGame : startGame
	};
})();

