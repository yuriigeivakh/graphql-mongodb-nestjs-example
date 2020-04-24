import { Entity, PrimaryColumn, ObjectIdColumn } from "typeorm";

@Entity()
export class Student {
    @ObjectIdColumn()
    _id: string;

    @PrimaryColumn()
    id: string;

    @PrimaryColumn()
    firstname: string;

    @PrimaryColumn()
    lastname: string;
}