import {events} from "./pubSubLite";

console.log(events)
var calcForm = document['calc-form'];

calcForm.addEventListener('click', function (event) {
    console.log(document.activeElement, event.target.value)
});
document.addEventListener('keypress', function (event) {
    console.log({event})
});