export interface IStudent {
  id: number;
  name: string;
  cgpa: number;
}

export class Student implements IStudent {
    id: number;
    name: string;
    cgpa: number;

    constructor(id: number, name: string, cgpa: number) {
        this.id = id;
        this.name = name;
        this.cgpa = cgpa;
    }
}

