import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import path from 'path';
import { CoursesService } from 'src/services/courses.service';
import { EnrollmentsService } from 'src/services/enrollments.service';
import { StudentsService } from 'src/services/students.service';
import { DatabaseModule } from '../database/database.module';
import { CoursesResolver } from './graphql/resolvers/courses.resolver';
import { EnrollmentsResolver } from './graphql/resolvers/enrollments.resolver';
import { StudentsResolver } from './graphql/resolvers/students.resolver';

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
        CoursesResolver,
        EnrollmentsResolver,
        StudentsResolver,

        CoursesService,
        EnrollmentsService,
        StudentsService
    ]
})
export class HttpModule { }
