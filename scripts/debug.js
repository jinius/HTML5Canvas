game.debug = (function() {
	function log(message)
	{
		try {
			console.log(message);
		} catch(exception) {
			return;
		}
	}

	return {
		log : log
	};
})();

