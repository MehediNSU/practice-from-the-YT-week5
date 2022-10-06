const assert = require('assert');
const MarioCar = require('../models/mariochar');

//Descrive test
describe('Finding records', function(){

beforeEach(function(done){
    var char = new MarioCar({
        name: 'Mario'
       });
    
       char.save().then(function(){
            done(); 
       });
});


//Create test
it('Finding one records from the database', function(done){

    MarioCar.findOne({name: 'Mario'}).then(function(result){
        assert(result.name ==='Mario');
        done()
        })
    });
});