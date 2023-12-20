from mailjet_rest import Client
import auth_mailjet

API_KEY = auth_mailjet.api_key_public
API_SECRET = auth_mailjet.api_key_private

mailjet = Client(auth=(API_KEY, API_SECRET), version='v3.1')

details= {
    'sender': 'Jess.upson@hotmail.co.uk', # Replace with email address we will send confirmation from,
    'recipient' : 'upson.gross@outlook.com', # Replace with email (SQL query?) that we will send confirmation too,
    'booking_activity' : 'Festive Family Photoshoot',
    'booking_date' : '23/12/2023',
    'booking_session' : 'Morning'
}


data = {
    'Messages': [
        {
            'From': {
                'Email': details['sender'],
                'Name': 'Winter Wonderland'
            },
            'To': [
                {
                    'Email': details['recipient'],
                    'Name': 'You' # Can update with user first name
                }
            ],
            'Subject': 'Booking Confirmation',
            'TextPart': f'Your booking for the {details['booking_activity']} {details["booking_session"]} session on {details['booking_date']} has been successful!'
        }
    ]
}

result = mailjet.send.create(data=data)
print(result.status_code)
print(result.json())
