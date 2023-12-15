// This file contains the API calls to the backend for booking a reservation

const submitReservation = async (firstName, surname, email, events_id, event_name, event_date,event_time) => {
    try {
      const response = await fetch('http://127.0.0.1:3000/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: firstName,
          surname: surname,
          email: email,
          events_id:events_id,
          event_name:event_name,
          event_date:event_date,
          event_time:event_time,
        }),
      });
  
      if (response.ok) {
        const data = await response.json();
        return { success: true, bookingId: data.bookingId };
      } else {
        // Handle error
        console.error('Reservation failed');
        return { success: false, error: 'Reservation failed' };
      }
    } catch (error) {
      console.error('Error making reservation:', error);
      return { success: false, error: 'Error making reservation' };
    }
  };
  
  export { submitReservation };
  