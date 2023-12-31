# Book-Record-Management

 Server >> Storing Book data
        >> User Register 
        >> Subscriber

This is a book record management API Server >> Backend for the Library system or management of records of manuals or books.



# Fine System
User: 02/01/2024 - 02/04/2024
05/04/2023=> 50*3=150/-

# Subscription Types
3 months (Basic)
6 months (Standard)
12 months (Premium)

If the subscription type is Standard && if the subscription date is 02/01/2024
=> then subscription is valid till 02/07/2024

within subscription date >> if we miss the renewal, 50/- per day
subscription date is missed >> renewal date is also missed >> 100 + 50/- per day

>>book1
>>basic
>>02/01/2024 => subscription date
>>03/01/2024 => borrowed a book from library
>>book1 renewal date is on 17/01/2024
>>19/01/2024 => we need to a pay a fine of 100/- (50 * no. of days)

>>book2
>>basic
>>02/01/2024 => subscription date
>>03/01/2024 => borrowed a book from library
>>book2 renewal date is on 17/01/2024
>>19/04/2024 => we need to a pay a fine of 200/- (100 + 50 * no. of days)

missed by renewal date>> 50/-
missed by subscription date>> 100/-
missed by renewal date && subscription date>> 150/-



# Routes and Endpoints

## /users
POST: Create a new user
GET: Get all the user info here

## /users/{id}
GET: Get the user info here by their id
PUT: Update a user's info by their id
DELETE: Delete a user by their id (check if he/she still has an issued book) && (is there any fine to be paid)

## /users/subscription-details/{id}
GET: Get user subscription details
        >> Date of Subscription
        >> Valid till
        >> Is ther any fine?

## /books
GET: Get all the books info
POST:  Add a new book

## /books/{id}
GET: Get the book info here by its id
PUT: Update a book's info by its id

## /books/issued
GET: Get all issued books info

## /books/issued/withFine
GET: Get all issued books info with their fine
