Welcome to the Netflix clone app built with React, Tailwind CSS, Firebase, and Axios!

This app is a clone of the popular streaming platform Netflix, and it allows users to browse through a selection of movies/TV shows and save titles to their list of favorites.

To build the user interface, I used the React library, which enables you to create reusable components and update the interface dynamically as users interact with the app. I also used Tailwind CSS to style the components quickly and efficiently, making it easy to customize the look and feel of the app.

To handle authentication and data storage, I integrated Firebase, which provides a secure and scalable backend solution. I used Firebase Authentication to authenticate users and Firebase Firestore to store data such as user information and movie data.

To fetch data from a third-party API, I utilized the Axios library. I made requests to the TMDB API to retrieve movie and TV show information, including titles, descriptions, and release dates.

To run the app locally, follow these steps:

1. Clone the repository to your local machine.
2. Install the dependencies by running npm install in the root directory.
3. Create a Firebase project and enable Firestore and Authentication.
4. In the Firebase console, go to Project Settings and find the "Firebase SDK snippet" section. Choose "Config" and copy the config object.
5. Create a new file in the src directory called firebaseConfig.js and paste the config object there.
6. In the TMDB API, create an account and get an API key.
7. Create a new file in the src directory called apiConfig.js and export the API key as a variable.
8. Start the app by running npm start.
