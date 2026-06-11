/**
 * Google Apps Script for Zentrix Public Page Submissions
 *
 * INSTRUCTIONS FOR DEPLOYMENT:
 * 1. Open your Google Sheet where you want to collect submissions.
 * 2. Click on "Extensions" -> "Apps Script".
 * 3. Delete any code in the editor and paste this code.
 * 4. Save the script (Ctrl+S or Cmd+S).
 * 5. Click "Deploy" -> "New deployment".
 * 6. Select type: "Web app".
 * 7. Set configuration:
 *    - Description: Zentrix Form Webhook
 *    - Execute as: Me (your-email@gmail.com)
 *    - Who has access: Anyone
 * 8. Click "Deploy".
 * 9. Copy the "Web app URL" (it will look like: https://script.google.com/macros/s/AKfycb.../exec).
 * 10. Update your VITE_GOOGLE_SHEET_WEBHOOK environment variable in the .env file with this URL.
 */

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  let data;

  try {
    data = JSON.parse(e.postData.contents);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({
        status: "error",
        message: "Invalid JSON payload: " + err.toString(),
      }),
    ).setMimeType(ContentService.MimeType.JSON);
  }

  const headers = [
    "Timestamp",
    "Name",
    "Services",
    "Other Service",
    "Contact",
    "Email",
    "Source",
    "Other Source",
  ];

  try {
    // Automatically set up headers if the sheet is completely empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(headers);
    }

    // Append the submission row
    sheet.appendRow([
      new Date().toLocaleString(),
      data.name || "",
      data.services || "",
      data.otherService || "",
      data.contact || "",
      data.email || "",
      data.source || "",
      data.otherSource || "",
    ]);

    // Return a success response with CORS headers (automatically handled by ContentService)
    return ContentService.createTextOutput(
      JSON.stringify({
        status: "success",
      }),
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({
        status: "error",
        message: err.toString(),
      }),
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Optional: doGet function to verify the web app is working.
 * Returning a 200 message when visited in browser.
 */
function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({
      status: "ok",
      message: "Zentrix submission endpoint is active.",
    }),
  ).setMimeType(ContentService.MimeType.JSON);
}
