# Netflix Clone built using React, Redux Toolkit, Firebase, Styled Components, Node.js, Express and MongoDB.

## Steps to Start the App

+ Install React Dependencies
+ Instal Node Dependencies
+ Start Node App
+ Start React App

+ Integrated a movie database API (MovieDB) to fetch a vast collection of movies and TV shows.
Enable users to browse and search for their favourite content.
+ Designed and implemented a user-centric Login and Sign-up interface, enhancing user engagement
and security.

# Netflix Clone Project

Welcome to the Netflix Clone project! This project is a web application that replicates some of the features and functionalities of the popular streaming service, Netflix. It serves as a demonstration of web development skills and technologies. 

![Netflix Clone Screenshot](screenshot.png)

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)

## Features

- **User Authentication**: Users can sign up, log in, and maintain individual profiles.
- **Browse Catalog**: Browse a vast catalog of movies and TV shows.
- **Search**: Search for specific movies or TV shows.
- **Watch Content**: Stream movies and TV shows.
- **User Profiles**: Create and manage user profiles.
- **Recommendations**: Receive personalized recommendations based on viewing history.

## Technologies Used

- **Frontend**:
  - React.js
  - Redux for state management
  - CSS for styling
  - Axios for API requests

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB for storing user data and preferences
  - JWT for user authentication

- **APIs**:
  - The Movie Database (TMDb) API for movie and TV show information
  - Firebase for user authentication

## Getting Started

To get this Netflix Clone project up and running on your local machine, follow these steps:

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/netflix-clone.git
   ```

2. Change into the project directory:
   ```bash
   cd netflix-clone
   ```

3. Install the required dependencies for both the frontend and backend:
   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

4. Create a `.env` file in the `server` directory and add your Firebase configuration and TMDb API key as follows:

   ```plaintext
   REACT_APP_FIREBASE_API_KEY=your-firebase-api-key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
   REACT_APP_FIREBASE_PROJECT_ID=your-firebase-project-id
   REACT_APP_TMDB_API_KEY=your-tmdb-api-key
   ```

5. Start the backend server:
   ```bash
   npm start
   ```

6. Start the frontend development server:
   ```bash
   cd ../client
   npm start
   ```

7. Access the application in your web browser at `http://localhost:3000`.

## Usage

- Create an account or sign in to an existing account.
- Browse the catalog of movies and TV shows.
- Search for specific content.
- Click on a title to view details and start watching.
- Enjoy streaming your favorite movies and TV shows.

## Contributing

Contributions to this project are welcome! If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and test thoroughly.
4. Create a pull request with a detailed description of your changes.


---

Happy streaming! 🍿📺
