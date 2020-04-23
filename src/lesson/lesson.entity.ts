import { Entity, PrimaryColumn, ObjectIdColumn } from "typeorm";

@Entity()
export class Lesson {
    @ObjectIdColumn()
    _id: string;

    @PrimaryColumn()
    id: string;

    @PrimaryColumn()
    name: string;

    @PrimaryColumn()
    startDate: string;

    @PrimaryColumn()
    endDate: string;
}