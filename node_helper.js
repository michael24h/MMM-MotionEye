/* Magic Mirror
 * Node Helper: MotionEye
 *
 * By Cato Antonsen (https://github.com/CatoAntonsen)
 * MIT Licensed.
 */

var NodeHelper = require("node_helper");


module.exports = NodeHelper.create({
	start: function() {
		console.log("Starting module: " + this.name);
	},

	socketNotificationReceived: function(notification, config) {
		var self = this;
		if (notification === "CONFIG") {
			self.config = config;
			
			if (config.autoHide) {
				this.expressApp.get('/motioneye', function (req, res) {
					console.log("Motion registered");
					res.send('Motion registered');
					self.sendSocketNotification("MotionEyeShow", null);
				});
			} else {
				self.sendSocketNotification("MotionEyeShow", null);
			}
			return;
		}
	},
	
});
