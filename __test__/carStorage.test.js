'use strict';
const CarStorage=require('../carStorage');
const cars=require('../datastorage.json');

describe('Testing constructor',()=>{
    test('Test 1 car storage object created with given data',()=>{
        const carstorage=new CarStorage(cars);
        expect(carstorage.carStorage).toEqual(cars);
    })
    test('Test 2:missing parameter throws an exception',()=>{
        expect(()=> new CarStorage()).toThrow('data storage missing');
    });
})

describe('Testing method getById(id)',()=>{
    const carstorage=new CarStorage(cars);
    const testResultOne={
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
      };
    const testResultTwo ={
        "id": 2,
        "manufacturer": "Baas",
        "type": "Coupe",
        "accessories": ["clock","speedometer"],
        "price": 35000,
        "extras": [{
            "name": "manual",
            "price": 10
          },
          {
            "name": "warranty",
            "price": 200
          }
        ]
      };
    const testResultThree={
        "id": 3,
        "manufacturer": "FauV",
        "type": "solo",
        "accessories": [],
        "price": 15000,
        "extras": []
      };
    test('Test1 Testing positive scenario get by id 1 for which car data exists',()=>{
        
          expect(carstorage.getById(1)).toEqual(testResultOne);
    })
describe('Test 1 Testing getById with ids for which data exists using test.each',()=>{
    const testvalues=[
        [1,testResultOne],
        [2,testResultTwo],
        [3,testResultThree]
    ];
    test.each(testvalues)('Test getById("%s") returns "%s"',(id,expected)=>{
        expect(carstorage.getById(id)).toEqual(expected);
    })
})

test('Test 2 test with an id for which data does not exists',()=>{
    expect(carstorage.getById(5)).toBeNull()
})
test('Test 3 test the method with missing parameter',()=>{
    expect(()=>carstorage.getById()).toThrow('parameter missing');
})
})
describe('Testing the method getAllIdsByManufacturer(value)',()=>{
    const carstorage=new CarStorage(cars);
    test('Test 1 test the method with value of manufacturer for which the car data exists ',()=>{
        expect(carstorage.getAllIdsByManufacturer('wbm')).toEqual([1]);
    })
    test('Test 2 test the method with value of manufacturer is empty',()=>{
        expect(carstorage.getAllIdsByManufacturer()).toEqual([]);
    })
    test('Test 3 test the method with value of manufacturer for which the car data does not exist',()=>{
        expect(carstorage.getAllIdsByManufacturer('x')).toEqual([]);
    })

})
describe('Test getAllCarTypes()',()=>{
    test('Test 1 test with the default data',()=>{
        const carstorage=new CarStorage(cars);
        expect(carstorage.getAllCarTypes()).toEqual(["XGT", "Coupe", "solo"]) 
    })
    test('Test 2 test with the data in which the car with same type exist more than once',()=>{
        const data=[
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
        const carstorage=new CarStorage(data);
        expect(carstorage.getAllCarTypes()).toEqual(["XGT", "Coupe", "solo"]) 
    })
    test('Test 3:all cars are missing',()=>{
        const carstorage=new CarStorage([]);
        expect(carstorage.getAllCarTypes()).toEqual([]) 
    })
})
    
describe('Testing getAllCarsByType(type)',()=>{
    const carstorage=new CarStorage(cars);
    test('Test 1 test method with type Coupe for which car object exists',()=>{
        const result=[
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
        expect(carstorage.getAllCarsByType('Coupe')).toEqual(result);
    })
test('Test 2 If no car of given type is found',()=>{
    expect(carstorage.getAllCarsByType('x')).toEqual([]);
})
test('Test 3 parameter type is missing throws an exception',()=>{
    expect(()=>carstorage.getAllCarsByType()).toThrow('missing parameter');
})
})
describe('Testing getCarAccessories',()=>{
    test('Test 1 test method with id 1 for which car accessories exists',()=>{
        const carstorage=new CarStorage(cars); 
        expect(carstorage.getCarAccessories(1)).toEqual(["radar", "coffee warmer", "hook"]);
    })
    test('Test 2 test the method with parameter is empty ',()=>{
        const carstorage=new CarStorage(cars); 
        expect(carstorage.getCarAccessories()).toEqual([]);
    })
    test('Test 3 test the method with value of id for which the car data does not exist',()=>{
        const carstorage=new CarStorage(cars); 
        expect(carstorage.getCarAccessories('x')).toEqual([]);
    })
})
describe('Testing the method getPriceWithoutExtras',()=>{
    const carstorage=new CarStorage(cars);
    test('Test 1 test method with id 1',()=>{  
        expect(carstorage.getPriceWithoutExtras(1)).toEqual(250000);
    })
    test('Test 2 test the method with parameter is empty throws exception nothing found with given id',()=>{
        expect(()=>carstorage.getPriceWithoutExtras()).toThrow('nothing found with given id');
    })
    test('Test 3 test the method with value of id for which the car data does not exist',()=>{
        expect(()=>carstorage.getPriceWithoutExtras('x')).toThrow('nothing found with given id');
    })
})
describe('Testing method getTotalPrice',()=>{
    const carstorage=new CarStorage(cars);
    test('Test 1 test method with id 1',()=>{  
        expect(carstorage.getTotalPrice(1)).toEqual(252500);
    })
    test('Test 2 test the method with parameter is empty throws exception nothing found with given id',()=>{
        expect(()=>carstorage.getTotalPrice()).toThrow('nothing found with given id');
    })
    test('Test 3 test the method with value of id for which the car data does not exist',()=>{
        expect(()=>carstorage.getTotalPrice('x')).toThrow('nothing found with given id');
    })
})
describe('Testing method getPriceOfTheExtras',()=>{
    const carstorage=new CarStorage(cars);
    test('Test 1 test method with id 1',()=>{  
        expect(carstorage.getPriceOfTheExtras(1)).toEqual(2500);
    })
    test('Test 2 test method with id 3 for which extras is empty',()=>{  
        expect(carstorage.getPriceOfTheExtras(3)).toEqual(0);
    })   
    test('Test 3 test the method with parameter is empty throws exception nothing found with given id',()=>{
        expect(()=>carstorage.getPriceOfTheExtras()).toThrow('nothing found with given id');
    })
    test('Test 4 test the method with value of id for which the car data does not exist',()=>{
        expect(()=>carstorage.getPriceOfTheExtras('x')).toThrow('nothing found with given id');
    })
})

describe('Testing method hasAccessories',()=>{
    const carstorage=new CarStorage(cars);
    test('Test 1 test method with id 1',()=>{  
        expect(carstorage.hasAccessories(1)).toEqual(true);
    })
    test('Test 2 test method with id 3 for which accessories is empty',()=>{  
        expect(carstorage.hasAccessories(3)).toEqual(false);
    })   
    test('Test 3 test the method with parameter is missing returns false',()=>{
        expect(carstorage.hasAccessories()).toEqual(false);
    })
    test('Test 4 test the method with value of id for which the car data does not exist',()=>{
        expect(carstorage.hasAccessories('x')).toEqual(false);
    })
})


