CREATE DATABASE WonderWorld;
USE WonderWorld;

CREATE TABLE Events (
    EventID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Event_Name VARCHAR(100),
    Category VARCHAR(50),
    Location VARCHAR(255),
    Latitude DOUBLE,
    Longitude DOUBLE,
    Event_Info TEXT,
    Event_Hour VARCHAR(10),
    Event_Date DATE,
    Event_Image VARCHAR(255)
);

CREATE TABLE Users (
    UserID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    User_FirstName VARCHAR(100) NOT NULL,
    User_Surname VARCHAR(100) NOT NULL,
    User_Email VARCHAR(100) NOT NULL
);

CREATE TABLE Bookings (
    BookingID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    UserID INT,
    Booking_Time TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- so that we can check when the user does the reservation
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
);




INSERT INTO Events (Event_Name, Category, Location, Latitude, Longitude, Event_Info, Event_Hour, Event_Date, Event_Image)
VALUES
    ('Fireplace Cabin Experience', 'Romantic', 'Cozy Haven Retreat', 40.7128, -74.0060, 'Escape to a charming cabin nestled in the woods, complete with a crackling fireplace for an intimate and romantic evening.', '18:00', '2023-12-21', 'DB_Images\1.jpg'),
    ('Love Actually Cinema Screening', 'Romantic', 'Starry Night Gardens', 34.0522, -118.2437, 'Watch classic romantic films under the stars in the enchanting Starry Night Gardens, creating a magical atmosphere for love.', '21:30', '2023-12-20', 'DB_Images\2.jpg'),
    ('Stargazing Domes', 'Romantic', 'Celestial Heights Observatory', 41.8781, -87.6298, 'Experience the wonders of the universe together in private stargazing domes at Celestial Heights Observatory.', '19:00', '2023-12-19', 'DB_Images\3.jpg'),
    ('Make your own ring', 'Romantic', 'Artisans Love Forge', 41.8781, -87.6298, 'Craft your own symbol of love at the Artisans Love Forge, where skilled artisans guide you in creating personalized rings.', '14:00', '2023-12-18', 'DB_Images\4.jpg'),
    ('Santa, Elves, and Reindeer Meet and Greet', 'Family Friendly', 'Santas Village Square', 40.7128, -74.0060, 'Bring joy to the family with a festive meet and greet with Santa, his elves, and real reindeer at Santas Village Square.', '17:00', '2023-12-19', 'DB_Images\5.jpg'),
    ('Festive Family Photoshoot', 'Family Friendly', 'Joyful Memories Studio', 34.0522, -118.2437, 'Capture the holiday spirit with a professional photoshoot at Joyful Memories Studio, creating lasting memories for the family.', '19:30', '2023-12-20', 'DB_Images\6.jpg'),
    ('Presents Scavenger Hunt', 'Family Friendly', 'Enchanted Forest Park', 41.8781, -87.6298, 'Embark on a fun-filled presents scavenger hunt through the magical trails of Enchanted Forest Park', '16:30', '2023-12-23', 'DB_Images\7.jpg'),
    ('X-mas face painting', 'Family Friendly', 'Jolly Faces Pavilion', 41.8781, -87.6298, 'Let the little ones imaginations soar with festive face painting at the Jolly Faces Pavilion.', '15:00', '2023-12-23', 'DB_Images\8.jpg'),
    ('Ice Skating', 'Adventurous', 'Frosty Glide Arena', 40.7128, -74.0060, 'Glide hand in hand on a winter wonderland ice rink at the Frosty Glide Arena.', '16:00', '2023-12-20', 'DB_Images\9.jpg'),
    ('Indoor Skiing', 'Adventurous', 'Snowy Slopes Center', 34.0522, -118.2437, 'Experience the thrill of skiing indoors at the Snowy Slopes Center, offering a unique adventure for winter sports enthusiasts.', '14:30', '2023-12-22', 'DB_Images\10.jpg'),
    ('Snow Tubing', 'Adventurous', 'Blizzard Peaks Tubing Park', 41.8781, -87.6298, 'Feel the adrenaline rush as you slide down the thrilling snow slopes at Blizzard Peaks Tubing Park.', '17:00', '2023-12-21', 'DB_Images\11.jpg'),
    ('Winter Apparel Pop-up Shop', 'Adventurous', 'Alpine Fashion Bazaar', 41.8781, -87.6298, 'Explore the latest winter fashion trends at the Alpine Fashion Bazaar, a pop-up shop featuring stylish winter apparel.', '15:00', '2023-12-18', 'DB_Images\12.jpg'),
    ('Hot Chocolate & Marshmallow Roasting', 'Foodie', 'Cocoa Haven Plaza', 40.7128, -74.0060, 'Warm up with a cup of decadent hot chocolate and roast marshmallows over open fires at Cocoa Haven Plaza.', '18:00', '2023-12-23', 'DB_Images\13.jpg'),
    ('Roast Dinner Carvery', 'Foodie', 'Gourmet Roast Haven', 34.0522, -118.2437, 'Indulge in a lavish roast dinner experience at Gourmet Roast Haven, featuring a variety of succulent carvings and gourmet sides.', '19:30', '2023-12-22', 'DB_Images\14.jpg'),
    ('Mulled Wine & Cheese Tasting', 'Foodie', 'Vineyard Delights Lounge', 41.8781, -87.6298, 'Savor the flavors of the season with mulled wine and artisanal cheese tastings at the charming Vineyard Delights Lounge.', '19:00', '2023-12-21', 'DB_Images\15.jpg'),
    ('Stuffed Turkey Spectacle', 'Foodie', 'Turkey Paradise Hall', 40.7128, -74.0060, 'Experience a feast for the senses with a grand Stuffed Turkey Spectacle at Turkey Paradise Hall, where culinary delights abound.', '18:30', '2023-12-20', 'DB_Images\16.jpg'),
    ('Candle Making', 'Arts & Crafts', 'Illumination Studios', 40.7128, -74.0060, 'Unleash your creativity at Illumination Studios, where you can craft personalized candles in a variety of festive shapes and scents.', '16:00', '2023-12-19', 'DB_Images\17.jpg'),
    ('Winter Gallery Walk', 'Arts & Crafts', 'Frosty Art Boulevard', 34.0522, -118.2437, 'Immerse yourself in the Winter Gallery Walk along Frosty Art Boulevard, showcasing a dazzling display of seasonal artworks.', '10:30', '2023-12-18', 'DB_Images\18.jpg'),
    ('Festive Light Show', 'Arts & Crafts', 'Luminous Gardens', 41.8781, -87.6298, 'Marvel at the enchanting Festive Light Show in the magical surroundings of Luminous Gardens.', '20:00', '2023-12-18', 'DB_Images\19.jpg'),
    ('Snow Globe DIY Workshop', 'Arts & Crafts', 'Crystal Crafts Haven', 41.8781, -87.6298, 'Create your own winter wonderland at the Snow Globe DIY Workshop in Crystal Crafts Haven, where imagination knows no bounds.', '15:30', '2023-12-19', 'DB_Images\20.jpg'),
    ('Caroling for All', 'Music', 'Harmony Square Amphitheater', 40.7128, -74.0060, 'Join the community in a heartwarming caroling session at the open-air Harmony Square Amphitheater, spreading joy to all.', '18:00', '2023-12-20', 'DB_Images\21.jpg'),
    ('Live Jazz Band', 'Music', 'Jazz Haven Lounge', 34.0522, -118.2437, 'Immerse yourself in the soulful tunes of a live jazz band at the intimate Jazz Haven Lounge.', '21:30', '2023-12-21', 'DB_Images\22.jpg'),
    ('Music with home supplies', 'Music', 'DIY Melodies Workshop', 41.8781, -87.6298, 'Explore the art of making music with everyday household items at the DIY Melodies Workshop, a unique and interactive musical experience.', '15:00', '2023-12-22', 'DB_Images\23.jpg'),
    ('Holiday Classics Closing Party', 'Music', 'Mistletoe Melodies Pavilion', 40.7128, -74.0060, 'Bid farewell to the holiday season with a festive bang at the Holiday Classics Closing Party in the Mistletoe Melodies Pavilion.', '19:00', '2023-12-23', 'DB_Images\24.jpg');
