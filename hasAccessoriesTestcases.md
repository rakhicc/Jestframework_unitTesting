# Testcases

- **hasAccessories(id)**
- Parameters: id of the car
- Return: returns true if the car has accessories else returns false. If parameter id is missing false is returned

  ## Test 1 test method with id 1

before test create CarStorage object with datastorage.json as parameter.

```js
hasAccessories(1);
```

returns `true`

## Test 2 test method with id 3 for which accessories is empty

before test create CarStorage object with datastorage.json as parameter.

```js
hasAccessories(3);
```

returns `false`

## Test 3 test the method with parameter is empty

before test create CarStorage object with datastorage.json as parameter.

```js
hasAccessories();
```

returns `false`

## Test 4 test the method with value of id for which the car data does not exist

before test create CarStorage object with datastorage.json as parameter.

```js
hasAccessories("x");
```

returns `false`
