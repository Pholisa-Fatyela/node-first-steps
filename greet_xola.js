'use strict';

const greet = require('./greet.js');
const chalk = require('chalk');

console.log(greet('Xola'));

var message = chalk.bgGreen.black(greet("Xola"));
console.log(message);

var figlet = require('figlet');
 
figlet.text('Xola', {
    font: 'Ghost',
    horizontalLayout: 'default',
    verticalLayout: 'default'
}, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
});