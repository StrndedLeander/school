import { Module } from '@nestjs/common';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';
import { StudentSchema } from './schemas/student.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Student', schema: StudentSchema }]),
  ],
  controllers: [StudentsController],
  providers: [StudentsService],
})
export class StudentsModule {}
