const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/todo';

mongoose.connect(url, {useFindAndModify: true });

module.exports = mongoose;5