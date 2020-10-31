function team_no() { //Assigns TeamID by looking at centre name
  var sheet = SpreadsheetApp.getActiveSheet();
  var startRow = 2;  // First row of data to process
  var numRows = sheet.getLastRow()-1;   // Number of rows to process

  // Fetch the range of cells A2:AH1000
  var dataRange = sheet.getRange(startRow, 1, numRows, 35)

  // Fetch values for each row in the Range.
  var data = dataRange.getValues();
  var bencounter=100;
  var bhocounter=100;
  var bhwcounter=100;
  var checounter=100;
  var dlncounter=100;
  var dlscounter=100;
  var guwcounter=100;
  var hydcounter=100;
  var kolcounter=100;
  var iklcounter=100;
  var mohcounter=100;
  var mumcounter=100;
  var puncounter=100;
  var tircounter=100;
  var tvccounter=100;
  var vadcounter=100;
  var nagcounter=100;
  var jaicounter=100;
  var goacounter=100;
  var ahmcounter=100;//add or remove counters
  for (var i = 0; i < data.length; i++) {
    var row = data[i];
    var cent = row[30];
    var tid = row[31]
    if (cent=='Ahmedabad'){
      ahmcounter++;
      var out='AHM'+ahmcounter;
      if(sheet.getRange(startRow + i, 32).getValue()=="")
        sheet.getRange(startRow + i, 32).setValue(out);
    }
    else if (cent=='Bengaluru') {
      bencounter++;
      var out='BEN'+bencounter;
      if(sheet.getRange(startRow + i, 32).getValue()=="")
        sheet.getRange(startRow + i, 32).setValue(out);
    }
    else if (cent=='Bhopal'){
      bhocounter++;
      var out='BHO'+bhocounter;
      if(sheet.getRange(startRow + i, 32).getValue()=="")
        sheet.getRange(startRow + i, 32).setValue(out);
    }
    else if (cent=='Bhubaneswar'){
      bhwcounter++;
      var out='BHW'+bhwcounter;
      if(sheet.getRange(startRow + i, 32).getValue()=="")
        sheet.getRange(startRow + i, 32).setValue(out);
    }
    else if (cent=='Chennai'){
      checounter++;
      var out='CHE'+checounter;
      if(sheet.getRange(startRow + i, 32).getValue()=="")
        sheet.getRange(startRow + i, 32).setValue(out);
    }
    else if (cent=='Delhi - North'){
      dlncounter++;
      var out='DLN'+dlncounter;
      if(sheet.getRange(startRow + i, 32).getValue()=="")
        sheet.getRange(startRow + i, 32).setValue(out);
    }
    else if (cent=='Delhi - South'){
      dlscounter++;
      var out='DLS'+dlscounter;
      if(sheet.getRange(startRow + i, 32).getValue()=="")
        sheet.getRange(startRow + i, 32).setValue(out);
    }
    else if (cent=='Goa'){
      goacounter++;
      var out='GOA'+goacounter;
      if(sheet.getRange(startRow + i, 32).getValue()=="")
        sheet.getRange(startRow + i, 32).setValue(out);
    }
    else if (cent=='Guwahati'){
      guwcounter++;
      var out='GUW'+guwcounter;
      if(sheet.getRange(startRow + i, 32).getValue()=="")
        sheet.getRange(startRow + i, 32).setValue(out);
    }
    else if (cent=='Hyderabad'){
      hydcounter++;
      var out='HYD'+hydcounter;
      if(sheet.getRange(startRow + i, 32).getValue()=="")
        sheet.getRange(startRow + i, 32).setValue(out);
    }
    else if (cent=='Jaipur'){
      jaicounter++;
      var out='JAI'+jaicounter;
      if(sheet.getRange(startRow + i, 32).getValue()=="")
        sheet.getRange(startRow + i, 32).setValue(out);
    }
    else if (cent=='Kolkata'){
      kolcounter++;
      var out='KOL'+kolcounter;
      if(sheet.getRange(startRow + i, 32).getValue()=="")
        sheet.getRange(startRow + i, 32).setValue(out);
    }
    else if (cent=='IISER Kolkata'){
      iklcounter++;
      var out='IKL'+iklcounter;
      if(sheet.getRange(startRow + i, 32).getValue()=="")
        sheet.getRange(startRow + i, 32).setValue(out);
    }
    else if (cent=='Mohali'){
      mohcounter++;
      var out='MOH'+mohcounter;
      if(sheet.getRange(startRow + i, 32).getValue()=="")
        sheet.getRange(startRow + i, 32).setValue(out);
    }
    else if (cent=='Mumbai'){
      mumcounter++;
      var out='MUM'+mumcounter;
      if(sheet.getRange(startRow + i, 32).getValue()=="")
        sheet.getRange(startRow + i, 32).setValue(out);
    }
    else if (cent=='Nagpur'){
      nagcounter++;
      var out='NAG'+nagcounter;
      if(sheet.getRange(startRow + i, 32).getValue()=="")
        sheet.getRange(startRow + i, 32).setValue(out);
    }
    else if (cent=='Pune'){
      puncounter++;
      var out='PUN'+puncounter;
      if(sheet.getRange(startRow + i, 32).getValue()=="")
        sheet.getRange(startRow + i, 32).setValue(out);
    }
    else if (cent=='Tirupati'){
      tircounter++;
      var out='TIR'+tircounter;
      if(sheet.getRange(startRow + i, 32).getValue()=="")
        sheet.getRange(startRow + i, 32).setValue(out);
    }
    else if (cent=='Trivandrum'){
      tvccounter++;
      var out='TVC'+tvccounter;
      if(sheet.getRange(startRow + i, 32).getValue()=="")
        sheet.getRange(startRow + i, 32).setValue(out);
    }
    else if (cent=='Vadodara'){
      vadcounter++;
      var out='VAD'+vadcounter;
      if(sheet.getRange(startRow + i, 32).getValue()=="")
        sheet.getRange(startRow + i, 32).setValue(out);
    }
}
  send_emails();
}
