import { Injectable, Inject } from '@nestjs/common';
import { Student } from './interfaces/student.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel('Student') private readonly studentModel: Model<Student>,
  ) {}

  async findAllFromUnity(unityID: string): Promise<Student[]> {
    return await this.studentModel.find({ unities: { $all: unityID } });
  }

  async findAllFromGroup(groupID: string): Promise<Student[]> {
    return await this.studentModel.find({ groups: { $all: groupID } });
  }

  async findOne(studentID: string): Promise<Student> {
    return await this.studentModel.findById(studentID);
  }

  async create(student: Student): Promise<Student> {
    const newStudent = new this.studentModel(student);
    return await newStudent.save();
  }

  async update(id: string, student: Student): Promise<Student> {
    return await this.studentModel.findByIdAndUpdate(id, student, {
      new: true,
    });
  }

  async delete(id: string): Promise<Student> {
    return await this.studentModel.findByIdAndRemove(id);
  }
}
