function send_feedback() { //sends email asking for feedback about the exam
  var sheet = SpreadsheetApp.getActiveSheet();
  var startRow = 2;  // First row of data to process
  var numRows = 1500;   // Number of rows to process(1000 would be good, keep at 1 for testing purposes)

  // Fetch the range of cells A2:AE5
  var dataRange = sheet.getRange(startRow, 1, numRows, 35)

  // Fetch values for each row in the Range.
  var data = dataRange.getValues();
  var emailSent = "Feedaback Email Sent";
  var sub = "Feedback of Mimamsa 2020";
  for (var i = 0; i < data.length; i++) {
    var row = data[i];
    var p1 = row[6];
    var email = row [1];
    var tid = row[31];
    var isEmailSent = row[34];
    if (isEmailSent != emailSent && email!='' && tid!='') {
      var message = "Dear " + p1 +" ("+tid+") ,<br>";
      message+="Thank you for participating in Mimamsa 2020 Prelims. We at Mimamsa thrive to make the event better every year. Hence, please give us your valuable feedback about the event in the link given below :<br> ";
      message+="https://forms.gle/fFt8xo7iMo1rBrxK6<br><br><br>---<br>Cheers :) <br>Team Mimamsa <br>";
      message+="<br><a href='http://mimamsa.iiserpune.ac.in/'>Website</a>, <a href='https://www.facebook.com/iiserpune.mimamsa.quiz/'>Facebook</a>, <a href='https://www.instagram.com/mimamsa_iiserpune/'>Instagram</a>, <a href='http://yt.vu/+mimamsa'>YouTube</a><br><br>Presented by : <br> <a href='https://www.praj.net/'><img src='http://mimamsa.iiserpune.ac.in/images/praj.png' width='200' height ='200'></a>";
      MailApp.sendEmail({to: email, subject: sub, htmlBody: message});
      sheet.getRange(startRow + i, 35).setValue(emailSent);
    };
  };
};

//Designed by Harshavardhan BV
