const assert = require('assert');
const MarioCar = require('../models/mariochar');

//Descrive test
describe('Saving records', function(){

//Create test
   it('Saves a record to the database', function(done){
      var char = new MarioCar({
      name: 'Mario'
      });

      char.save().then(function(){
         assert(char.isNew === false); 
         done(); 
    });
 });
});