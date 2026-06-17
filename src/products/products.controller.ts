import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { ProductsService } from './products.service';
import { TOPICS } from 'src/kafka/topics';

@Controller()
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @MessagePattern('get_products')
  getProducts() {
    return this.productsService.getProducts();
  }

  @EventPattern(TOPICS.ORDER_CREATED)
  handleOrderCreated(@Payload() payload: any) {
    const order = payload.value ?? payload; // NestJS wraps as { value: ... }
    console.log('Received order:', order);
    return this.productsService.reserveStock(order);
  }
}
