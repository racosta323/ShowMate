# ShowMate Readme



## Background

Welcome to ShowMate! I developed this application as my final capstone project for my software engineering curriculum offered by [Flatiron School](https://flatironschool.com/). It was developed over the course of one week and incorporates a range of requirements to demonstrate proficiency in various technologies and concepts.

### Project Requirements:

- **Backend Implementation**: The application backend is built using Flask and SQLAlchemy, incorporating a robust data management system.
- **Many-to-Many Relationship**: The application includes at least one many-to-many relationship, demonstrating complex data modeling.
- **Multiple Models**: A minimum of four models are implemented to manage different aspects of the application's data.
- **Client-Side Routes**: Utilizes React Router to implement a minimum of five client-side routes, ensuring smooth navigation within the application.
- **CRUD Operations**: Full CRUD functionality is implemented on at least one model, following REST conventions for seamless data management.
- **Validations and Error Handling**: The application incorporates robust validation mechanisms and error handling to ensure data integrity and a smooth user experience.
- **State Management**: Demonstrates proficiency in state management by implementing useContext to manage application state effectively.

### Proficiency Demonstration:

This project demonstrates proficiency in all the above requirements, showcasing a comprehensive understanding of backend development, data modeling, client-side routing, CRUD operations, validation, error handling, and state management. It serves as a culmination of my learning journey, showcasing my ability to develop complex web applications using modern technologies and best practices.

## Table of Contents
1. [Basic Details](#basic-details)
2. [Features](#features)
3. [NavBar](#navbar)
4. [Auth](#auth)
5. [App](#app)
6. [Outlet](#outlet)
7. [Home](#home)
8. [Search](#search)
9. [Artist Profile](#artist-profile)
10. [Artist Reviews](#artist-reviews)
11. [User Profile](#user-profile)
12. [Edit Review](#edit-review)
13. [Reviews](#reviews)
14. [General](#general)

---

### Basic Details
This document outlines the features and user experience of the application. It provides an overview of the authentication process, app functionality, and various components' behaviors.

### Features
- **Login/Signup Validation**: Utilizes Formik, Yup, and React Bootstrap to validate login and signup forms.
- **User Authentication**: Allows users to create a new login, sign in, and maintains login throughout the session.
- **Routing**: Utilizes createBrowswerRouter to create routes, enabling users to navigate through different components.
- **Home Page**: Features a carousel of shuffled photos using React Bootstrap and lodash. Showcases trending artists sorted by average stars, each clickable.

### NavBar
- **Navigation Instructions**: Users are provided with instructions on how to navigate the site.
- **Navigation Methods**: Provides multiple methods for navigation, including NavBar, Search Bar, Trending Artists buttons, and Carousel.
- **Consistent Navigation**: Users can navigate back to the home page by clicking on the Home button or the logo next to the search bar.
- **User Profiles**: Users can navigate to their own profiles and all reviews. They can also log in/logout and navigate to their profile via an icon dropdown.

### Auth
- **Login/Signup**: Users can create a profile or sign in.
- **Validation**: Form validation is conducted through a combination of Formik, Yup, and React Bootstrap.
- **Identity and Access Management**: Provides essential identity and access management concepts, such as session handling, authentication, authorization, and password encryption for security

### App
- **Outlet**: Utilizes createOutlet to create routes, allowing users to route through different components.
- **Styling**: Utilizes React Bootstrap for styling components and providing consistent design elements.

### Home
- **Carousel**: Features a carousel of photos using React Bootstrap, shuffled by lodash.
- **Trending Artists**: Displays trending artists sorted by average stars.

### Search
- **Search Bar**: Users can search for artists using the search bar.
- **Search Page**: Utilizes useLocation to query through artists. It shows the user input and results, allowing for partial search of artist names. If no results are found, a no results page is rendered.

### Artist Profile
- **Images**: Displays artist image resized to fit the design using Bootstrap components.
- **Average Stars**: Computes and displays the average stars received by the artist out of 10. Clicking on the stars takes the user to the artist's reviews page.
- **Create Review Button**: Allows users to create a review for the artist.

### Artist Reviews
- **Reviews Display**: Displays reviews for the artist, including review details for each such as subject, artist, review, stars, date posted, show, show location, and show date.
- **User Engagement**: Provides options for users to engage with reviews, including creating new reviews and navigating to the artist's page.

### User Profile
- **General and My Profile**: Displays two types of profiles - general user profile for non-logged-in users and My Profile for logged-in users.
- **Review Details**: Displays review details for each profile, including subject, artist, review, stars, date posted, show, show location, and show date.
- **Edit Review**: Allows logged-in users to edit their own reviews.

### Edit Review
- **Editable Fields**: Users can edit various fields of their reviews by clicking on the pencil icon.
- **Submit Edits**: After making changes, users can submit their edits to update the review.
- **Delete Review**: Provides the option to delete the review entirely.

### Reviews
- **Pagination**: Displays 5 results at a time, allowing users to review more via pagination below the table.
- **Filtering**: Users can filter results by artist or genre, with toggles provided for selection. Clicking away from the modal shows results, and clicking on filter names removes filters.

### General
- **State Management**: Utilizes useState, useEffect, and useOutletContext for state management and passing information between components.
- **Form Control**: Validates forms and allows completion by pressing enter on the keyboard.
- **Icons**: Utilizes React Bootstrap Icons for visual elements.
- **Component Creation**: Components are created for various functionalities, ensuring modular and organized development.

---

## Libraries Used

### Frontend:

- **React**: JavaScript library for building user interfaces - version 18.2.0
- **React Router DOM**: Declarative routing for React applications - version 6.22.3
- **React Bootstrap**: Frontend framework for building responsive web applications - version 2.10.2
- **Formik**: Library for building forms in React - version 2.4.5
- **Yup**: Schema validation library for JavaScript objects - version 1.4.0
- **Lodash**: Utility library for working with arrays, objects, and functions - version 4.17.21

### Backend:

- **Flask**: Micro web framework for building web applications with Python
- **SQLAlchemy**: SQL toolkit and Object-Relational Mapping (ORM) library for Python

### State Management:

- **React useState**: Manages state in functional components, enabling dynamic updates. 
- **React useContext**: Shares data between components without prop drilling.
- **React useNavigate**: Enables programmatic navigation in functional components.
- **React useLocation**: Retrieves current browser location in functional components.

### Other:

- **React Bootstrap Icons**: Icon library for React Bootstrap components - version 1.11.3
- **Bootstrap**: CSS framework for developing responsive and mobile-first websites - version 5.3.3

## Conclusion

In conclusion, this project represents the culmination of my learning journey at Flatiron School, demonstrating proficiency in a range of technologies and concepts including Flask, SQLAlchemy, React, and React Router. By incorporating various requirements such as authentication, authorization, CRUD operations, and state management, this project showcases my ability to develop full-stack web applications with robust functionality and security features. Thank you for exploring this project!

## Contact Me

If you have any questions, feedback, or just want to say hello, feel free to reach out:

- **Email**: racosta323@gmail.com
- **GitHub**: [GitHub Profile](https://github.com/racosta323)
- **LinkedIn**: [LinkedIn Profile](https://linkedin.com/in/acostarene)

I'm always open to connecting and discussing ideas, collaborations, or anything related to this project. Don't hesitate to reach out!
