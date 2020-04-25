import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuid } from 'uuid';
import { Repository } from 'typeorm';
import { CreateStudentInput } from './create-student.input';
import { Student } from './student.entity';

@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(Student)
        private studentRepository: Repository<Student>,
    ) {}

    async createStudent(createStudentInput: CreateStudentInput): Promise<Student> {
        const { firstname, lastname } = createStudentInput;
        const lesson = this.studentRepository.create({
            id: uuid(),
            firstname,
            lastname,
        });
        
        return this.studentRepository.save(lesson);
    }

    async getStudents(): Promise<Student[]> {
        return this.studentRepository.find();
    }

    async getStudent(id: string): Promise<Student> {
        return this.studentRepository.findOne({ id });
    }

    async getManyStudents(studentIds: string[]): Promise<Student[]> {
        return this.studentRepository.find({ 
            where: {
                id: {
                    $in: studentIds,
                }
            }
        });
    }
}
