
const submitReservation = async (firstName, surname, email, events_id) => {
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
    
        }),
      });
  
      if (response.ok) {
        return { success: true };
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
  