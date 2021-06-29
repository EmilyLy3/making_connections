// Code to change name
var changer = document.querySelector('#change_name');

function change() {
    changer.innerHTML = 'Dosey Jones';
};

// Code to remove Todd
var todd = document.querySelector('#todd');

function removeT() {
    todd.remove();
};

var phil = document.querySelector('#phil');

// Code to remove Phil
function removeP() {
    phil.remove();
};

// Code to decrease requests
var request_count = document.querySelector('#request_count');
var count = 2;

function decrease() {
    count--;
    request_count.innerHTML = count;
};

// Code to increase connections
var connection_count = document.querySelector('#connection_count');
var count1 = 418;

function increase() {
    count1++;
    connection_count.innerHTML = count1;
}