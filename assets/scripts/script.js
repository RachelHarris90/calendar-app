// Display current day and date at top of page
var currentDay = document.querySelector("#currentDay")
currentDay.textContent = "Today is " + (moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
// TODO: Update time every second
// Identify which time has been selected
var container = $('#container');
var row = document.querySelector('.row')
var hour = document.querySelector('.hour')
var eventText = $('input[name="event-text"]');

// TODO: Get saved events of each row
var savedEvents = [];
function getSavedEvents() {
    savedEvents = JSON.parse(localStorage.getItem("eventText"))
}
var enteredEvent = $(':input');
// Save events to local storage
// TODO: Save events text of each row
function saveEvent(event) {
    event.preventDefault();
    localStorage.setItem("savedEvents", JSON.stringify(eventText.val()));
};
container.on('submit', saveEvent);
// Set time past events to have class of .past
// TODO: Loop through the rows of hours
function checkHourStatus() {
    var currentHour = moment();
    var rowHour = 9;
    console.log(currentHour.hour());
    console.log(rowHour);
    if (rowHour < currentHour.hour()) {
        row.setAttribute("class", "past");
    } else if (rowHour == currentHour.hour()) {
        row.setAttribute("class", "present");
    } else {
        row.setAttribute("class", "future");
        return;
    }
};
checkHourStatus();