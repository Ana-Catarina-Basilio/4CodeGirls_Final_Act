import React from 'react';
import QRCode from 'qrcode.react';
import { useSelector } from 'react-redux';
import './QRCode.css';

const QRCodeGenerator = () => {
  const eventDetails = useSelector((state) => state.eventDetails);
  //console.log('eventDetails:', eventDetails);

  // Convert date and time formats
  const formattedDate = formatDate(eventDetails[0][0].event_date);
  const formattedTime = formatTime(eventDetails[0][0].event_time);
  //console.log('formattedDate:', formattedDate);
  //console.log('formattedTime:', formattedTime);

  const iCalData = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${eventDetails[0][0].name}
DTSTART:${formattedDate}T${formattedTime}Z
LOCATION:${eventDetails[0][0].location}
DESCRIPTION:${eventDetails[0][0].name}
END:VEVENT
END:VCALENDAR`;

  return (
    <div>
      <QRCode value={iCalData} className='qrCode' />
    </div>
  );
};

export default QRCodeGenerator;

//functions to format date and time for icalender date/TIME format of YYYYMMDDTHHMMSSZ
function formatDate(rawDate) {
  if (!rawDate) return ''; // Check if rawDate is undefined or falsy
  const [day, month, year] = rawDate.split('/');
  return `${year}${month.padStart(2, '0')}${day.padStart(2, '0')}`; // ensure motnh and day are always 2 digits
}

function formatTime(rawTime) {
  if (!rawTime) return ''; // Check if rawTime is undefined or falsy
  return rawTime.replace(/:/g, '') ;
}
