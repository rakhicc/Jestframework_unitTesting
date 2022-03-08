# Test cases

- **getAllCarTypes()**
  Returns an array of different car types.

  - Parameters: none
  - Return: Returns an array of different car types. If no types are found, returns an empty array. The type is added to the result array only once.

## Test 1 test with the default data

before test create CarStorage object with datastorage.json as parameter.

returns

```json
["XGT", "Coupe", "solo"]
```

## Test 2 test with the data in which the car with same type exist more than once.

In the following json cars with id 3 and 4 are havind type solo.

```js
const data = [
  {
    id: 1,
    manufacturer: "WBM",
    type: "XGT",
    accessories: ["radar", "coffee warmer", "hook"],
    price: 250000,
    extras: [
      {
        name: "winter tires",
        price: 1500,
      },
      {
        name: "summer tires",
        price: 1000,
      },
    ],
  },
  {
    id: 2,
    manufacturer: "Baas",
    type: "Coupe",
    accessories: ["clock", "speedometer"],
    price: 35000,
    extras: [
      {
        name: "manual",
        price: 10,
      },
      {
        name: "warranty",
        price: 200,
      },
    ],
  },
  {
    id: 3,
    manufacturer: "FauV",
    type: "solo",
    accessories: [],
    price: 15000,
    extras: [],
  },
  {
    id: 4,
    manufacturer: "FauV",
    type: "solo",
    accessories: [],
    price: 5000,
    extras: [],
  },
];
```

before test create CarStorage object with parameter as data.

returns

```json
["XGT", "Coupe", "solo"]
```

## Test 3:all cars are missing

before test create CarStorage object with empty array[]
returns

```json
[]
```
