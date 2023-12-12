from unittest import TestCase, main
import requests
from database_connection import select_category, connect_to_database, db_credentials
from exceptions import DBConnectionError

class TestSelectingEventsByCategory(TestCase):
    def test_events_endpoint_no_category(self):
        response = requests.get('http://localhost:5000/api/events')
        self.assertEqual(response.status_code, 200)

    def test_events_endpoint_with_category(self):
        response = requests.get('http://localhost:5000/api/events?category=Romance')
        self.assertEqual(response.status_code, 200)

    def test_invalid_category(self):
        invalid_category = 'Skiing'
        result = select_category(invalid_category)
        self.assertEqual(result, None)


class TestingSelectingAllCategories(TestCase):
    def test_categories_endpoint(self):
        response = requests.get('http://localhost:5000/api/categories')
        self.assertEqual(response.status_code, 200)


class TestingDatabaseConnection(TestCase):
    def test_db_connected(self):
        db_connection = connect_to_database(db_credentials[0], db_credentials[1], db_credentials[2], db_credentials[3])
        self.assertIsNotNone(db_connection)
        if db_connection:
            db_connection.close()

    def test_failed_db_connection(self):
        invalid_user = [
            'localhost',
            'invalid_user',
            'invalid_password',
            'wondermap'
        ]

        with self.assertRaises(DBConnectionError) as context:
            connect_to_database(invalid_user[0], invalid_user[1], invalid_user[2], invalid_user[3])
        self.assertEqual(str(context.exception), 'Failed to connect to database')

    def test_invalid_db_query(self):
        pass


class TestEndpointRequests(TestCase):
    def test_root_endpoint_connected(self):
        pass

    def test_invalid_endpoint(self):
        response = requests.get('http://localhost:5000/invalid_endpoint')
        self.assertEqual(response.status_code, 404)


if __name__ == '__main__':
    main()