// ArrayUtility.js
Array.prototype.removeByIndex = function(INDEX) {

	var length = this.length;

	if (length) {
		var lastIndex = length - 1;

		if (INDEX < lastIndex) {
			for (var i = INDEX; i < lastIndex; i++) {
				this[i] = this[i + 1];
			}

			this.pop();
		} else if (INDEX === lastIndex) {
			this.pop();
		}
	}
};

Array.prototype.remove = function(ITEM) {

	var index = this.indexOf(ITEM);

	if (index !== -1) {
		var lastIndex = this.length - 1;

		if (index < lastIndex) {
			for (var i = index; i < lastIndex; i++) {
				this[i] = this[i + 1];
			}
		}

		this.pop();
	}
};

Array.prototype.insert = function(INDEX, ITEM) {

	var presntLength = ARR.length;

	if (INDEX >= presntLength) {
		ARR.push(ITEM);
	} else {
		ARR.length = presntLength + 1;

		for (var i = presntLength; i > INDEX; i--) {
			ARR[i] = ARR[i - 1];
		}

		ARR[INDEX] = ITEM;
	}
};