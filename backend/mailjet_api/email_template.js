import { api_key_public, api_key_private } from './auth_mailjet';

let booking_activity = 'Ice skating';
let booking_session = 'morning';
let booking_date = '23rd Dec';

const Mailjet = require('node-mailjet');

const mailjet = Mailjet.apiconnect(
    process.api_key_public,
    process.api_key_private,
);


const request = mailjet
        .post('send', { version: 'v3.1' })
        .request({
            Messages: [
                {
                    From: {
                        Email: 'Jess.upson@hotmail.co.uk',
                        Name: 'Winter Wonderland',
                    },
                    To: [
                        {
                            Email: 'upson.gross@outlook.com',
                            Name: 'You',
                        },
                    ],
                    Subject: 'Booking Confirmation',
                    TextPart: 'Your booking for the ${booking_activity} ${booking_session} session on ${booking_date} has been successful!',
                },
            ],
        })

request
    .then(result => {
        console.log(result.body)
    })
    .catch(err => {
        console.log(err.statusCode)
    })