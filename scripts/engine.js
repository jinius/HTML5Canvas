game.engine = (function() {
	var canvas = game.canvas;

	function startGame() {
		game.canvas.selectScreen("game-screen", "logo-screen");
		game.canvas.initScreen();
		game.canvas.drawLogoScreen();
		game.canvas.showScreen();	// TODO: rename to flipScreen()
		// game.canvas.selectScreen("logo-screen", "game-screen");	// included into flipScreen()
		game.canvas.initScreen();
		game.canvas.drawScreen();
		game.canvas.showScreen();	// TODO: rename to flipScreen()

//		for( var count = 0; count < 10; count++ )
		{
			game.canvas.showScreen();
			game.canvas.showScreen();
		}

		// View code scenario : draw map, draw objects, draw ui
		// called when updated : by frame rate
		{
			// if( map is stored and not changed )
				// game.view.drawMap();
			// else
				// game.view.restoreMap();

			// game.view.drawObjects();
			// game.view.drawUI();
		}

		// DrawMap() scenario :
		// input : mapWidth(numberOfTile), mapHeight(numberOfTile), myPosition
		// tile size : about width/8 (iPhone), width/16 (iPad)
		{
			// Calc tile's position offset
			// load tile data
			// draw tile to canvas
		}
	}

	return {
		startGame : startGame
	};
})();

