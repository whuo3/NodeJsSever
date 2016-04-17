var redis = require("redis"),
client = redis.createClient('172.22.152.38', '7000');

client.on("error", function (err) {
    console.log("Error " + err);
});

client.on('connect', function() {
    console.log('connected');
});

module.exports=function(app){
	app.get('/',function(req,res){
		res.render('index.html');
	});
}
