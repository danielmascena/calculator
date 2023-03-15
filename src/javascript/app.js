import {events} from "./pubSubLite";

console.log(events)
var calcForm = document['calc-form'];

document.addEventListener('keypress', function (event) {
    console.log(event.key)
});

document.getElementById('calc-numbers').addEventListener('click', function (event) {
    console.log(document.activeElement)
    events.publish('digit_selected')
})