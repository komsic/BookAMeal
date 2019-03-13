[![Build Status](https://travis-ci.org/komsic/BookAMeal.svg?branch=develop)](https://travis-ci.org/komsic/BookAMeal) [![Coverage Status](https://coveralls.io/repos/github/komsic/BookAMeal/badge.svg?branch=develop)](https://coveralls.io/github/komsic/BookAMeal?branch=develop) [![Maintainability](https://api.codeclimate.com/v1/badges/605db976365287c83b7b/maintainability)](https://codeclimate.com/github/komsic/BookAMeal/maintainability)

# BookAMeal
Book-A-Meal is an application that allows customers to make food orders and helps the food vendor know what the customers want to eat.

### Technologies
#### UI
* HTML
* CSS
* Javascript

#### Server
* Node.js
* Express.js
* Babel
* Postgres/Sequelize.js
* Heroku
* Swagger doc

#### TDD

* Mocha
* Chai

#### CI
* Travis
* Coverall
* Code Climate

### Installation
* Clone the app
```
      git clone https://github.com/komsic/BookAMeal.git
```
* Checkout to **develop** branch
```
      git checkout develop
```
* Run npm install
* Run npm start
* Run npm test for testing

### API Endpoints
* POST api/v1/auth/register User can register
* POST api/v1/auth/login User can login
* GET api/v1/meals/ Caterers can get all meals options they uploaded
* POST api/v1/meals/ Catereres can add meal options linked to their account
* PUT api/vi/meals/:mealId Caterers can update their meal options
* DELETE api/v1/meals/:mealId Caterers can delete their meal options
* GET api/v1/menu/ Caterers and Users can Get the menu for the day
* POST api/v1/menu/ Caterers can Set a menu for the day
* GET api/v1/orders Get All Orders
* POST api/v1/orders Users can make orders
* PUT api/v1/orders/:orderId Users can modify their orders

### Important Links
* [Trello](https://trello.com/b/MPtMk02p/meal-booking-app)
* [UI](https://komsic.github.io/BookAMeal/ui/index.html)
* [Heroku](https://book-a-meal-1.herokuapp.com/)
