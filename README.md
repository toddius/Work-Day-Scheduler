# Work-Day-Scheduler

#
I decided to use the Luxon third party API for date and time. 
# 
Lunox documanetaiton was very dfficult to follow, so I went with dayjs API instead.

##
Since the HTML and CSS have been created, I need to see how they link together to create the necessary divs to organize the scheduler. The hour blocks go from 9AM to 5PM. Each text field has a button to add the event to that hour block and saves it to local storage. One the divs are created, I can create a JS file to make the scheduler interactive.

###
When the scheduler is opened, using dayjs, the local time and date need to be requested and returned. The current date will be displayed at the top of the page. The current hour block needs a background of green. The hour blocks before the current hour block need to be set to grey. The hour blocks after the current hour clock need to have color set to red. New content added needs to be saved to local storage and content not disappear in the time block when the page is refreshed. 

#### 
I have been able to add the background color to all the time blocks. Unfortunately, at this point, I am adding the same color to all of the time blocks and not relative to the current time. The .each loop keeps repeating the result of the first time block.

#####
screenshot of scheduler:
(/Work-Day-Scheduler/Assets/screenshots/Work Day Scheduler.png?raw=true "")