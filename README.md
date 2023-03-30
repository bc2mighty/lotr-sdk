**Lord of the rings MovieSDK**

Welcome to the official Node.JS SDK for Lord of the Rings Movies. With the help of this SDk, you can easily fetch and find all the lord of the rings movies ever produced. In addition, this library helps you to get all quotes for a specific lord of the rings movies. Sounds interesting already? Let's get Started.
# Table of contents
1. [Install](#install)
2. [Getting Started](#getting-started)
3. [Get All Movies](#get-all-movies)
4. [Get Movies By ID](#get-by-id)
5. [Get Movie Quotes](#get-movie-quotes)
6. [Test](#test)

## Install <a name="install"></a>
```
$ npm i lotr-movie-sdk
```

## Getting Started <a name="getting-started"></a>
You need to create an instance of the `MovieSDK` class. The `MovieSDK` instance must be instantiated with your `clientSecret` and `clientKey`. We have provided test credentials for both which are used below:
```javascript
import {MovieSDK, MovieConfiguration, MovieIDObject} from 'lotr-movie-sdk';
const movieConfig: MovieConfiguration = {
    clientSecret: 'abcd',
    clientKey: '1234'
};
const movie = new MovieSDK(movieConfig);
```
This SDK has some typescript types and interfaces defined to make development easy for you.

## Get All Movies <a name="get-all-movies"></a>
```javascript
const movies = await movie.getAll();
console.log(movies);
```
The above code snippet would output something like the following:
```json
[
            {
                "_id": "5cd95395de30eff6ebccde56",
                "name": "The Lord of the Rings Series",
                "runtimeInMinutes": 558,
                "budgetInMillions": 281,
                "boxOfficeRevenueInMillions": 2917,
                "academyAwardNominations": 30,
                "academyAwardWins": 17,
                "rottenTomatoesScore": 94
            },
            {
                "_id": "5cd95395de30eff6ebccde57",
                "name": "The Hobbit Series",
                "runtimeInMinutes": 462,
                "budgetInMillions": 675,
                "boxOfficeRevenueInMillions": 2932,
                "academyAwardNominations": 7,
                "academyAwardWins": 1,
                "rottenTomatoesScore": 66.33333333
            }
        ]
```
## Get Movies By ID <a name="get-by-id"></a>
```javascript
const movieIDObj: MovieIDObject = {
      id: req.params.id
};
const movie = await movie.getById(movieIDObj);
console.log(movie);
```
The above code would output a response that looks the following:
```json
[
            {
                "_id": "5cd95395de30eff6ebccde56",
                "name": "The Lord of the Rings Series",
                "runtimeInMinutes": 558,
                "budgetInMillions": 281,
                "boxOfficeRevenueInMillions": 2917,
                "academyAwardNominations": 30,
                "academyAwardWins": 17,
                "rottenTomatoesScore": 94
            }
]
```

## Get Movie Quotes <a name="get-movie-quotes"></a>
```javascript
const movieIDObj: MovieIDObject = {
      id: req.params.id
    };
const movieQuotes = await movie.getQuotes(movieIDObj);
console.log(movieQuotes);
```
The above code snippet would result in a response that looks like the following:
```json
[
            {
                "_id": "5cd96e05de30eff6ebcce7e9",
                "dialog": "Deagol!",
                "movie": "5cd95395de30eff6ebccde5d",
                "character": "5cd99d4bde30eff6ebccfe9e",
                "id": "5cd96e05de30eff6ebcce7e9"
            },
            {
                "_id": "5cd96e05de30eff6ebcce7ea",
                "dialog": "Deagol!",
                "movie": "5cd95395de30eff6ebccde5d",
                "character": "5cd99d4bde30eff6ebccfe9e",
                "id": "5cd96e05de30eff6ebcce7ea"
            },
        ]
```

## Test <a name="test"></a>
Some tests were written for this SDK and they can be found in [test/index.test.ts](./test/index.test.ts). To run these tests, simply use this command:
```
$ npm run test
```
