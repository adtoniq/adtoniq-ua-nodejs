'use strict'
/**
 * Module dependencies.
 * @private
 */

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

/**
 * Module exports.
 * @public
 */
module.exports = class AdtoniqUA {
	
	javaScript = "";
	version = "v1.0";

	/** Construct the Adtoniq singleton and initialize it
	 * @param apiKey Your unique API key, obtained from Adtoniq when you register
	 */
	constructor(pollURL, pollInterval) {
    this.pollURL = pollURL
    this.pollInterval = pollInterval ? pollInterval : 30000
    if (!!AdtoniqUA.instance) {
        return AdtoniqUA.instance;
    }
    AdtoniqUA.instance = this;
		this.poll(this)
		setInterval(this.poll, this.pollInterval, this)
	}

	poll(_this) {
		var request = new XMLHttpRequest();

		try {
			request.open('GET', _this.pollURL, true);
			request.send(null);
			request.onreadystatechange = function () {
				if (request.readyState === 4 && request.status === 200) {
					var type = request.getResponseHeader('Content-Type');
					if (type.indexOf("text") !== 1) {
						_this.javaScript = request.responseText;
					}
				}
			}
		} catch (e) {
			console.log("Error getting code from: " + _this.pollURL);
		}
	}

	/** Returns the HTML that should be inserted into the head section of the website
	 * @return The code that should be inserted into the head section
	 */
	getHeadCode() {
		return this.javaScript;
	}
	
}

