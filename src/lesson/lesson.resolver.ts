import { Resolver, Query } from "@nestjs/graphql";
import { LessonClass } from "./lesson.type";

@Resolver(of => LessonClass)
export class LessonResolver {
    @Query(returns => LessonClass)
    lesson() {
        return {
            id: '2',
            name: 'name',
            startDate: (new Date()).toISOString,
            endDate: (new Date()).toISOString,
        }
    }
}