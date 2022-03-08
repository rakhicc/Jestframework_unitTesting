# Test cases

- **getAllCarsByType(type)**
  Returns an array of car objects of given type

  - Parameters: type of the car to be searched
  - Returns an array of car objects of given type. If no car of given type is found, returns an empty array.
  - If a parameter type is missing, an exeption **'missing parameter'** is thrown.

## Test 1 test method with type Coupe for which car object exists

before test create CarStorage object with datastorage.json as parameter.

```js
getAllCarsByType("Coupe");
```

returns

```json
[
  {
    "id": 2,
    "manufacturer": "Baas",
    "type": "Coupe",
    "accessories": ["clock", "speedometer"],
    "price": 35000,
    "extras": [
      {
        "name": "manual",
        "price": 10
      },
      {
        "name": "warranty",
        "price": 200
      }
    ]
  }
]
```

## Test 2 If no car of given type is found

before test create CarStorage object with datastorage.json as parameter.

```js
getAllCarsByType("x");
```

returns

```json
[]
```

## Test 3 parameter type is missing throws an exception

before test create CarStorage object with datastorage.json as parameter.

```js
getAllCarsByType();
```
