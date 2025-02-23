# Contact App - CRUD Operations in NodeJS

## Tech Stack

This project covers the basic operations required in making backend API calls, namely, the CRUD Operations (Create, Read, Update and Delete) by using NodeJS. MongoDB is used as the database.

### Unique Features

This project allows users to keep a list of their contact and also update the list as per their need. It also provides a login feature that uses jwt authentication for the bearer tokens.

### Steps to Run:

1. The required packages mentioned in the package files must be installed.
2. Sign in to MongoDB and create a database. Add the link to connect the same in a dotenv file and assign it with the name CONNECTION_STRING
3. The user can also mention the required port in the dotenv file. Else, it will be taken as 5000 by default.
4. The access token secret must also be created for the jwt authentiaction. The value for the same just needs to be placed in the dotenv file against the name ACCESS_TOKEN_SECRET.
5. To start the app, run the command npm run dev

### Enhancements:
This app can be further enhanced by adding an interactive user interface.
