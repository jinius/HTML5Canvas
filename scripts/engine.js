game.engine = (function() {
	var canvas = game.canvas;

	function startGame() {
		canvas.initScreen( "screen0", "screen1" );
		canvas.drawScreen( "red", [
			canvas.drawRect( 150, 150, 100 ),
			canvas.drawText( 120, 250, "Hello" )
		]);
		canvas.showScreen();	// TODO: rename to flipScreen()

		document.getElementById( "game" ).addEventListener( "mousedown", function( event ) {
			var x = event.offsetX;
			var y = event.offsetY;
			canvas.clearScreen();
			canvas.drawScreen( "yellow", [
				canvas.drawCircle( x, y, 100 )
			]);
			canvas.showScreen();	// TODO: rename to flipScreen()

		}, true );

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

