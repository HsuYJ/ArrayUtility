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

Array.prototype.remove = function(TARGET) {

	var index = this.indexOf(TARGET);

	if (index !== -1) {
		var lastIndex = this.length - 1;

		if (index < lastIndex) {
			for (var i = index; i < lastIndex; i++) {
				this[i] = this[i + 1];
			}

			this.pop();
		} else {
			this.pop();
		}
	}
};