# Testcases

- **GetCarAccessories(id)**
  Returns an array of car accessories. If none found, returns an empty array.

  - Parameters: id of the car
  - Return: returns accessories as an array

## Test 1 test method with id 1 for which car accessories exists

before test create CarStorage object with datastorage.json as parameter.

```js
getCarAccessories(1);
```

returns

```json
["radar", "coffee warmer", "hook"]
```

## Test 2 test the method with parameter is empty

```js
getCarAccessories();
```

returns

```json
[]
```

## Test 3 test the method with value of id for which the car data does not exist

```js
getCarAccessories("x");
```

returns

```json
[]
```
