import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { AuthorizationGuard } from 'src/http/auth/authorization.guard';
import { Product } from '../models/product';
import { ProductsService } from 'src/services/products.service';

@Resolver()
export class ProductsResolver {
    constructor(private productsService: ProductsService) { }

    @Query(() => [Product])
    //@UseGuards(AuthorizationGuard)
    products() {
        return this.productsService.listAllProducts()
    }
}
