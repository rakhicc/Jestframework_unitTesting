# Testcases

- **getAllIdsByManufacturer(value)**
  Returns all ids of the cars matching the value of manufacturer

  - Parameters: value of the property to be searched
  - Return: Returns an array of car id where the cars manufacturer matches the given value. If there is no match or parameter is missing, an empty array is returned.

  ## Test 1 test the method with value of manufacturer for which the car data exists

```js
getAllIdsByManufacturer("WBM");
```

returns

```json
[1]
```

## Test 2 test the method with value of manufacturer is empty

```js
getAllIdsByManufacturer();
```

returns

```json
[]
```

## Test 3 test the method with value of manufacturer for which the car data does not exist

```js
getAllIdsByManufacturer("X");
```

returns

```json
[]
```
