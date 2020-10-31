function send_emails() { //Sends Emails
  var sheet = SpreadsheetApp.getActiveSheet();
  var startRow = 2;  // First row of data to process
  var numRows = sheet.getLastRow()-1;   // Number of rows to process

  // Fetch the range of cells A2:AH1000
  var dataRange = sheet.getRange(startRow, 1, numRows, 35)

  // Fetch values for each row in the Range.
  var data = dataRange.getValues();
  var emailSent = "Email Sent";
  var sub = "Instructions for Mimamsa 2020";
  for (var i = 0; i < data.length; i++) {
    var row = data[i];
    var email = row [1];
    var coll = row[2];
    var addr = row[3];
    var cent = row[4];
    var p1 = row[6];
    var p1_crs = row[7];
    var p1_yr = row[8];
    var p1_roll = row[9];
    var p1_mob = row [10];
    var p1_mail = row [11];
    var p2 = row[12];
    var p2_crs = row[13];
    var p2_yr = row[14];
    var p2_roll = row[15];
    var p2_mob = row [16];
    var p2_mail = row [17];
    var p3 = row[18];
    var p3_crs = row[19];
    var p3_yr = row[20];
    var p3_roll = row[21];
    var p3_mob = row [22];
    var p3_mail = row [23];
    var p4 = row[24];
    var p4_crs = row[25];
    var p4_yr = row[26];
    var p4_roll = row[27];
    var p4_mob = row [28];
    var p4_mail = row [29];
    var tid = row[31];
    var isEmailSent = row[32];
    if (isEmailSent != emailSent) {
      var message = "Dear " + p1 + ",<br>";
      message+="We are pleased to inform you that you have successfully registered for Mimamsa Prelims 2020.<br>Your team registration number (Team ID) is :<b> "+tid+"</b><br>";
      message+="<b>Date:</b> 18th January 2020, Saturday<br><b>Time:</b> 03:00 pm to 05:00 pm<br><br>Please make a note of the following important information regarding participation in the event :<br>";
      message+="<ol><li>Please report to your centre at <b>2:00 pm</b> or before on the day of Prelims. Teams who report 15 minutes after the commencement of the exam will not be allowed to write the exam.</li>";
      message+="<li>All members must carry valid <b>college identity cards</b>.</li>";
      message+="<li>You are required to bring your own stationery such as pens, pencils, etc.</li>";
      message+="<li>Use of non-programmable scientific calculators is permitted.</li>";
      message+="<li>In another email that will be sent two weeks before the exam, you will be informed about the venue of the exam along with the details of the centre coordinators.";
      message+="<li>Further details will be available on our website http://mimamsa.iiserpune.ac.in. For any queries, please write back to us or you may call:<br> GC1: +91-phonenumber <br> GC2: +91-phonenumber.</li></ol>";
      message+="<br><br>Given below are the details you entered. Any typos or mistakes can be corrected before or on the day of prelims using the Google form. Only if you need to <b>change the centre of your choice</b>, email us about the same.<br><br>";
      //table with registration data
      message+="<table border='1' cellspacing='0'><tr><td><b>College</b></td><td>"+coll+"</td></tr><tr><td><b>Address</b></td><td>"+addr+"</td></tr><tr><td><b>Centre</b></td><td>"+cent+"</td></tr><tr><td><b>Team ID</b></td><td>"+tid+"</td></tr></table><br><br>";
      message+="<table border='1' cellspacing='0'><tr><td><b>Participant</b></td><td><b>Name</b></td><td><b>Course</b></td><td><b>Year</b></td><td><b>Roll</b></td><td><b>Mobile</b></td><td><b>Email-ID</b></td></tr>";
      message+="<tr><td>1</td><td>"+p1+"</td><td>"+p1_crs+"</td><td>"+p1_yr+"</td><td>"+p1_roll+"</td><td>"+p1_mob+"</td><td>"+p1_mail+"</td></tr>";
      message+="<tr><td>2</td><td>"+p2+"</td><td>"+p2_crs+"</td><td>"+p2_yr+"</td><td>"+p2_roll+"</td><td>"+p2_mob+"</td><td>"+p2_mail+"</td></tr>";
      message+="<tr><td>3</td><td>"+p3+"</td><td>"+p3_crs+"</td><td>"+p3_yr+"</td><td>"+p3_roll+"</td><td>"+p3_mob+"</td><td>"+p3_mail+"</td></tr>";
      message+="<tr><td>4</td><td>"+p4+"</td><td>"+p4_crs+"</td><td>"+p4_yr+"</td><td>"+p4_roll+"</td><td>"+p4_mob+"</td><td>"+p4_mail+"</td></tr>";
      message+="</table><br>";
      message+="<br>We would be grateful if you could spread the word about Mimamsa among your friends and encourage them to participate.<br><br><br>---<br>Cheers :) <br>Team Mimamsa";
      message+="<br><a href='http://mimamsa.iiserpune.ac.in/'>Website</a>, <a href='https://www.facebook.com/iiserpune.mimamsa.quiz/'>Facebook</a>, <a href='https://www.instagram.com/mimamsa_iiserpune/'>Instagram</a>, <a href='http://yt.vu/+mimamsa'>YouTube</a><br><br>Presented by : <br> <a href='https://www.praj.net/'><img src='http://mimamsa.iiserpune.ac.in/images/praj.png' width='200' height ='200'></a>";
      message+="<br><br><font color='grey'>For all centres, prelims will take place only if at least ten teams choose that centre. Although efforts shall be made to allot teams to the centre of their choice, IISER-Pune reserves the right to assign a team to a centre that is different from the one mentioned during registration. However, in all such cases, the teams shall be informed well in advance.<//font>";
      if(email!='' && tid!=''){
        MailApp.sendEmail({to: email, subject: sub, htmlBody: message});
        sheet.getRange(startRow + i, 33).setValue(emailSent);
      };
    };
  };
};
