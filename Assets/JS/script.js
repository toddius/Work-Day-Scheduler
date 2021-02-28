$(document).ready(function (){

// establish local date and time variables
let localDate = "";
let localTime = "";
let scheduleHour = 0;
// get local date and time
localDate = dayjs().format('dddd, MMMM D');
console.log(localDate);
localTime = dayjs().hour();
// localTime = 9;

// localTime = dayjs().subtract(12, 'hour');
console.log(localTime);

//add current day to header
$("#currentDay").html(localDate);

// loop through time blocks and compare different time blocks to currrent time
function setBlockColor () {
    $(".hour-block").each(function(index, element){
        scheduleHour = parseInt($('.hour-block').data("id"));
        // console.log(scheduleHour);
// if time block is same time as current time add to time block class to present
    if (localTime === scheduleHour) {
        $('.hour-block').addClass('present');
// if time block is later that current time add to time block class to future
    } else if (localTime < scheduleHour) {
        $('.hour-block').addClass('future');
// if time block is earlier than current time add to time block class to past
    } else {
        $('.hour-block').addClass('past');
    }
    console.log(scheduleHour);
    return false;
})
}
//save text area input to local storage after 'lock' button is clicked
function saveEvent(){
    $('textarea').each(function(){    
        var id = $(this).attr('id');
        var value = $(this).val();
       localStorage.setItem(id, value);

    });   
};
// content entered into the textarea will remain after the page is reloaded
function contentPersist(){
    $('textarea').each(function(){    
        var id = $(this).attr('id');
        var value = localStorage.getItem(id);

        $(this).val(value);

    }); 





}




setBlockColor();
contentPersist();
$('.saveBtn').on("click", saveEvent);

}); 
