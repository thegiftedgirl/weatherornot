const mongoose = require('mongoose');
const db = mongoose.connection;



// mongoose.connect(process.env.DATABASE_URL, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true
// }).catch(err => console.log(err));

mongoose.connect('mongodb://localhost/weather-or-not' , {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).catch(err => console.log(err));

db.on('connected', function() {
    console.log(`MongoDB connected on ${db.host}:${db.port}`);
});