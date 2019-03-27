import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-student.dto';
import { StudentService, StudentsService } from './students.service';
import { Student } from './interfaces/student.interface';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}
}
