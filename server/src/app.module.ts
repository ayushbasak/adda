import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { POSTGRES_URI } from './config/config';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db.jizkbfdgtuxnuxkuhfvw.supabase.co',
      port: 5432,
      username: 'postgres',
      password: '*Ayush0210*5776',
      database: 'postgres',
      synchronize: true,
    }),
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
