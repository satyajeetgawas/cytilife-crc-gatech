
var EstimoteSticker = require('./estimote-sticker');

		var connection = mysql.createConnection(
			{
				connectionLimit:1000,
				connectTimeout:60*60*1000,
				acquireTimeout:60*60*1000,
				timeout:60*60*1000,
				host:'198.211.106.52',
				user : 'gtlyfe',
				password : 'gt123@lyfe',
				port : 3306,
				database : 'estimote',
			});

		connection.connect(function(err){
		/*console.log(err);*/
});

		
EstimoteSticker.on('discover', function(estimoteSticker) {
  	
		console.log(estimoteSticker);
		
		var mysql = require('mysql');

		var getmac=require('getmac');
		getmac.getMac(function(err,macAddr){
		if (err) console.log(err);



var values = {id:estimoteSticker.id,uuid:estimoteSticker.uuid,
major:estimoteSticker.major,minor:estimoteSticker.minor,
type:estimoteSticker.type,firmware:estimoteSticker.firmware,
bootloader:estimoteSticker.bootloader,temperature:estimoteSticker.temperature,
moving:estimoteSticker.moving,batteryLevel:estimoteSticker.batteryLevel,
x:estimoteSticker.acceleration.x,y:estimoteSticker.acceleration.y,
z:estimoteSticker.acceleration.z,currentMotionStateDuration:estimoteSticker.currentMotionStateDuration,
prevMotionStateDuration:estimoteSticker.previousMotionStateDuration,
power:estimoteSticker.power,firmwareState:estimoteSticker.firmwareState,
rssi:estimoteSticker.rssi,log_time:Date.now(),mac_id:macAddr};

var queryString2 = connection.query('insert into estimote_stickers set ?',values,function(err,result){
if (err) console.log(err);
});
/*console.log(queryString2.sql);*/

var queryString1 = 'SELECT * from estimote_stickers';
connection.query(queryString1,function(err,rows,fields){
		/*if (err) console.log(err);*/
		for (var i in rows){
		/*console.log(rows[i].solution);*/
		} 
})
connection.end();
});
});
EstimoteSticker.startScanning();


