interface ICreateClassesDTO {
    id?: string;
    grade: number;
    description: string;
    shift: string;
    school_id: string;
    teacher_id: string;
    students_id: string[];
}
export { ICreateClassesDTO };
