import mysql.connector
from exceptions import DBConnectionError

db_credentials = [
    'localhost',
    'root',
    '3Tortas!',  # Replace with your MySQL password
    'wondermap' # Replace with your WonderMap database name
]

def connect_to_database(HOST, USER, PASSWORD, DB):
    try:
        connection = mysql.connector.connect(
            host=HOST,
            user=USER,
            password=PASSWORD, 
            database=DB  
        )
        return connection

    except Exception as exc:
        raise DBConnectionError('Failed to connect to database') from exc


def test_connection():
    db_connection = connect_to_database(db_credentials[0], db_credentials[1], db_credentials[2], db_credentials[3])
    cur = db_connection.cursor()
    print('Connected to DB')


def select_category(category):
    db_connection = None
    try:
        db_connection = connect_to_database(db_credentials[0], db_credentials[1], db_credentials[2], db_credentials[3])
        cur = db_connection.cursor()
        print('Connected to DB')

        if not category:
            query = f'SELECT * FROM events'
            cur.execute(query)
            result = cur.fetchall()
            for i in result:
                print(i)

        else:
            query = f'SELECT * FROM events WHERE category = "{category}"'
            cur.execute(query)
            result = cur.fetchall()
            for i in result:
                print(i)

        cur.close()

    except Exception as exc:
        raise DBConnectionError('Failed to connect to database') from exc

    finally:
        if db_connection:
            db_connection.close()
            print('DB connection closed')


def get_all_categories():
    db_connection = None
    try:
        db_connection = connect_to_database(db_credentials[0], db_credentials[1], db_credentials[2], db_credentials[3])
        cur = db_connection.cursor()
        print('Connected to DB')

        query = 'SELECT DISTINCT category FROM events'
        cur.execute(query)
        categories = cur.fetchall()
        return categories

        cur.close()

    except Exception as exc:
        raise DBConnectionError('Failed to connect to database') from exc

    finally:
        if db_connection:
            db_connection.close()
            print('DB connection closed')    


# This function will allow us to ask for the user information, making sure it introduces a valid email. 
           
def collect_user_information():

    def is_valid_email(email):
        # email validation option 
        email_pattern = re.compile(r"[^@]+@[^@]+\.[^@]+")
        return bool(re.match(email_pattern, email))

    try:
        while True:
            user_first_name = input("Enter your first name: ")
            user_surname = input("Enter your surname: ")
            user_email = input("Enter your email: ")
            

            if is_valid_email(user_email):
                return user_first_name, user_surname, user_email
            else:
                print("Invalid email format. Please enter a valid email.")

    except Exception as exc:
        print(f"An error occurred: {exc}")


# Ww can use this OR

def create_booking(user_info, event_id):
    try:
        db_connection = connect_to_database(db_credentials[0], db_credentials[1], db_credentials[2], db_credentials[3])
        cur = db_connection.cursor()
        print('Connected to DB')

        user_first_name, user_email = user_info
        query_user_id = 'SELECT UserID FROM Users WHERE User_FirstName = %s AND User_Email = %s'
        cur.execute(query_user_id, (user_first_name, user_email))
        result_user = cur.fetchone()

        query_event_name = 'SELECT name FROM Events WHERE EventID = %s'
        cur.execute(query_event_name, (event_id,))
        result_event = cur.fetchone()


        if  result_user and result_event:
            user_id = result_user[0]
            event_name = result_event[0]

            query_booking = 'INSERT INTO Bookings (UserID, EventID) VALUES (%s, %s)'
            cur.execute(query_booking, (user_id, event_id))
            db_connection.commit()

            booking_id = cur.lastrowid

            print(f"Booking created for {user_first_name} for event '{event_name}'")
        else:
            print("User or event not found. Unable to create booking.")

    except Exception as exc:
        db_connection.rollback()
        raise DBConnectionError('Failed to create booking') from exc

    finally:
        if db_connection:
            db_connection.close()


#or this version separated into more functions

def get_user_id_and_name(user_info):
    try:
        db_connection = connect_to_database(db_credentials[0], db_credentials[1], db_credentials[2], db_credentials[3])
        cur = db_connection.cursor()

        user_first_name, user_email = user_info
        query_user_id = 'SELECT UserID, User_FirstName FROM Users WHERE User_FirstName = %s AND User_Email = %s'
        cur.execute(query_user_id, (user_first_name, user_email))
        result_user = cur.fetchone()

        return result_user if result_user else None

    except Exception as exc:
        raise DBConnectionError('Failed to fetch user details') from exc

    finally:
        if db_connection:
            db_connection.close()

def create_booking(user_id, event_id):
    try:
        db_connection = connect_to_database(db_credentials[0], db_credentials[1], db_credentials[2], db_credentials[3])
        cur = db_connection.cursor()
        print ('Connected to DB')

        user_data = get_user_id_and_name(user_data)

        if user_data:
            user_id, user_name = user_data

            query_event_name = 'SELECT name FROM Events WHERE EventID = %s'
            cur.execute(query_event_name, (event_id,))
            result_event = cur.fetchone()

        if result_event:
            event_name = result_event[0]

            query_booking = 'INSERT INTO Bookings (UserID, UserName, EventID) VALUES (%s, %s)'
            cur.execute(query_booking, (user_id, user_name, event_id))
            db_connection.commit()

            booking_id = cur.lastrowid

            print(f"Booking created for User ID {user_name} for event '{event_name}' (Booking ID: {booking_id})")
        else:
            print("Event not found. Unable to create booking.")

    except Exception as exc:
        db_connection.rollback()
        raise DBConnectionError('Failed to create booking') from exc

    finally:
        if db_connection:
            db_connection.close()

