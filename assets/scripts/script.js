// Display current day and date at top of page
var currentDay = document.querySelector("#currentDay")
currentDay.textContent = "Today is " + (moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

var hour = document.querySelector('.hour')
var save = document.getElementsByClassName('saveBtn')


// Get saved events of each row
function getSavedEvents() {
    // Get saved event descriptions from local storage
    var eventTextSaved9 = localStorage.getItem("event-9");
    var eventTextSaved10 = localStorage.getItem("event-10");
    var eventTextSaved11 = localStorage.getItem("event-11");
    var eventTextSaved12 = localStorage.getItem("event-12");
    var eventTextSaved13 = localStorage.getItem("event-13");
    var eventTextSaved14 = localStorage.getItem("event-14");
    var eventTextSaved15 = localStorage.getItem("event-15");
    var eventTextSaved16 = localStorage.getItem("event-16");
    var eventTextSaved17 = localStorage.getItem("event-17");
    
    document.getElementById("event-text-9").value = eventTextSaved9;
    document.getElementById("event-text-10").value = eventTextSaved10;
    document.getElementById("event-text-11").value = eventTextSaved11;
    document.getElementById("event-text-12").value = eventTextSaved12;
    document.getElementById("event-text-13").value = eventTextSaved13;
    document.getElementById("event-text-14").value = eventTextSaved14;
    document.getElementById("event-text-15").value = eventTextSaved15;
    document.getElementById("event-text-16").value = eventTextSaved16;
    document.getElementById("event-text-17").value = eventTextSaved17;
}
getSavedEvents();


// Save events text of each row to local storage
function saveEvent(event) {
    event.preventDefault();
    
    // Target the input field that is a sibling of the savebutton
    var eventTextInput = $(this).siblings(".event-text").val();
    var eventKey = $(this).parent().attr("id");

    // Save the value of the eventText into local storage with a key of the ID of that row
    localStorage.setItem(eventKey, eventTextInput);
    getSavedEvents();
};

// Loop through the save buttons to save data to local storage
for(let i = 0; i < save.length; i++) {
    save[i].addEventListener("click", saveEvent);
}



// Set time past events to have class of .past
// TODO: Loop through the rows of hours
function checkHourStatus() {
    var currentHour = moment();

    // Get count of number of hour rows on page
    var containerCount = document.querySelector('#container').childElementCount;

    // Get parent element of rows to enable looping through the rows
    var container = document.querySelector("#container")

    // Get ID of each row then take the hour number
    var row = document.querySelector(".row")

    // Loop through each row to apply styling based on hour of row
    for (var i = 0; i < containerCount; i++) {
        var rowHour = container.children[i].getAttribute("id").split("-")[1];

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