import psycopg2
import connect_string
import os
import psycopg2
import urllib
from werkzeug.security import generate_password_hash, check_password_hash


def connection_decorator(func):
    def func_wrapper(*args):
        urllib.parse.uses_netloc.append('postgres')
        url = urllib.parse.urlparse(os.environ.get('DATABASE_URL'))
        conn = psycopg2.connect(connect_string.connect_str)
        conn.autocommit = True
        cursor = conn.cursor()
        return func(cursor, *args)
    return func_wrapper

@connection_decorator
def save_user(cursor, username, password):
    hashed_pw = generate_password_hash(password, method='pbkdf2:sha512:80000', salt_length=8)
    cursor.execute("""
    INSERT INTO people (username, password) VALUES (%s, %s);
    """,(username, hashed_pw))
    return "reg comp"