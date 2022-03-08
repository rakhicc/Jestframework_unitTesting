'use strict';
module.exports=class CarStorage{
    constructor(data){
        if(!data){
            throw new Error('data storage missing');
        }
        this.carStorage=data;
    }
    getById(id){
        if(!id){
            throw new Error('parameter missing'); 
        }
        else {
            let result=null;
            for(let car of this.carStorage){
                if(car.id===id){
                    result=car;
                }
            }
            return result;
        }
    } 
    getAllIdsByManufacturer(value){
        let result=[];
        if(value){
            for(let car of this.carStorage){
                if(car.manufacturer.toLowerCase()===value.toLowerCase()){
                    result.push(car.id);
                }
}
        }
        console.log(result);
        return result;
    }
    getAllCarTypes(){
        let result=[];
        for(let car of this.carStorage){
            if(car.type && !(result.includes(car.type))){
                result.push(car.type);
            }
        }
        return result;
    }
    getAllCarsByType(type){
        if(!type){
            throw new Error('missing parameter'); 
        } else {
        let result=[]; 
        for(let car of this.carStorage){
            if(car.type && (car.type.toLowerCase()===type.toLowerCase())){
                result.push(car);
            }
        }
        return result;
    }
}
    getCarAccessories(id){
        let result=[]; 
        if(id){
        for(let car of this.carStorage){
            if(car.id===id){
                result=car.accessories;
            }
        }
        console.log(result);
        
    }
    return result;
}
getPriceWithoutExtras(id){
    if(!id){
        throw new Error('nothing found with given id'); 
    } else {
     let carFound=false;
    for(let car of this.carStorage){
        if(car.id===id){
            carFound=true;
            const price= car.price;
            return price;
        }
    }
    if(!carFound) {
        throw new Error('nothing found with given id'); 
    }
} 
}
    getTotalPrice(id) {
        if(!id){
            throw new Error('nothing found with given id'); 
        } else {
         let carFound=false;
         let price;
        for(let car of this.carStorage){
            if(car.id===id){
                carFound=true;
                price= car.price;
                if(car.extras && car.extras.length>0){
                    for(let extra of car.extras){
                        price=price+extra.price;
                    }
                }
                return price;
            }
        }
        if(!carFound){
            throw new Error('nothing found with given id'); 
        } 
    }         
    } 

    getPriceOfTheExtras(id) {
        if(!id){
            throw new Error('nothing found with given id'); 
        } else {
         let carFound=false;
         let price=0;
        for(let car of this.carStorage){
            if(car.id===id){
                carFound=true;
                if(car.extras && car.extras.length>0){
                    for(let extra of car.extras){
                        price=price+extra.price;
                    }
                }
                return price;
            }
        }
        if(!carFound){
            throw new Error('nothing found with given id'); 
        } 
    }         
    }  
    hasAccessories(id){
        let hasAccessories=false;
        if(id){
            for(let car of this.carStorage){
                if(car.id===id){
            if(car.accessories && car.accessories.length>0) {
                hasAccessories =true;
            }  
            }
        }    
        }
        return hasAccessories;
    }     
}