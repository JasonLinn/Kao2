var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mymondb');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("Database Connected.");
});

var USERMODEL = db.model('USER', USERSCHEMA);

var USERENTITY = new USERMODEL({ name: 'Zack' });
USERENTITY.save(function () { console.log("save " + USERENTITY.name) });

