var game = {};
var server = {};

window.addEventListener("load", function() {
	Modernizr.load([
		{
			// 항상 로드되는 파일들
			load: [
				"scripts/debug.js",
				"scripts/canvas.js",
				"scripts/engine.js"
			],

			// Called when loading completed.
			complete: function() {
				game.engine.startGame();
			}
		}
	]);
}, false);

