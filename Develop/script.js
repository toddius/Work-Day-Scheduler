$(document).ready(function (){
// establish local date and time variables
let localDate = "";
let localTime = "";
let scheduleHour = 0;
// get local date and time
localDate = dayjs().format('dddd, MMMM D');
console.log(localDate);
localTime = dayjs().hour();
// localTime = dayjs().subtract(12, 'hour');
console.log(localTime);

//add current day to header
$("#currentDay").html(localDate);

// loop through time blocks and compare different time blocks to currrent time
function setBlockColor () {
    
    $(".hour-block").each(function(){
        // Test if the div element is empty
    //     if($(this).is(":empty")){
    //         $(this).css("background", "yellow");
    //     }
    // for (var i = $('data-idx'); i < 9; i++) {
        // console.log(i);
        scheduleHour = parseInt($('.this').data("id"));
        // let scheduleHour = parseInt(scheduleText);
        console.log(scheduleHour);
    // if (localTime > scheduleHour) {
    //     $('.hour-block').addClass('past');
    // } else if (localTime < scheduleHour) {
    //     $('.hour-block').addClass('future');
    // } else {
    //     $('.hour-block').addClass('present');
    // }

    if (localTime == scheduleHour) {
        $('.hour-block').addClass('present');
    } else if (localTime < scheduleHour) {
        $('.hour-block').addClass('future');
    } else {
        $('.hour-block').addClass('past');
    }
})
// if time block is earlier than current time change time block class to past
// if time block is same time as current time change time block class to present
// if time block is later that current time change time block class to future
}

setBlockColor();
}); 
