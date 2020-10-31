function send_venue() { //sends details of venue
  var sheet = SpreadsheetApp.getActiveSheet();
  var startRow = 2;  // First row of data to process
  var numRows = sheet.getLastRow()-1;   // Number of rows to process

  // Fetch the range of cells A2:AH1000
  var dataRange = sheet.getRange(startRow, 1, numRows, 35)

  // Fetch values for each row in the Range.
  var data = dataRange.getValues();
  var emailSent = "Venue Email Sent";
  var sub = "Venue for Mimamsa 2020";
  for (var i = 0; i < data.length; i++) {
    var row = data[i];
    var email = row [1];
    var cent = row[4];
    var p1 = row[6];
    var tid = row[31];
    var isEmailSent = row[33];
    if (cent=='Ahmedabad'){
      var centre="<a href='https://goo.gl/maps/zPWBoXba5HuFdvuBA'>Indian Institute of Technology Gandhinagar<br>Palaj, Gujarat-382355</a>";
      var contact="";
    }
    else if (cent=='Bengaluru'){
      var centre="<a href='https://www.google.co.in/maps/place/Indian+Institute+of+Science/@13.0218597,77.5671423,15z/data=!4m2!3m1!1s0x0:0x3fc1cd64d345c13f'>Indian Institute of Science,<br>CV Raman Avenue, Bengaluru,<br>Karnataka – 560012</a>";
      var contact="";
    }
    else if (cent=='Bhopal'){
      var centre="<a href='https://www.google.co.in/maps/place/IISER+Bhopal/@23.2883503,77.273526,17z/data=!3m1!4b1!4m2!3m1!1s0x397c60d9f8872aef:0x9b99241b1431032'>Indian Institute of Science Education and Research,<br>Bhopal, Bypass road,<br>Bhauri, Bhopal,<br>Madhya Pradesh – 462066</a>";
      var contact="";
    }
    else if (cent=='Bhubaneswar'){
      var centre="<a href='https://www.google.co.in/maps/place/NISER+,+BHUBANESWAR/@20.1708092,85.6828153,15z/data=!4m5!3m4!1s0x0:0x4afd60fecfe2737b!8m2!3d20.1710509!4d85.6861198'>NISER Bhubneshwar,<br>P.O. Jatni, Khurda, Padanpur, <br>Odisha – 752050</a>";
      var contact="";
    }
    else if (cent=='Chennai'){
      var centre="<a href='https://goo.gl/maps/2RPrwTCQLtocUu798'>IIT Madras,<br> near CLRI, Sardar Patel Road, Adyar,<br>Chennai, Tamil Nadu 600036</a>";
      var contact="";
    }
    else if (cent=='Delhi - North'){
      var centre="<a href='https://www.google.co.in/maps/place/Miranda+House+(University+Of+Delhi)/@28.6928721,77.2080126,17z/data=!3m1!4b1!4m5!3m4!1s0x390cfdecc41acd4f:0x323446881307e318!8m2!3d28.6928674!4d77.2102013'>Miranda House,<br>GC Narang Road, University Enclave, <br>Delhi, 110007</a>";
      var contact="";
    }
    else if (cent=='Delhi - South'){
      var centre="<a href='https://www.google.com/maps/place/Sri+Venkateswara+College/@28.589451,77.1659193,17z/data=!3m1!4b1!4m5!3m4!1s0x390d1d1385ae517f:0xe031eba75ab323ab!8m2!3d28.5894463!4d77.168108'>Sri Venkateswara College (University of Delhi),<br>Benito Juarez Road, Dhaula Kuan,<br>New Delhi - 110 021</a>";
      var contact="";
    }
    else if (cent=='Goa'){
      var centre="<a href='https://goo.gl/maps/zGB4orBBt8QsjM8d7'>National Institute of Technology<br>Farmagudi,<br>Ponda, Goa-403401</a>";
      var contact="";
    }
    else if (cent=='Guwahati'){
      var centre="<a href='https://www.google.co.in/maps/place/Indian+Institute+of+Technology+Guwahati/@26.1902571,91.6898352,17z/data=!3m1!4b1!4m5!3m4!1s0x375a5ac1e7cc93d5:0xbf481e3cfc490e1!8m2!3d26.1902523!4d91.6920239'>IIT Guwahati,<br>Surjyamukhi Road, North, Amingaon,<br> Guwahati, Assam 781039</a>";
      var contact="";
    }
    else if (cent=='Hyderabad'){
      var centre="<a href='https://www.google.co.in/maps/place/College+for+Integrated+Studies+,+University+of+Hyderabad/@17.4531974,78.3121163,17z/data=!4m8!1m2!2m1!1sCentre+for+Integrated+Studies+(South+Campus),+Gopanapalli,+Hyderabad,+Telangana!3m4!1s0x3bcb9322c3da0bc3:0x5a4b967ccee1ac12!8m2!3d17.4540704!4d78.3141357'>Centre for Integrated Studies,<br>South Campus, University of Hyderabad, Central University P.O,<br> Hyderabad, Telangana 500046</a>";
      var contact="";
    }
    else if (cent=='Jaipur'){
      var centre="<a href='https://g.page/IISUNIV?share'>IIS University,<br>Gurukul Marg, Sector 2, Hans Vihar,<br> Kalyanpura, Mansarovar,<br> Jaipur, Rajasthan 302020</a>";
      var contact="";
    }
    else if (cent=='Kolkata'){
      var centre="<a href='https://www.google.co.in/maps/place/Presidency+College/@22.5762002,88.3603503,17z/data=!4m8!1m2!2m1!1sPresidency+College,+86%2F1,+College+Street,+College+Square,+Kolkata,+West+Bengal!3m4!1s0x3a027652a665aad3:0xfc7b5a065284bdd9!8m2!3d22.575507!4d88.363515'>PLT-2, Presidency University,<br>86/1, College Street, <br>College Square, Kolkata,<br>West Bengal- 700073</a>";
      var contact="";
    }
    else if (cent=='IISER Kolkata'){
      var centre="<a href='https://www.google.co.in/maps/place/Indian+Institute+of+Science+Education+and+Research+Kolkata/@22.9638419,88.5245023,15z/data=!4m2!3m1!1s0x0:0x92d423474389ff5c?ved=2ahUKEwitjLH_sv_eAhVDi3AKHVGlAz4Q_BIwDnoECAkQCw'>Indian Institute of Science Education and Research,<br>Mohanpur, Nadia, <br>West Bengal - 741 246</a>";
      var contact="";
    }
    else if (cent=='Mohali'){
      var centre="<a href='https://www.google.co.in/maps/place/Indian+Institute+of+Science+Education+and+Research/@30.664513,76.7270073,17z/data=!4m8!1m2!2m1!1siiser+mohali!3m4!1s0x390fe955afa88bcf:0xab6356114a6f197f!8m2!3d30.6649526!4d76.7300421'>IISER Mohali,<br>Knowledge city, Sector 81, SAS Nagar,<br>Manauli, Punjab - 140306</a>";
      var contact="";
    }
    else if (cent=='Mumbai'){
      var centre="<a href='https://www.google.co.in/maps/place/Indian+Institute+of+Technology+Bombay/@19.1334302,72.9132679,15z/data=!4m2!3m1!1s0x0:0x68fdcea4c5c5894e?sa=X&ved=0ahUKEwi2i5i5mpLRAhXJLY8KHVH_AJMQ_BII7AEwJQ'>Indian Institute of Technology,<br>Powai, Mumbai,<br>Maharashtra – 400076</a>";
      var contact="";
    }
    else if (cent=='Nagpur'){
      var centre="<a href='https://g.page/vnitnagpur?share'>Visvesvaraya National Institute of Technology,<br>South Ambazari Road, Nagpur, Maharashtra. Pin 440010</a>";
      var contact="";
    }
    else if (cent=='Nalgonda'){
      var centre="<a href='https://goo.gl/maps/8ihWFezeoVYG8yJe7'>Telangana Social Welfare Residential Degree College for Women<br>Near Namaste Telangana Office,<br>Cherlapally, Nalgonda</a>";
      var contact="";
    }
    else if (cent=='Pune'){
      var centre="<a href='https://www.google.co.in/maps/place/Indian+Institute+of+Science+Education+and+Research+(IISER)/@18.5476537,73.8075519,15z/data=!4m2!3m1!1s0x0:0xd0e6d0861972dfca?sa=X&ved=0ahUKEwjh3OHdmpLRAhUMKo8KHfN-BNwQ_BII3wEwIQ'>Indian Institute of Science Education and Research (IISER)<br>Dr. Homi Bhabha Road,<br>Pashan, Pune 411 008</a>";
      var contact="";
    }
    else if (cent=='Tirupati'){
      var centre="<a href='https://www.google.co.in/maps/place/Indian+Institute+of+Science+Education+and+Research,+Tirupati/@13.6586332,79.4872481,15z/data=!4m5!3m4!1s0x0:0x57d3825378f71777!8m2!3d13.6586332!4d79.4872481'>Indian Institute of Science Education and Research,<br>C/o See Rama Engineering College (Transit Campus),<br>Rami Reddy Nagar, Karakambadi Road,<br>Mangalam (P.O.), Tirupati,<br>Andhra Pradesh – 517507</a>";
      var contact="";
    }
    else if (cent=='Trivandrum'){
      var centre="<a href='https://goo.gl/maps/6SUewxM3mDx4dnh77'>College of Engineering Trivandrum,<br>Sreekaryam, <br>Thiruvananathapuram, Kerala -695016</a>";
      var contact="";
    }
    else if (cent=='Vadodara'){
      var centre="<a href='https://www.google.co.in/maps/place/Maharaja+Sayajirao+University,+Sayajiganj,+Vadodara,+Gujarat+390020/@22.3124684,73.1794681,16z/data=!3m1!4b1!4m5!3m4!1s0x395fcf4d168ed471:0xc95be30239975099!8m2!3d22.3120277!4d73.1836372'>The Maharaja Sayajirao University of Baroda,<br>Pratapgunj, Vadodara, <br>Gujarat – 390002</a>";
      var contact="";
    }
    else {
      break;
    }
    if (isEmailSent != emailSent && email!='' && tid!='') {
      var message = "Dear " + p1 + ",<br>";
      message+="<b>Team registration number (Team ID):</b> " + tid + "<br>";
      message+="<b>Centre:</b> " + cent + "<br><b>Date:</b> 18th January 2020, Saturday<br><b>Time:</b> 03:00 pm to 05:00 pm<br><br><b>Venue:</b><br> " + centre + "<br><br>";
      message+="In case of any difficulty with locating your centre on the day of the event, kindly contact our student representatives at your centre:<br>" + contact + "<br><br>";
      message+="Please make a note of the following important information regarding participation in the event:<br>"
      message+="<ol><li>Please report to your centre at <b>2:00 pm</b> or before on the day of Prelims. Teams who report 15 minutes after the commencement of the exam will not be allowed to write the exam.</li>";
      message+="<li>All members must carry valid <b>college identity cards</b>.</li>";
      message+="<li>You are required to bring your own stationery such as pens, pencils, etc.</li>";
      message+="<li>Use of non-programmable scientific calculators is permitted.</li>";
      message+="<li>Electronic items such as Mobile/Cell phones, Smart Watch, Pocket PCs, Palmtops, Laptops, iPads, and iPods are NOT allowed inside the examination hall.</li></ol><br><br>";
      message+="<center>We wish you all the best for the exam.</center><br><br><br>---<br>Cheers :) <br>Team Mimamsa";
      message+="<br><a href='http://mimamsa.iiserpune.ac.in/'>Website</a>, <a href='https://www.facebook.com/iiserpune.mimamsa.quiz/'>Facebook</a>, <a href='https://www.instagram.com/mimamsa_iiserpune/'>Instagram</a>, <a href='http://yt.vu/+mimamsa'>YouTube</a><br><br>Presented by : <br> <a href='https://www.praj.net/'><img src='http://mimamsa.iiserpune.ac.in/images/praj.png' width='200' height ='200'></a>";
      MailApp.sendEmail({to: email, subject: sub, htmlBody: message });
      sheet.getRange(startRow + i, 34).setValue(emailSent);
    }
  }
}
