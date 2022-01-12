// Display current day and date at top of page
var currentDay = document.querySelector("#currentDay")

currentDay.textContent = "Today is " + (moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

// TODO: Update time every second

// Identify which time has been selected
var container = document.querySelector(".container")
var row = document.querySelector(".row")
var hour = document.querySelector(".hour")
var description = document.querySelector(".description")
var save = document.querySelector(".saveBtn")

var events = [];

// Get previously saved events on page loan
// function getEvents() {
//     var storedEvents = JSON.parse(localStorage.getItem("eventDescription"))
    
//     if (storedEvents !== null) {
//         eventDescription = storedEvents;
//     }
//     getEvents();
// };

// TODO: Create render events function

// Save to local storage when .saveBtn is clicked
// function saveEvent() {
//     var newEvent = {
//         description: description.value,
//     };  

//     localStorage.setItem("newEvent", json.stringify(newEvent));

//     description = "";
// }

// save.addEventListener("click", function(event) {
//     event.preventDefault();
//     saveEvent();
//     getEvents();
// });

var event9 = document.querySelector("#event-9")
var event10 = document.querySelector("#event-10")
var event11 = document.querySelector("#event-11")
var event12 = document.querySelector("#event-12")
var event13 = document.querySelector("#event-13")
var event14 = document.querySelector("#event-14")
var event15 = document.querySelector("#event-15")
var event16 = document.querySelector("#event-16")
var event17 = document.querySelector("#event-17")

var hour9 = document.querySelector("#hour-9").value = 9;
var hour10 = document.querySelector("#hour-9").value = 10;
var hour11 = document.querySelector("#hour-9").value = 11;
var hour12 = document.querySelector("#hour-9").value = 12;
var hour13 = document.querySelector("#hour-9").value = 13;
var hour14 = document.querySelector("#hour-9").value = 14;
var hour15 = document.querySelector("#hour-9").value = 15;
var hour16 = document.querySelector("#hour-9").value = 16;
var hour17 = document.querySelector("#hour-9").value = 17;


// // Set time past events to have class of .past
function checkHourStatus() {
    var currentHour = moment();

    if (hour9 < currentHour.hour()) {
        event9.setAttribute("class", "past");
    } else if (event9 == currentHour.hour()) {
        event9.setAttribute("class", "present");
    } else {
        event9.setAttribute("class", "future");
    }
};

checkHourStatus()


// Set present events to have class of.present
// Set future events to have class of .future




