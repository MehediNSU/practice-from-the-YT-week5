const mongoose = require('mongoose');

//Connect to the database before tests run
before(function(done){
    //Connect to mongoDB
    mongoose.connect('mongodb://localhost/testaroo');
    mongoose.connection.once('open', function() {
    console.log('Connection has been made succesfully, now make fireworks...');
    done();
    }).on('error', function(error) {
        console.log('Connection error:', error);
    });
});

//Drop the chracters collection before eacb test
beforeEach(function(done){
    //Drop the collection 
    mongoose.connection.collections.mariochars.drop(function(){
        done();
    })
})

