'use strict';

var mongoose = require('mongoose');

// History, Science, Angular
var Propertymgr = mongoose.model('propertymgr', {
  address: String,
  occupationstatus: String,
  rentprice: String,
  utilitycpse: String
  otherinfo: String
});

module.exports = Propertymgr;
