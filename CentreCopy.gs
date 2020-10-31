function centre_copy() { //To copy the centre entered by participant the first time to prevent duplicate IDs
  var sheet = SpreadsheetApp.getActiveSheet();
  var startRow = 2;  // First row of data to process
  var numRows = sheet.getLastRow()-1;   // Number of rows to process

  // Fetch the range of cells A2:AH1000
  var dataRange = sheet.getRange(startRow, 1, numRows, 35)

  // Fetch values for each row in the Range.
  var data = dataRange.getValues();
  for (var i = 0; i < data.length; i++) {
    var row = data[i];
    var cent = row[4]; //centre entered by participant
    if(sheet.getRange(startRow + i, 31).getValue()=="" && cent!='')
      sheet.getRange(startRow + i, 31).setValue(cent);
  }
  team_no();
}
