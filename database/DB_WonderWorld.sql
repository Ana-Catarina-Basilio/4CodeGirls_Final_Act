CREATE DATABASE wondermap;

USE wondermap;

CREATE TABLE events (
    events_id INT AUTO_INCREMENT PRIMARY KEY,
    category VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL,
    event_time TIME NOT NULL,
    event_date DATE NOT NULL,
    event_info TEXT,
    event_image VARCHAR(20)
);



CREATE TABLE Users (
    UserID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    events_id INT,
    User_FirstName VARCHAR(100) NOT NULL,
    User_Surname VARCHAR(100) NOT NULL,
    User_Email VARCHAR(100) NOT NULL,
    FOREIGN KEY(events_id) REFERENCES events(events_id)
    );


CREATE TABLE Bookings (
    BookingID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    UserID INT,
    events_id INT, 
    Booking_Time TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- so that we can check when the user does the reservation
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (events_id) REFERENCES events(events_id)  -- Added foreign key constraint for events_id
);


INSERT INTO events (category, name, location, latitude, longitude, event_time, event_date, event_info, event_image)
VALUES

    ('Romantic', 'Fireplace Cabin Experience', 'Cozy Haven Retreat', 51.5047, -0.1790, '18:00', '2023-12-21', 'Escape to a charming cabin nestled in the woods, complete with a crackling fireplace for an intimate and romantic evening.', 'DB_Images/1.jpg'),
    ('Romantic', 'Love Actually Cinema Screening', 'Starry Night Gardens', 51.5350, -0.1252, '21:30', '2023-12-20', 'Watch classic romantic films under the stars in the enchanting Starry Night Gardens, creating a magical atmosphere for love.', 'DB_Images/2.jpg'),
    ('Romantic', 'Stargazing Domes', 'Celestial Heights Observatory', 51.4769, -0.0005, '19:00', '2023-12-19', 'Experience the wonders of the universe together in private stargazing domes at Celestial Heights Observatory.', 'DB_Images/3.jpg'),
    ('Romantic', 'Make your own ring', 'Artisans Love Forge', 51.5118, -0.1232, '14:00', '2023-12-18', 'Craft your own symbol of love at the Artisans Love Forge, where skilled artisans guide you in creating personalized rings.', 'DB_Images/4.jpg'),
    ('Family-Friendly', 'Santa, Elves, and Reindeer Meet and Greet', 'Santas Village Square', 51.5350, -0.1511, '17:00', '2023-12-19','Bring joy to the family with a festive meet and greet with Santa, his elves, and real reindeer at Santas Village Square.',  'DB_Images/5.jpg'),
   ('Family-Friendly', 'Festive Family Photoshoot', 'Joyful Memories Studio', 51.5119, -0.1479, '19:30', '2023-12-20', 'Capture the holiday spirit with a professional photoshoot at Joyful Memories Studio, creating lasting memories for the family.', 'DB_Images/6.jpg'),
    ('Family-Friendly', 'Presents Scavenger Hunt', 'Enchanted Forest Park', 51.5218,-0.1262, '16:30', '2023-12-23', 'Embark on a fun-filled presents scavenger hunt through the magical trails of Enchanted Forest Park', 'DB_Images/7.jpg'),
   ('Family-Friendly', 'X-mas face painting', 'Jolly Faces Pavilion', 51.5067, -0.1168,  '15:00', '2023-12-23', 'Let the little ones imaginations soar with festive face painting at the Jolly Faces Pavilion.', 'DB_Images/8.jpg'),
   ('Adventurous', 'Ice Skating', 'Frosty Glide Arena',  51.4831, -0.1442,'16:00', '2023-12-20', 'Glide hand in hand on a winter wonderland ice rink at the Frosty Glide Arena.',  'DB_Images/9.jpg'),
   ('Adventurous', 'Indoor Skiing', 'Snowy Slopes Center', 51.5072, -0.2203, '14:30', '2023-12-22',  'Experience the thrill of skiing indoors at the Snowy Slopes Center, offering a unique adventure for winter sports enthusiasts.', 'DB_Images/10.jpg'),
    ('Adventurous', 'Snow Tubing', 'Blizzard Peaks Tubing Park',  51.5257, -0.1501, '17:00', '2023-12-21','Feel the adrenaline rush as you slide down the thrilling snow slopes at Blizzard Peaks Tubing Park.',  'DB_Images/11.jpg'),
    ('Adventurous', 'Winter Apparel Pop-up Shop', 'Alpine Fashion Bazaar', 51.5163, -0.1335,  '15:00', '2023-12-18','Explore the latest winter fashion trends at the Alpine Fashion Bazaar, a pop-up shop featuring stylish winter apparel.', 'DB_Images/12.jpg'),
    ('Foodie', 'Hot Chocolate & Marshmallow Roasting', 'Cocoa Haven Plaza', 51.5056, -0.0909, '18:00', '2023-12-23', 'Warm up with a cup of decadent hot chocolate and roast marshmallows over open fires at Cocoa Haven Plaza.', 'DB_Images/13.jpg'),
    ('Foodie', 'Roast Dinner Carvery', 'Gourmet Roast Haven', 51.5029, -0.1081, '19:30', '2023-12-22','Indulge in a lavish roast dinner experience at Gourmet Roast Haven, featuring a variety of succulent carvings and gourmet sides.',  'DB_Images/14.jpg'),
    ('Foodie', 'Mulled Wine & Cheese Tasting', 'Vineyard Delights Lounge', 51.4886, -0.1626, '19:00', '2023-12-21','Savor the flavors of the season with mulled wine and artisanal cheese tastings at the charming Vineyard Delights Lounge.',  'DB_Images/15.jpg'),
    ('Foodie', 'Stuffed Turkey Spectacle', 'Turkey Paradise Hall', 51.5235, -0.1619,  '18:30', '2023-12-20', 'Experience a feast for the senses with a grand Stuffed Turkey Spectacle at Turkey Paradise Hall, where culinary delights abound.','DB_Images/16.jpg'),
    ('Arts & Crafts', 'Candle Making', 'Illumination Studios', 51.4974, -0.1719, '16:00', '2023-12-19',  'Unleash your creativity at Illumination Studios, where you can craft personalized candles in a variety of festive shapes and scents.', 'DB_Images/17.jpg'),
    ('Arts & Crafts', 'Winter Gallery Walk', 'Frosty Art Boulevard',51.5075, -0.1706,'10:30', '2023-12-18', 'Immerse yourself in the Winter Gallery Walk along Frosty Art Boulevard, showcasing a dazzling display of seasonal artworks.',  'DB_Images/18.jpg'),
    ('Arts & Crafts', 'Festive Light Show', 'Luminous Gardens', 51.5027, -0.2043, '20:00', '2023-12-18', 'Marvel at the enchanting Festive Light Show in the magical surroundings of Luminous Gardens.',  'DB_Images/19.jpg'),
    ('Arts & Crafts', 'Snow Globe DIY Workshop', 'Crystal Crafts Haven', 51.5198, -0.0938, '15:30', '2023-12-19','Create your own winter wonderland at the Snow Globe DIY Workshop in Crystal Crafts Haven, where imagination knows no bounds.',  'DB_Images/20.jpg'),
    ('Music','Caroling for All',  'Harmony Square Amphitheater',  51.5193, -0.1800,  '18:00', '2023-12-20','Join the community in a heartwarming caroling session at the open-air Harmony Square Amphitheater, spreading joy to all.',  'DB_Images/21.jpg'),
    ('Music','Live Jazz Band',  'Jazz Haven Lounge', 51.5264, -0.0877,'21:30', '2023-12-21', 'Immerse yourself in the soulful tunes of a live jazz band at the intimate Jazz Haven Lounge.',  'DB_Images/22.jpg'),
    ('Music','Music with home supplies',  'DIY Melodies Workshop',51.5161, -0.0699,  '15:00', '2023-12-22', 'Explore the art of making music with everyday household items at the DIY Melodies Workshop, a unique and interactive musical experience.',  'DB_Images/23.jpg'),
    ('Music','Holiday Classics Closing Party',  'Mistletoe Melodies Pavilion', 51.4910, -0.1593, '19:00', '2023-12-23','Bid farewell to the holiday season with a festive bang at the Holiday Classics Closing Party in the Mistletoe Melodies Pavilion.',  'DB_Images/24.jpg');


/* created a stored procedure named AddUserAndBooking- that adds a user to the Users table and simultaneously updates the Bookings table with a new booking entry.
 It also increments the booking number by 11 each time the procedure is called. */
 


DELIMITER //

CREATE PROCEDURE AddUserAndBooking(
    IN p_userFirstName VARCHAR(100),
    IN p_userSurname VARCHAR(100),
    IN p_userEmail VARCHAR(100),
    IN p_events_id INT  -- Add the events_id parameter
)
BEGIN
    DECLARE lastBookingID INT;
    DECLARE newBookingID INT;
    DECLARE bookingNumberPrefix VARCHAR(10);
    DECLARE bookingNumberSuffix INT;

    -- Start a transaction
    START TRANSACTION;

    -- Insert the user into the Users table
    INSERT INTO Users (User_FirstName, User_Surname, User_Email, events_id)
    VALUES (p_userFirstName, p_userSurname, p_userEmail, p_events_id);

    -- Get the last booking ID
    SELECT MAX(BookingID) INTO lastBookingID FROM Bookings;

    -- Calculate the new booking number
    SET bookingNumberPrefix = 'WMCFG';
    SET bookingNumberSuffix = IFNULL(lastBookingID, 100000) + 11;
    SET newBookingID = IFNULL(lastBookingID, 100000) + 1;

    -- Insert the booking into the Bookings table
    INSERT INTO Bookings (BookingID, UserID, Booking_Time, events_id)
    VALUES (newBookingID, LAST_INSERT_ID(), CURRENT_TIMESTAMP, p_events_id);

    SELECT newBookingID AS BookingID FROM Bookings WHERE  UserID = LAST_INSERT_ID();
     

    -- Commit the transaction
    COMMIT;
END //

DELIMITER ;






