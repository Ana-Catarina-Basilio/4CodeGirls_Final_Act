import mysql.connector
from exceptions import DBConnectionError

db_credentials = [
    'localhost',
    'root',
    '1234!',  # Replace with your MySQL password
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
    try:
        db_connection = connect_to_database(db_credentials[0], db_credentials[1], db_credentials[2], db_credentials[3])
        cur = db_connection.cursor()
        print('Connected to DB')

        query = 'SELECT DISTINCT category FROM events'
        cur.execute(query)
        categories = cur.fetchall()
        for i in categories:
            print(i)

        cur.close()

    except:
        print('Something went wrong')

    finally:
        if db_connection:
            db_connection.close()
            print('DB connection closed')
