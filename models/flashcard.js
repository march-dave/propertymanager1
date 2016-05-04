'use strict';

var mongoose = require('mongoose');

// History, Science, Angular
var Flashcard = mongoose.model('Flashcard', {
  category: String,
  question: String,
  answer: String
});

module.exports = Flashcard;
