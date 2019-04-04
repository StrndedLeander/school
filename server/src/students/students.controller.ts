import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { StudentsService } from './students.service';
import { Student } from './interfaces/student.interface';
import { create } from 'domain';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  // @Get(':unityID')
  // findAllFromUnity(@Param('unityID') unityID): Promise<Student[]> {
  //   return this.studentsService.findAllFromUnity(unityID);
  // }

  // @Get(':groupID')
  // findAllFromGroup(@Param('groupID') groupID): Promise<Student[]> {
  //   return this.studentsService.findAllFromGroup(groupID);
  // }

  @Get(':studentID')
  findOne(@Param('studentID') studentID) {
    return this.studentsService.findStudent(studentID);
  }

  @Post()
  create(@Body() createStudent: CreateStudentDto): Promise<Student> {
    return this.studentsService.create(createStudent);
  }

  @Put(':studentID')
  update(
    @Param('studentID') studentID,
    @Body() updateStudent: CreateStudentDto,
  ) {
    return this.studentsService.update(studentID, updateStudent);
  }

  @Delete(':studentID')
  delete(@Param('studentID') studentID) {
    return this.studentsService.delete(studentID);
  }
}
