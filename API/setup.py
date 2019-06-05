#!/usr/bin/python
 
import psycopg2
from config import config
 

def setupData() :
    print("setupData Called !");
    create_tables()
    insert_master_data()
    
def insert_master_data() :
    print("insert Master data Called");

def create_tables():
    """ create tables in the PostgreSQL database"""
    commands = (
        """CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            user_type VARCHAR(255) NOT NULL,
            phone varchar(100) NOT NULL,
            email varchar(100) NOT NULL
        )
        """,
        """CREATE TABLE users_details (
                id SERIAL PRIMARY KEY,
                user_id INTEGER NOT NULL,
                address_line1 VARCHAR(255) NOT NULL,
                city VARCHAR(255),
                state VARCHAR(255),
                FOREIGN KEY (user_id)
                    REFERENCES users (id)
                    ON UPDATE CASCADE ON DELETE CASCADE
        );
        """
        )
    conn = None
    try:
        # read the connection parameters
        params = config()
        # connect to the PostgreSQL server
        conn = psycopg2.connect(**params)
        cur = conn.cursor()
        # create table one by one
        for command in commands:
         cur.execute(command)
         print("Command",  command);
        # close communication with the PostgreSQL database server
        cur.close()
        # commit the changes
        conn.commit()
    except (Exception, psycopg2.DatabaseError) as error:
        print(error)
    finally:
        if conn is not None:
            conn.close()
 
 
if __name__ == '__main__':
    setupData()
    