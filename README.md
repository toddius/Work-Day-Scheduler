# Work-Day-Scheduler

#
I decided to use the Luxon third party API for date and time. 

##
Since the HTML and CSS have been created, I need to see how they link together to create the necessary divs to organize the scheduler. The hour blocks go from 9AM to 5PM. Each text field has a button to add the event to that hour block and saves it to local storage. One the divs are created, I can create a JS file to make the scheduler interactive.

###
When the scheduler is opened, using Luxon, the local time and date needs to be requested and returned. The current date will be displayed at the top of the page. The current hour block needs a background of green and I assume no new content can be added to the field. The hour blocks before the current hour block need to be set to grey and not able to add content to them. The hour blocks after the current hour clock need to have color set to red and new content added needs to be saved to local storage and content not disappear . The stored content also needs to be linked to the hour block it was added (perhaps that will be inevitable).