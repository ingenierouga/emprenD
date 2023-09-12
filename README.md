# EmprenD

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Deployed Version

You can find the latest build of the main branch of this project here:
https://main.d2t3phkh7w93zj.amplifyapp.com/

Mounted on AWS -Amplify services

## Routing

This Angular Demo Application consists of 3 main pages:

- Inicio (root): This page is mostly to practice and show responsive design using bootstrap along with Angular, you can find the details of each of the sections on this page further down in this document
- Login (/login): This page has a simple form with two fields to practice and show Angular validation in the input fields, and register the current logged user for the blog page (a template driven validation is used here).
- Blog (/blog): Simple form to save Ideas.

## Inicio (start)

This page is using multiple Angular components along with bootstrap to simulate a bussines presentacion page, the sections on the page are:

- Header (no login required): this header is meant to be used in this page only since it includes the specific navigation items for this page, it implements a soft scrolling functionallity that will take you to the section that corresponds to the link clicked.
  It will also collapse on small screen sizes into a button, click on the button and you will see the menu.
- Banner: Shows a section with a picture as the whole background, it uses a custom component to separate the main tittle with the sub tittle since the same separator will be required on other sections.
- Nosotros: section divided into two other sections, implements a button that matches the style of the page and also uses the separator component.
  Here the Container element used for the section is container-fluid so it can take the full width and expand the image on the second part of the section all the way to the edge of the section.
- Servicios: Shows multiple items that can be used to shows multiple other items, could be improved by adding some sections with more info for each service when you click on them, for now they only change the background color with a smooth transition when you hover over them.
  Uses the separator component and the icons are taken from the bootstrap library, also the hover is applied with SCSS, directly into the component, no ts/js logic used for this effect.
  -Caracteristícas: Another presentation section, as with the "Nosotros" section this section is divided in two but the section on the left is a bit bigger, used a ratio of 7 to 5 (bootstrap colums) and the container wrapping this section is not fluid so the image (and the text secion) will not go all the way to the edge of the section giving it a "framed" look.
- Nuestro Equipo de Trabajo (Equipo): here something a bit more complicated was implemented, a new component was created to hold each of the team member, on the ts file for the section an array "Member" object is made (the Member model is defined on another file inside the section component folder), the Member has a field for his name, his picture path, a description of the member and one field for each the social networks (twitter,facebook,linkedn, email, googlePlus, Youtube, Pinterest and Tumblr, the constructor will take the values on that order).
  It has not been implemented but the idea is to use those fields to fill the links for each of the icons and if the link was not provided show in the UI that the social network link was not provided, by not changing the pointes as if the icon was clickable and probably show a tooltip with a message "Social Network not available".
  The "picturePath", "tittle, and "description" values do populate the first section of the member holder, and a "Member Holder" box will be created for each of the "Member" objects in the array and automatically sorted, 2 per row on small screens and 3 on larger screens.
- Contacto: this section is also divided in two, one for the contact form and one for the contact info (a reactive driven validation is used here).
  The contact form will validate that the fields are present and some extra validations:
  name - required.
  emai - required and email format.
  telefono - required and only numbers and min 8 max 10 numbers.
  fecha - a Date is required in order to be able to send the contact info form.
  mensaje - required and not longer than 250 characters.
  button - the button will not be enabled, the hover wont work and the color will fade when the form is not valid, once all the fields are valid the button will light up and you'll be able to click it

  This information is currently being saved on a Firebase DB but there is no page to show this information.

The second section here has some demo basic information and it implements a maps widget, the widget will dissapear on small screens since it wont on the design for small screens.

- Footer: the footer has 3 sections, one for the EmprenD logo and name, a separator component, another section for sub-sections which right now have the icons for the allowed demo payment options and another for the contact demo info, and a third section below to show the social network links for the bussines.

## Inicio

This page has a simple login/sign up form, a button to switch between log in and sign in, a button to send the active request and an error section above the form to show any error messages.

Validations:

- username: will need to be in an email format and is required.
- password: is is required and it needs to be at least 6 characters long.

This validations are handled through declarations on the html form.

Functionality:

- Log In: a search will be done on the Firebase default login service for your account and if your account exists and your password is correct you will be logged in and re-routed to the /blog page.
  If your information is not correct or your user was not found the corresponding error message should be displayed.
- Sign Up: if you do not have a user registered you will need to Sign Up, the same rules apply for user and password, the only validation that changes is that if an account was already created with that email you wont be able to create a new one.

## Blog

This is a simple form which saves an idea (validated - required, max 500 characters), once the idea is valid the current logged user and the current date will be added to the idea and then showen in the blog-log component below, if no user had logged in "Anonimo" will be used as "created by".
The button will follow the behavior as the button on the "Contacto" form and wont be enabled unless the idea is valid.
Also the header used here is different, this one does not have the navigation links and will check the service for the current logged used and show his username.
Here "Reactive Driven Validation" was used.

## Services

The project implements a couple of services for different uses.

- Modal Service: Service used to call openNotificationModal(tittle, message), the tittle will be added as the tittle to the modal and the message will be showed as the body of the modal, this modal can only be close, the is no implementation of a modal for confirmation.
- Logged Service: Service used to manage the connection to DB to sign up or register users through the login page.
- Ideas Service: Service that handles the connections to the APIs that connect to the DB to save the Ideas information.
- Contacto Service: Service that handles the connections to the APIs that connect to the DB to save the contact information.
- Logged Service: This is the authentication service, it uses an interface to define the data as indicated in the Firebase documentation (https://firebase.google.com/docs/reference/rest/auth#section-api-usage), it will saved in a BehaviorSubject Observable variable for the user so it can be accessed by any component provided with the service and it's up to date with any of the subscribers.

Two extra layers were added to the login/signUp calls, one to mannage some of the most common errors that can occur, and another one to "HandleAuthentication" where the user data is taken and saved in LocalStorage.

A "autoLogin" function was added to the service to check if there is a user saved in local storage and if one is found create the User as required by the interface and then make it the current user in the user BehaviorSubject Observable variable.

The User interface has a getter for the Token that will return "null" whenever the token is no longer valid, helping the validation of the current saved user.

A "autoLogOut" function was also added to check the time left on the token while it is still added and add a timer which will clear the current user once the time is out. This timer is also added when the user was just "signed in", if a timer was already set it will either update it or stop it as required.

NOTE: the error message layer implemented on the Logged-Service will be a good implementation on the other services.

## Database

The database is managed with firebase, currently it is on test mode so any call will be saved, once the authentication module is finished it will be changed so only logged in users will be able to see and use the blog page, the contact information will remain open since that is meant to be used by any user.

## Running unit tests

Unit Tests pending.

## Further help

Feel free to contact me for any specific questions about the project.
