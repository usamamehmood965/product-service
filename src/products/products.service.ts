import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  getProducts() {
    return [
      {
        success: true,
        message: 'Products fetched successfully',
        data: [
          {
            id: 1,
            name: 'MacBook Pro 14',
            price: 1999.99,
          },
          {
            id: 2,
            name: 'Samsung Galaxy S25',
            price: 1099.99,
          },
          {
            id: 3,
            name: 'Sony WH-1000XM6',
            price: 399.99,
          },
          {
            id: 4,
            name: 'XBOX Series X',
            price: 649.99,
          },
          {
            id: 5,
            name: 'Apple Watch Ultra 2',
            price: 799.99,
          },
        ],
        count: 5,
      },
    ];
  }
}
