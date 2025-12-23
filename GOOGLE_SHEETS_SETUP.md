# Google Sheets Integration Setup for Latin America Calculator

This guide will help you set up Google Sheets integration to automatically collect lead data from the Latin America Calculator.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet named "EFZS Latin America Leads"
3. In the first row, add these column headers:
   - A1: `Timestamp`
   - B1: `Free Zone`
   - C1: `Business Activity`
   - D1: `Visas Required`
   - E1: `Email`
   - F1: `Phone`
   - G1: `Package Cost (USD)`
   - H1: `Service Fee (USD)`
   - I1: `Total Cost (USD)`
   - J1: `Quote Number`
   - K1: `Source`

## Step 2: Create Google Apps Script

1. In your Google Sheet, click **Extensions** > **Apps Script**
2. Delete any code in the script editor
3. Copy and paste the following code:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data
    var data = JSON.parse(e.postData.contents);
    
    // Prepare row data
    var rowData = [
      data.timestamp,
      data.freeZone,
      data.businessActivity,
      data.visasRequired,
      data.email,
      data.phone,
      data.packageCost,
      data.serviceFee,
      data.totalCost,
      data.quoteNumber,
      data.source
    ];
    
    // Append the row to the sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'success',
      'message': 'Data added successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput("Script is running!");
}
```

4. Click the **disk icon** or press `Ctrl+S` (Windows) / `Cmd+S` (Mac) to save
5. Name your project: "Latin America Lead Capture"

## Step 3: Deploy the Web App

1. Click **Deploy** > **New deployment**
2. Click the **gear icon** next to "Select type"
3. Choose **Web app**
4. Configure the deployment:
   - **Description**: "Latin America Lead Capture API"
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
5. Click **Deploy**
6. **Important**: Copy the **Web App URL** that appears (it looks like: `https://script.google.com/macros/s/ABC.../exec`)
7. Click **Done**

## Step 4: Update Your React Code

1. Open `/Users/themeetpatel/Startups/efzs_web/src/pages/LatinAmericaCalculator.jsx`
2. Find this line (around line 474):
   ```javascript
   const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'
   ```
3. Replace `'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'` with your copied Web App URL:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_ACTUAL_URL/exec'
   ```
4. Save the file

## Step 5: Test the Integration

1. Run your React application
2. Navigate to the Latin America Calculator
3. Fill out all the form fields
4. Submit the form
5. Check your Google Sheet - you should see a new row with the lead data

## Data Collected

The following information is automatically captured for each lead:

- **Timestamp**: Date and time of submission
- **Free Zone**: Selected UAE free zone
- **Business Activity**: Selected business activity type
- **Visas Required**: Number of visas needed (0-3)
- **Email**: Customer's email address
- **Phone**: Customer's phone number
- **Package Cost**: Cost of the selected free zone package in USD
- **Service Fee**: Fixed service fee ($1,888.64)
- **Total Cost**: Total estimated cost in USD
- **Quote Number**: Unique quote reference number
- **Source**: Always "Latin America Calculator"

## Troubleshooting

### Issue: Data not appearing in Google Sheet

**Solution**: 
- Check that the Web App URL is correct in your code
- Ensure the Apps Script deployment is set to "Anyone" access
- Check browser console for errors
- Verify the sheet name hasn't changed

### Issue: Permission errors

**Solution**:
- When you first run the script, you'll need to authorize it
- Click "Review permissions" when prompted
- Select your Google account
- Click "Advanced" > "Go to [project name] (unsafe)"
- Click "Allow"

### Issue: CORS errors in browser console

**Solution**:
- This is normal when using `mode: 'no-cors'`
- The data is still being sent successfully
- The sheet will update even if you see these errors

## Security Notes

- The Web App URL should be kept somewhat private
- Consider adding rate limiting to prevent abuse
- For production, consider adding authentication tokens
- Regularly backup your Google Sheet data

## Optional: Add Notifications

To receive email notifications for new leads, add this function to your Apps Script:

```javascript
function sendEmailNotification(data) {
  var recipient = "your-email@example.com"; // Change this to your email
  var subject = "New Lead: " + data.freeZone;
  var body = "New lead received from Latin America Calculator:\n\n" +
             "Free Zone: " + data.freeZone + "\n" +
             "Business Activity: " + data.businessActivity + "\n" +
             "Visas: " + data.visasRequired + "\n" +
             "Email: " + data.email + "\n" +
             "Phone: " + data.phone + "\n" +
             "Total Cost: $" + data.totalCost + "\n" +
             "Quote Number: " + data.quoteNumber;
  
  MailApp.sendEmail(recipient, subject, body);
}
```

Then add this line in the `doPost` function after `sheet.appendRow(rowData);`:

```javascript
sendEmailNotification(data);
```

## Support

If you need help with the setup, please contact your development team or refer to:
- [Google Apps Script Documentation](https://developers.google.com/apps-script)
- [Google Sheets API Documentation](https://developers.google.com/sheets/api)
