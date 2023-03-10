import {Module} from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {ConfigModule} from "@nestjs/config";
import {UsersModule} from './users/users.module';
import {AuthModule} from './auth/auth.module';
import {BoardsModule} from './boards/boards.module';
import {ListsModule} from './lists/lists.module';
import {TasksModule} from './tasks/tasks.module';
import {CommentsModule} from './comments/comments.module';


@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env',
            isGlobal: true
        }),
        MongooseModule.forRoot(
            `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.vrdxxen.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
        ),
        UsersModule,
        AuthModule,
        BoardsModule,
        ListsModule,
        TasksModule,
        CommentsModule
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}

