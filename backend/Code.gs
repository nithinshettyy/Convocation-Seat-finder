function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

function getSeat(regNo) {
  const sheet = SpreadsheetApp
    .getActiveSpreadsheet()
    .getSheetByName("Sheet1");

  const data = sheet.getDataRange().getValues();

  for (let i = 1; i < data.length; i++) {
    if (data[i][0].toString().toUpperCase() === regNo.toUpperCase()) {
      return {
        name: data[i][1],
        seat: data[i][2]
      };
    }
  }
  return null;
}
