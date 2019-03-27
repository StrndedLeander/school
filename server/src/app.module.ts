import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsController } from './students/students.controller';
import { StudentsModule } from './students/students.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthenticationController } from './authentication/authentication.controller';
import { AuthenticationService } from './authentication/authentication.service';
import config from './config/keys';

@Module({
  imports: [StudentsModule, MongooseModule.forRoot(config.mongoURI)],
  controllers: [AppController, StudentsController, AuthenticationController],
  providers: [AppService, AuthenticationService],
})
export class AppModule {}
