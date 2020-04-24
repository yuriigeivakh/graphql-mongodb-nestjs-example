import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { StudentType } from "./student.type";
import { StudentService } from "./student.service";
import { CreateStudentInput } from "./create-student.input";

@Resolver(of => StudentType)
export class StudentResolver {
    constructor(
        private studentService: StudentService,
    ) {}

    // @Query(returns => StudentType)
    // Student(
    //     @Args('id') id: string, 
    // ) {
    //     return this.StudentService.getStudent(id);
    // }

    // @Query(returns => [StudentType])
    // Students() {
    //     return this.StudentService.getStudents();
    // }

    @Mutation(returns => StudentType)
    createStudent(
        @Args('createStudentInput') createStudentInput: CreateStudentInput, 
    ) {
        return this.studentService.createStudent(createStudentInput);
    }
}