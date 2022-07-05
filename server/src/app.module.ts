import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { POSTGRES_URI } from './config/config';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { GroupsController } from './groups/groups.controller';
import { GroupsModule } from './groups/groups.module';
import { PostsModule } from './posts/posts.module';
import { UpvotesModule } from './upvotes/upvotes.module';
import { DownvotesModule } from './downvotes/downvotes.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db.jizkbfdgtuxnuxkuhfvw.supabase.co',
      port: 5432,
      username: 'postgres',
      password: '*Ayush0210*5776',
      database: 'postgres',
      entities: [__dirname + '/../**/*.entity.js'],
      synchronize: true,
    }),
    UsersModule,
    GroupsModule,
    PostsModule,
    UpvotesModule,
    DownvotesModule,
    CommentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
