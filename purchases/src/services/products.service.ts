import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma/prisma.service";
import slugify from 'slugify'
import { CreateProductInput } from "src/http/graphql/inputs/create-product-input";

@Injectable()
export class ProductsService {
    constructor(private prisma: PrismaService){}

    listAllProducts(){
        return this.prisma.product.findMany()
    }

    async createProduct({title}: CreateProductInput) {
        const slug = slugify(title, {lower: true})
        const productWithSameSlug = await this.prisma
        .product.findUnique({
            where: {
                slug,
            }
        })
        if(productWithSameSlug) {
            throw new Error('Another Product with the same slug already exists')
        }
        return this.prisma.product.create({
            data: {
                title,
                slug
            }
        })
    }
}