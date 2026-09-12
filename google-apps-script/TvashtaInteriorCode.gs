const NOTIFICATION_EMAIL = 'tvashtainterior@gmail.com';
const SHEET_HEADERS = [
  'Submitted At',
  'Source',
  'Name',
  'Email',
  'Phone',
  'Property Type',
  'Property Location',
  'Best Time To Talk',
  'Message',
  'WhatsApp Updates',
  'Email Status',
  'Full Submission Data',
];

function doPost(e) {
  try {
    const data = getSubmittedData(e);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    ensureSheetHeaders(sheet);

    const submittedAt = data.submittedAt || new Date().toISOString();
    const source = data.source || 'website';
    const name = data.name || data.fullName || '';
    const email = data.email || '';
    const phone = data.phone || data.mobile || '';
    const propertyType = data.propertyType || '';
    const propertyLocation = data.propertyLocation || '';
    const bestTimeToTalk = data.bestTimeToTalk || data.selectedTime || '';
    const message = data.message || data.additionalInfo || '';
    const whatsappUpdates = data.whatsappUpdates === true || data.whatsappUpdates === 'true' ? 'Yes' : 'No';

    const rowNumber = sheet.getLastRow() + 1;
    sheet.appendRow([
      new Date(submittedAt),
      source,
      name,
      email,
      phone,
      propertyType,
      propertyLocation,
      bestTimeToTalk,
      message,
      whatsappUpdates,
      'Sending...',
      JSON.stringify(data),
    ]);

    try {
      MailApp.sendEmail({
        to: NOTIFICATION_EMAIL,
        subject: `New Tvashta Interior enquiry from ${name || 'website visitor'}`,
        body: buildPlainText({ submittedAt, source, name, email, phone, propertyType, propertyLocation, bestTimeToTalk, message, whatsappUpdates }),
        htmlBody: buildEmailHtml({ submittedAt, source, name, email, phone, propertyType, propertyLocation, bestTimeToTalk, message, whatsappUpdates }),
      });
      sheet.getRange(rowNumber, 11).setValue('Sent');
    } catch (mailError) {
      sheet.getRange(rowNumber, 11).setValue(`Failed: ${mailError.message}`);
      throw new Error(`Saved to Sheet, but email failed: ${mailError.message}`);
    }

    return jsonResponse({ success: true, message: 'Submitted successfully' });
  } catch (error) {
    return jsonResponse({ success: false, error: error.message });
  }
}

function testNotificationEmail() {
  MailApp.sendEmail({
    to: NOTIFICATION_EMAIL,
    subject: 'Tvashta Interior Apps Script test email',
    body: 'If you received this email, MailApp authorization and delivery are working.',
  });
}

function getSubmittedData(e) {
  if (e && e.parameter && e.parameter.data) {
    return JSON.parse(e.parameter.data);
  }

  if (e && e.postData && e.postData.contents) {
    return JSON.parse(e.postData.contents);
  }

  throw new Error('No data received');
}

function ensureSheetHeaders(sheet) {
  if (sheet.getLastRow() === 0) {
    sheet.getRange(1, 1, 1, SHEET_HEADERS.length).setValues([SHEET_HEADERS]);
  } else {
    const firstRow = sheet.getRange(1, 1, 1, SHEET_HEADERS.length).getValues()[0];
    const hasHeaders = SHEET_HEADERS.every((header, index) => firstRow[index] === header);

    if (!hasHeaders) {
      sheet.insertRowBefore(1);
      sheet.getRange(1, 1, 1, SHEET_HEADERS.length).setValues([SHEET_HEADERS]);
    }
  }

  const headerRange = sheet.getRange(1, 1, 1, SHEET_HEADERS.length);
  headerRange
    .setFontWeight('bold')
    .setFontColor('#ffffff')
    .setBackground('#4a5942')
    .setHorizontalAlignment('center');

  sheet.setFrozenRows(1);
  sheet.autoResizeColumns(1, SHEET_HEADERS.length);
}

function buildEmailHtml(data) {
  const submittedAt = new Date(data.submittedAt).toLocaleString('en-IN', {
    dateStyle: 'medium',
    timeStyle: 'short',
  });

  return `
  <div style="margin:0;background:#f4f6f1;padding:32px 16px;font-family:Arial,Helvetica,sans-serif;color:#273126;">
    <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #dfe5dc;border-radius:14px;overflow:hidden;box-shadow:0 8px 28px rgba(42,54,39,.1);">
      <div style="background:#4a5942;padding:28px 32px;">
        <div style="font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#e4c878;font-weight:bold;">TVASHTA INTERIOR</div>
        <h1 style="margin:12px 0 4px;color:#ffffff;font-size:26px;line-height:1.25;font-weight:700;">New enquiry received</h1>
        <p style="margin:0;color:#e0e8dc;font-size:14px;">A new enquiry has arrived from your website.</p>
      </div>

      <div style="padding:28px 32px;">
        <div style="background:#f4f7f2;border-left:4px solid #9f8033;border-radius:6px;padding:16px 18px;margin-bottom:24px;">
          <div style="font-size:11px;letter-spacing:1.4px;text-transform:uppercase;color:#66734f;font-weight:bold;">Contact</div>
          <div style="margin-top:7px;font-size:21px;font-weight:700;color:#2f3d2b;">${escapeHtml(data.name || 'Not provided')}</div>
          <div style="margin-top:5px;font-size:14px;color:#687267;">Received ${escapeHtml(submittedAt)}</div>
        </div>

        <table role="presentation" style="width:100%;border-collapse:collapse;font-size:15px;">
          ${emailRow('Email', data.email ? `<a href="mailto:${escapeHtml(data.email)}" style="color:#4a5942;text-decoration:none;">${escapeHtml(data.email)}</a>` : 'Not provided', true)}
          ${emailRow('Phone', data.phone || 'Not provided')}
          ${emailRow('Property type', data.propertyType || 'Not provided')}
          ${emailRow('Property location', data.propertyLocation || 'Not provided')}
          ${emailRow('Best time to talk', data.bestTimeToTalk || 'Not provided')}
          ${emailRow('WhatsApp updates', data.whatsappUpdates)}
          ${emailRow('Source', data.source)}
        </table>

        <div style="margin-top:24px;padding-top:22px;border-top:1px solid #e6ebe7;">
          <div style="font-size:11px;letter-spacing:1.4px;text-transform:uppercase;color:#687267;font-weight:bold;">Message</div>
          <div style="margin-top:10px;background:#f7f9f6;border-radius:8px;padding:15px 16px;color:#3d493d;font-size:15px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(data.message || 'No message provided')}</div>
        </div>

        ${data.email ? `<a href="mailto:${escapeHtml(data.email)}" style="display:inline-block;margin-top:26px;background:#4a5942;color:#ffffff;text-decoration:none;border-radius:6px;padding:13px 20px;font-size:14px;font-weight:bold;">Reply to ${escapeHtml(data.name || 'customer')}</a>` : ''}
      </div>

      <div style="background:#f7f9f6;border-top:1px solid #e6ebe7;padding:18px 32px;color:#788276;font-size:12px;line-height:1.5;">
        This enquiry was submitted through the Tvashta Interior website.
      </div>
    </div>
  </div>`;
}

function emailRow(label, value, valueIsHtml) {
  const safeValue = valueIsHtml ? value : escapeHtml(value);
  return `<tr><td style="width:38%;padding:11px 0;border-bottom:1px solid #edf1ec;color:#788276;font-size:13px;">${escapeHtml(label)}</td><td style="padding:11px 0;border-bottom:1px solid #edf1ec;color:#273126;font-weight:600;">${safeValue}</td></tr>`;
}

function buildPlainText(data) {
  return [
    'New Tvashta Interior enquiry',
    `Name: ${data.name || 'Not provided'}`,
    `Email: ${data.email || 'Not provided'}`,
    `Phone: ${data.phone || 'Not provided'}`,
    `Property Type: ${data.propertyType || 'Not provided'}`,
    `Property Location: ${data.propertyLocation || 'Not provided'}`,
    `Best Time: ${data.bestTimeToTalk || 'Not provided'}`,
    `WhatsApp Updates: ${data.whatsappUpdates}`,
    `Message: ${data.message || 'No message provided'}`,
    `Source: ${data.source}`,
  ].join('\n');
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function jsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
