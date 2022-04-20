import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma/prisma.service";

interface GetByCourseAndStudentId {
    courseId: string
    studentId: string
}

@Injectable()
export class EnrollmentsService {
    constructor(private prisma: PrismaService) { }

    findAllByStudent(studentId: string) {
        return this.prisma.enrollment.findMany({
            where: {
                studentId,
                canceledAt: null
            },
            orderBy: {
                createdAt: 'desc'
            }
        })
    }

    getByCourseAndStudentId({ courseId, studentId }: GetByCourseAndStudentId) {
        return this.prisma.enrollment.findFirst({
            where: {
                courseId,
                studentId,
                canceledAt: null
            }
        })
    }

    listAll() {
        return this.prisma.enrollment.findMany({
            where: { canceledAt: null },
            orderBy: {
                createdAt: 'desc'
            }
        })
    }
}