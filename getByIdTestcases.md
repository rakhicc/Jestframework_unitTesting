# Testcases

- **getById(id)**
  Method searches the datastorage for an object with given key. Key is unique.

  - Parameters: id of the car
  - Return: returns the car object matching the id or null if there is no match
  - if parameter is missing, throws an exception `'parameter missing'`

## Test 1 test with an id for which data exists

```js
getById(1);
```

returns

```json
{
  "id": 1,
  "manufacturer": "WBM",
  "type": "XGT",
  "accessories": ["radar", "coffee warmer", "hook"],
  "price": 250000,
  "extras": [
    {
      "name": "winter tires",
      "price": 1500
    },
    {
      "name": "summer tires",
      "price": 1000
    }
  ]
}
```

## Test 2 test with an id for which data does not exists

```js
getById(5);
```

returns `null`

## Test 3 test the method with missing parameter

```js
getById();
```

throws an exception `'parameter missing'`
