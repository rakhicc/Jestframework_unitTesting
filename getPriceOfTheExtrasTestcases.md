# Testcases

- **getPriceOfTheExtras(id)**
  Returns the total price of extras bunled with the car

  - Parameters: id of the car to be searched
  - Return: the total price of extras. If no extras is found returns 0
  - if no car with the given number is found throws an exeption `nothing found with given id`

  ## Test 1 test method with id 1

before test create CarStorage object with datastorage.json as parameter.

```js
getPriceOfTheExtras(1);
```

returns `2500`

## Test 2 test method with id 3 for which extras is empty

before test create CarStorage object with datastorage.json as parameter.

```js
getPriceOfTheExtras(3);
```

returns `0`

## Test 3 test the method with parameter is empty throws exception nothing found with given id

before test create CarStorage object with datastorage.json as parameter.

```js
getPriceOfTheExtras();
```

## Test 4 test the method with value of id for which the car data does not exist

before test create CarStorage object with datastorage.json as parameter.

```js
getPriceOfTheExtras("x");
```

throws an exeption `nothing found with given id`
