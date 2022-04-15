import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import path from 'path';
import { ProductsService } from 'src/services/products.service';
import { DatabaseModule } from '../database/database.module';
import { ProductsResolver } from './graphql/resolvers/products.resolver';

@Module({
    imports: [
        ConfigModule.forRoot(),
        DatabaseModule,
        GraphQLModule.forRoot({
            autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql'),
            driver: ApolloDriver
        })
    ],
    providers: [ProductsResolver, ProductsService]
})
export class HttpModule { }
