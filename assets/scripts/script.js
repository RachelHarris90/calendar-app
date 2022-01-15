// Display current day and date at top of page
var currentDay = document.querySelector("#currentDay")
currentDay.textContent = "Today is " + (moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
// TODO: Update time every second
// Identify which time has been selected

var hour = document.querySelector('.hour')
var save = document.querySelector('.saveBtn')

// TODO: Get saved events of each row
var savedEvents = [];
function getSavedEvents() {
    savedEvents = localStorage.getItem("eventText")
}

// Save events to local storage
// TODO: Save events text of each row

function saveEvent() {
    // Target the input field that is a sibling of the savebutton
    var eventText = $(this).siblings(".event-text").val();
    console.log(this);
    var eventKey = $(this).parent().attr("id");
    // Save the value of the eventText into local storage with a key of the ID of that row
    localStorage.setItem(eventKey, eventText);
};

save.addEventListener("click", saveEvent);


// Set time past events to have class of .past
// TODO: Loop through the rows of hours
function checkHourStatus() {
    var currentHour = moment();

    // Get count of number of hour rows on page
    var containerCount = document.querySelector('#container').childElementCount;
    console.log(containerCount)

    // Get ID of each row then take the hour number
    var row = document.querySelector(".row")

    var container = document.querySelector("#container")
    console.log(container.children)

    // Loop through each row to apply styling based on hour of row
    for (var i = 0; i < containerCount; i++) {
        var rowHour = container.children[i].getAttribute("id").split("-")[1];
        console.log(rowHour);
        // Check if the hour of a row is past/present/future
        if (rowHour < currentHour.hour()) {
            container.children[i].setAttribute("class", "past");
        } else if (rowHour == currentHour.hour()) {
            container.children[i].setAttribute("class", "present");
        } else {
            container.children[i].setAttribute("class", "future");
        }
    }
};
checkHourStatus();