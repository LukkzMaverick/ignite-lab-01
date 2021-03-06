import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import path from 'path';
import { CustomersService } from 'src/services/customers.service';
import { ProductsService } from 'src/services/products.service';
import { PurchasesService } from 'src/services/purchases.service';
import { DatabaseModule } from '../database/database.module';
import { CustomersResolver } from './graphql/resolvers/customers.resolver';
import { ProductsResolver } from './graphql/resolvers/products.resolver';
import { PurchasesResolver } from './graphql/resolvers/purchases.resolver';

@Module({
    imports: [
        ConfigModule.forRoot(),
        DatabaseModule,
        GraphQLModule.forRoot({
            autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql'),
            driver: ApolloDriver
        })
    ],
    providers: [
        ProductsResolver,
        ProductsService,
        PurchasesResolver,
        PurchasesService,
        CustomersService,
        CustomersResolver
    ]
})
export class HttpModule { }
