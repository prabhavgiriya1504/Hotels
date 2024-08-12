
 
 const notes = require('./notes.js');
 var _ = require('lodash');
 
 var age = notes.age;
 console.log(age);
 var res = notes.addNumber(age+10,10);
 console.log(res);
  
 var filter = _.uniq(["prab","giriya","prab","hello"]);
 console.log(filter);
 console.log(_.isString(8));
 console.log(_.isArray(filter));
