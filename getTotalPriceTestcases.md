# Testcases

- **getTotalPrice(id)**
  Returns the total price of the car including the total price of the extras

  - Parameters: id of the car
  - Return: The price of the car including the total price of the extras
  - if no car with the given number is found throws an exeption `nothing found with given id`

  ## Test 1 test method with id 1

before test create CarStorage object with datastorage.json as parameter.

```js
getTotalPrice(1);
```

returns `252500`

## Test 2 test the method with parameter is empty throws exception nothing found with given id

before test create CarStorage object with datastorage.json as parameter.

```js
getTotalPrice();
```

## Test 3 test the method with value of id for which the car data does not exist

before test create CarStorage object with datastorage.json as parameter.

```js
getTotalPrice("x");
```

throws an exeption `nothing found with given id`
