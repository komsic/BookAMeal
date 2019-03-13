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
> The request body include ***name, isAdmin, email, password*, and description.** The first four keys are required. For example:
```json
{
  "name": "The Jollof Kitchen",
  "description": "We sell jollof foods",
  "isAdmin": false,
  "email": "tjk@email.com",
  "password": "p@ssword"
}
```
> The isAdmin key is used to determine whether the intending user is a Customer (false) or Caterer (true). The sucessful response will be:
```json
{
    "auth": true,
    "token": "your_token"
}
```

* POST api/v1/auth/login User can login
> For logging in, you only need to include **email and password**.  For example:
```json
{
  "email": "tjk@email.com",
  "password": "p@ssword"
}
```
> The successful response will be:
```json
{
    "auth": true,
    "token": "your_token"
}
```
> **NOTE:** The token gotten from auth's response must be saved and attached to the subsequent request's headers under **x-access-token** key. Not doing this will make the app refuse subsequent request.

* GET api/v1/meals/ Caterers can get all meals options they uploaded
> Successful response will look like this:
```json
{
    "status": "success",
    "data": [
        {
            "id": 1,
            "name": "Tuwo",
            "inMenu": true,
            "quantity": 15,
            "price": 800,
            "createdAt": "2019-03-13T07:54:42.465Z",
            "updatedAt": "2019-03-13T07:54:42.465Z",
            "userId": 1,
            "Orders": [
                {
                    "id": 1,
                    "orderStatus": "DISPATCHED",
                    "totalAmount": 5600,
                    "createdAt": "2019-03-13T07:54:42.445Z",
                    "updatedAt": "2019-03-13T07:54:42.445Z",
                    "userId": 1,
                    "OrderMeal": {
                        "id": 1,
                        "quantity": 2,
                        "createdAt": "2019-03-13T07:54:42.484Z",
                        "updatedAt": "2019-03-13T07:54:42.484Z",
                        "mealId": 1,
                        "orderId": 1
                    }
                },
            ]
        },
        {
            "id": 2,
            "name": "Beans",
            "inMenu": false,
            "quantity": 14,
            "price": 500,
            "createdAt": "2019-03-13T07:54:42.465Z",
            "updatedAt": "2019-03-13T07:54:42.465Z",
            "userId": 2,
            "Orders": []
        }
    ]
}
```
* POST api/v1/meals/ Catereres can add meal options linked to their account
> The request body include ***name, userId*, quantity, price, and inMenu.** The first two keys are required. The userId is the id of the caterer that owned the meal while inMenu is used to determine whether the meal is among menu's meals. For example:
```json
{
  "name": "Jollof RIce",
  "userId": 1,
  "quantity": 12,
  "price": 300,
  "inMenu": true
}
```
> The successful response will look like:
```json
{
    "status": "success",
    "data": {
        "name": "Jollof RIce",
        "userId": 1,
        "quantity": 12,
        "price": 300,
        "inMenu": true,
        "id": 8,
        "updatedAt": "2019-03-13T09:03:37.448Z",
        "createdAt": "2019-03-13T09:03:37.448Z"
    }
}
```

* PUT api/vi/meals/:mealId Caterers can update their meal options
> For modifying the meal details, the request body must include the id of the meal and any of the other keys that will be updated. For example:
```json
{
  "id": 1,
  "name": "Banga Soup",
  "price": 1000,
  "quantity": 8
}
```
> And the successful response will be:
```json
{
    "status": "success",
    "data": {
        "id": 1,
        "name": "Banga Soup",
        "inMenu": true,
        "quantity": 8,
        "price": 1000,
        "userId": 1,
        "createdAt": "2019-03-13T07:54:42.465Z",
        "updatedAt": "2019-03-13T09:18:26.438Z"
    }
}
```

* DELETE api/v1/meals/:mealId Caterers can delete their meal options
> Successful response will be:
```json
{
    "status": "success",
    "data": {}
}
```

* GET api/v1/menu/ Caterers and Users can Get the menu for the day
> Successful response will be:
```json
{
    "status": "success",
    "data": [
        {
            "id": 1,
            "name": "Banga Soup",
            "inMenu": true,
            "quantity": 8,
            "price": 1000,
            "createdAt": "2019-03-13T07:54:42.465Z",
            "updatedAt": "2019-03-13T09:18:26.438Z",
            "userId": 1,
        },
        {
            "id": 2,
            "name": "Amala",
            "inMenu": true,
            "quantity": 25,
            "price": 1000,
            "createdAt": "2019-03-13T07:54:42.465Z",
            "updatedAt": "2019-03-13T07:54:42.465Z",
            "userId": 1,
        }
    ]
}
```

* POST api/v1/menu/ Caterers can Set a menu for the day

* GET api/v1/orders Get All Orders
> Successful response will be:
```json
{
    "status": "success",
    "data": [
        {
            "id": 1,
            "orderStatus": "DISPATCHED",
            "totalAmount": 5600,
            "createdAt": "2019-03-13T07:54:42.445Z",
            "updatedAt": "2019-03-13T07:54:42.445Z",
            "userId": 1,
            "Meals": [
                {
                    "id": 1,
                    "name": "Banga Soup",
                    "inMenu": true,
                    "quantity": 8,
                    "price": 1000,
                    "createdAt": "2019-03-13T07:54:42.465Z",
                    "updatedAt": "2019-03-13T09:18:26.438Z",
                    "userId": 1,
                    "OrderMeal": {
                        "id": 1,
                        "quantity": 2,
                        "createdAt": "2019-03-13T07:54:42.484Z",
                        "updatedAt": "2019-03-13T07:54:42.484Z",
                        "mealId": 1,
                        "orderId": 1
                    }
                },
                {
                    "id": 2,
                    "name": "Amala",
                    "inMenu": true,
                    "quantity": 25,
                    "price": 1000,
                    "createdAt": "2019-03-13T07:54:42.465Z",
                    "updatedAt": "2019-03-13T07:54:42.465Z",
                    "userId": 1,
                    "OrderMeal": {
                        "id": 4,
                        "quantity": 4,
                        "createdAt": "2019-03-13T07:54:42.484Z",
                        "updatedAt": "2019-03-13T07:54:42.484Z",
                        "mealId": 2,
                        "orderId": 1
                    }
                }
            ]
        },
        {
            "id": 2,
            "orderStatus": "DISPATCHED",
            "totalAmount": 4200,
            "createdAt": "2019-03-13T07:54:42.445Z",
            "updatedAt": "2019-03-13T07:54:42.445Z",
            "userId": 2,
            "Meals": [
                {
                    "id": 1,
                    "name": "Banga Soup",
                    "inMenu": true,
                    "quantity": 8,
                    "price": 1000,
                    "createdAt": "2019-03-13T07:54:42.465Z",
                    "updatedAt": "2019-03-13T09:18:26.438Z",
                    "userId": 1,
                    "OrderMeal": {
                        "id": 2,
                        "quantity": 4,
                        "createdAt": "2019-03-13T07:54:42.484Z",
                        "updatedAt": "2019-03-13T07:54:42.484Z",
                        "mealId": 1,
                        "orderId": 2
                    }
                },
                {
                    "id": 2,
                    "name": "Amala",
                    "inMenu": true,
                    "quantity": 25,
                    "price": 1000,
                    "createdAt": "2019-03-13T07:54:42.465Z",
                    "updatedAt": "2019-03-13T07:54:42.465Z",
                    "userId": 1,
                    "OrderMeal": {
                        "id": 5,
                        "quantity": 1,
                        "createdAt": "2019-03-13T07:54:42.484Z",
                        "updatedAt": "2019-03-13T07:54:42.484Z",
                        "mealId": 2,
                        "orderId": 2
                    }
                }
            ]
        }
    ]
}
```
* POST api/v1/orders Users can make orders
> The request body of a order must look like:
```json
{
  "orderedMeals": [
    {
      "mealId": 1,
      "quantity": 5,
    },
    {
      "mealId": 2,
      "quantity": 5,
    },
  ],
  "orderStatus": "DISPATCHED",
  "totalAmount": 5,
  "userId": 1,
}
```
> Successful response will be:
```json
{
    "status": "success",
    "data": {
        "orderStatus": "DISPATCHED",
        "totalAmount": 5,
        "userId": 1,
        "id": 7,
        "updatedAt": "2019-03-13T09:33:01.805Z",
        "createdAt": "2019-03-13T09:33:01.805Z"
    }
}
```

* PUT api/v1/orders/:orderId Users can modify their orders
> Sample request body:
```json
{
	"id": 2,
	"totalAmount": 5,
	"orderStatus": "BEING PROCESSED",
	"orderedMeals": [
	  {
	    "mealId": 1,
	    "quantity": 5
	  },
	  {
	    "mealId": 2,
	    "quantity": 5
	  }
	]
}
```

> Successful response:
```json
{
    "status": "success",
    "data": {
        "id": 2,
        "orderStatus": "BEING PROCESSED",
        "totalAmount": 5,
        "userId": 2,
        "createdAt": "2019-03-13T07:54:42.445Z",
        "updatedAt": "2019-03-13T09:41:01.391Z"
    }
}
```

### Important Links
* [Trello](https://trello.com/b/MPtMk02p/meal-booking-app)
* [UI](https://komsic.github.io/BookAMeal/ui/index.html)
* [Heroku](https://book-a-meal-1.herokuapp.com/)
