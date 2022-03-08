# Test cases

## **constructor(data)**

datastorage json array is passed as a parameter `data`.
If the parameter is missing,this constructr throws exception `'data storage missing'`.

### Test 1: object created with given data

```js
new CarStorage(jsonData);
```

test if the inner field of the created objects inner field has the same value as given as parameter. parameter `jsonData` is the json array from the default file `datastorage.json`

### Test 2:missing parameter throws an exception

```js
new CarStorage();
```

this will throw an exception `´data storage missing'`
