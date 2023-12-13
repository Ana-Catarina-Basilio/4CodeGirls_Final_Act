class ProjectError(Exception):
    """A base class for project exception handling"""

class DBConnectionError(ProjectError):
    """A custom exception to check the database connection"""
    pass

