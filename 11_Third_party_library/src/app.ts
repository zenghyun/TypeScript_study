// import _ from 'lodash';

// console.log(_.shuffle([1, 2, 3]));

// declare var GLOBAL: any; 

// console.log(GLOBAL);

import "reflect-metadata";
import { validate } from 'class-validator'
import { plainToClass } from 'class-transformer';
import { Product } from './product.model';

// const p1 = new Product('A Book', 12.99);

const products = [
    { title: 'A Carpet', price: 29.99 },
    { title: 'A Book', price: 10.99 }
];

// const loadedProducts = products.map(prod => {
//     return new Product(prod.title, prod.price);
// });

const loadedProducts = plainToClass(Product, products);

for( const prod of loadedProducts ) {
    console.log(prod.getInformation());
}

const newProd = new Product('', -5.87);
validate(newProd).then(errors => {
    if(errors.length > 0) {
        console.log('VALIDATION ERRORS!');
        console.log(errors);
    } else {
        console.log("🚀  newProd", newProd)
    }
});

