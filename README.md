# Winter WonderMap

Welcome to Winter WonderMap, your go-to platform for discovering and booking festive events in the vibrant city of London.



## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Testing](#testing)


## Introduction

Winter WonderMap is an interactive map that allows users to explore and book curated events during the festive season in London. The project started with the idea of creating a fictional winter wonderland and evolved into a practical solution focused on the city's real events.



## Features

- **Interactive Map:** Explore the map of London with markers for various festive events.
- **Event Filtering:** Filter events based on categories to find the ones that interest you.
- **Booking System:** Securely book your favorite events directly through the platform.
- **Confirmation Emails:** Receive email confirmations for successful bookings.
- **Calendar Integration:** Add booked events to your calendar for easy access.


## Technologies Used

- **Frontend:** React, Leaflet.js, Redux, QRCode Generator
- **Backend:** Node.js, Express.js, MySQL
- **Styling:** CSS
- **Communication:** RESTful API
- **Other Tools:** Git, GitHub, Trello (for task management)



## Getting Started

To run the Winter WonderMap locally, follow these steps:

1. Clone the repository: `git clone https://github.com/Ana-Catarina-Basilio/4CodeGirls_Final_Act.git`
2. Install dependencies stated in package.json file : `npm install` 
3. Set up the database: Execute all SQL command queries of the DB_WonderWorld.sql file on MySQL.
4. In the backend folder, the app.js and db.js are responsible for api creation. Go to db.py and enter your SQL password.
5. Open another terminal and change directory to the backend folder and then run `node app.js` to start the backend. this action will load up localhost:3000
6. Start the frontend: `npm start` on the other terminal, if prompted to change your host location, accept by typing yes. This will navigate the front end to the next available localhost e.g localhost:3001


## Project Structure

The project is structured as follows:

- `/backend`: contains backend code(db.js and app.js), inactive subfolders: mailjet_api and  python_api_files (both reflect initial plan to use python for backend)
- `/database`: contains sql file (DB_WonderWorld.sql) for database setup.
- `/src`: contains the React frontend code.



## Usage
1. Enter your own name and password:`festive` into the login page
1. Explore the map to discover festive events.
2. Filter events based on your preferences by selecting an event category
3. Book your favorite events on the booking page.
4. Receive a web confirmation for successful bookings.
5. Add booked events to your calendar for easy access.



## Testing
Unit testing was written to ensure the Winter WonderMap functions reliably. 
run `npm test` ion the terminal and it will display detailed information about the test coverage and any potential issues.
