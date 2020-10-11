# Mimamsa-Reg-portal
This repository contains the Google App Script code used for assigning a unique (hopefully) team ID and sending confirmation mail on submission of details in the linked google form, the [Mimamsa](http://mimamsa.iiserpune.ac.in) Registration Portal. Currently, this is a code dump of whatever was used for Mimamsa 2020 with all personal details removed. I shall try to make it better in upcoming versions.

## Warning / Issues
- A major portion of the script was written by me, a total noob in Google App Script or JavaScript within a week using pieces from documentation and examples in 2019, when the previous registration portal had a SQL error.
- This is not user friendly to deploy and edit. Some basic HTML knowledge is required for editing emails. Still better than the previous registration portal.
- Currently the code has a max limit of 1500 entries.
- The code contains no comments because I was(am) a dumbass.
- This script has a "It just works philosophy" and isn't designed for efficiency.
- The job of "maintaining" the portal was undertaken by me in 2020 so I didn't bother changing it as long as I can make the necessary changes.
- The [IDE?](https://script.google.com/) for Google App Script sucks.

## Instructions
### Pre-Requisites
- A working Google Form with a linked Google Sheet. One may choose to clone the previous year's form.
- A Google Sheet with a layout same as in [template](template/template.csv).
  - You'll need to add columns AE:AJ, if you're cloning the previous year's form.
  - If the layout doesn't match you'll need to edit the codes.
### Deployment of Main Portal (Team ID and Confirmation Mail)
- Open the linked Google sheet and open _Tools > Script Editor_.
- In the newly opened tab give a name to your project.
- Create a new script file with the respective file names and copy over the content from this repository. (There is no way to upload the code or integrate with git :/ )
- You may need to add extra counters in TeamID.gs if you're expanding number of centres.
- Edit the contents of the email in Email.gs with HTML formatting, if necessary.
- Open the script editor with Mimamsa SAC ID (you may use personal ID if for **testing purposes only**) and open _Edit > Current Project's Triggers_.
- Click Add Trigger and enter the following options and save.
  - Choose which function to run: centre_copy
  - Choose which deployment should run: Head
  - Select event source: From spreadsheet
  - Select event type: On form submit
  - Failure notification settings: Notify me immediately (or other depending on your confidence)
### Deployment of Venue email
- Follow steps similar to Main Portal for copying file.
- Edit the email, if necessary.
- You may do either of the following: (with Mimamsa SAC ID)
  - Trigger manually by Opening the Venue.gs. With send_venue in select function, press Run.
  - Trigger automatically at a particular time by Adding trigger with:
    - Choose which function to run: centre_copy
    - Choose which deployment should run: Head
    - Select event source: Time-Driven
    - Select type of time based trigger: Specific date and time
    - Enter date/time (GMT+5:30): In YYYY-MM-DD-HH-MM format
    - Failure notification settings: Notify me immediately (or other depending on your confidence)
- If you expend your email quota [1500*/day](https://developers.google.com/apps-script/guides/services/quotas#g_suite), run the script again the next day.
### Deployment of Feedback email
- This is not recommended as it can be easily send by copy pasting all emails as bcc. You may run out of Email Quota on that day through this method.
- If you still want to proceed follow the same steps as Venue email.
## For those not part of Team Mimamsa
- Why are you here?
- You'll need to modify a lot to suit your needs. You'll find better stuff elsewhere.
- If you're a Mimamsa Enthusiast, GO AWAY..... SHOOOO....
- If you find any flaws or have any suggestions, please open an issue.
