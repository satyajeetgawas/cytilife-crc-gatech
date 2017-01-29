
var EstimoteSticker = require('./estimote-sticker');


		
EstimoteSticker.on('discover', function(estimoteSticker) {
  	
		// console.log(estimoteSticker);
		console.log(estimoteSticker.id);
		
		

		var getmac=require('getmac');
		getmac.getMac(function(err,macAddr){
		if (err) console.log(err);



var values =  [{
				id:estimoteSticker.id,
				uuid:estimoteSticker.uuid,
				major:estimoteSticker.major,
				minor:estimoteSticker.minor,
				type:estimoteSticker.type,
				firmware:estimoteSticker.firmware,
				bootloader:estimoteSticker.bootloader,
				temperature:estimoteSticker.temperature,
				moving:estimoteSticker.moving,
				batteryLevel:estimoteSticker.batteryLevel,
				x:estimoteSticker.acceleration.x,
				y:estimoteSticker.acceleration.y,
				z:estimoteSticker.acceleration.z,
				currentMotionStateDuration:estimoteSticker.currentMotionStateDuration,
				prevMotionStateDuration:estimoteSticker.previousMotionStateDuration,
				power:estimoteSticker.power,
				firmwareState:estimoteSticker.firmwareState,
				rssi:estimoteSticker.rssi,
				log_time:Date.now(),
				mac_id:macAddr
			}];

				var sa = require('superagent');
				sa.post('http://198.211.106.52/crc/saveEstimotedata')
  				.send(values)
  				.end(function(err,
  						 res) {
    					if (err) console.log(err);
    					//console.log(res);
  				});


});

});
EstimoteSticker.startScanning();


