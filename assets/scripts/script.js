// Display current day and date at top of page
var currentDay = document.querySelector("#currentDay")

currentDay.textContent = "Today is " + (moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

// Identify which time has been selected
var container = document.querySelector(".container")
var hour = document.querySelector("#hour")
var description = document.querySelector(".description")
var save = document.querySelector(".save")

var events = [];

// Get previously saved events on page loan
function getEvents() {
    var storedEvents = JSON.parse(localStorage.getItem("eventDescription"))
    
    if (storedEvents !== null) {
        eventDescription = storedEvents;
    }
    getEvents();
}

function renderEvents() {
    
}

// Save to local storage when .saveBtn is clicked
container.addEventListener("click", function(save) {
    var events = description.value.trim();

    if (events === "") {
        return;
    }

    getEvents();
    renderEvents();
});

// Set time past events to have class of .past
// Set present events to have class of.present
// Set future events to have class of .future



