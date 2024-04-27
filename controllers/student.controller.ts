import { Request, Response } from 'express';
import { QueryError, PoolConnection } from 'mysql2';
import { Student } from "../models/student";
import {connection} from "../config/db"

const studentsList: Student[] = [
    {
        id: 1,
        name: 'John',
        cgpa: 20,
    },
    {
        id: 2,
        name: 'Jane',
        cgpa: 21
    },
    {
        id: 3,
        name: 'Joe',
        cgpa: 22
    }
];


const getAllStudents = async (request: Request, response: Response) => {
    try {
        console.log('started')
        const conn = await connection.getConnection();
        console.log(conn);
        const [students] = await conn.query('SELECT * FROM students');
        console.log(students);
        response.json(students);
    } catch (error) {
        console.log(error);
        response.json({message: error});        
    }
}

const getStudentById = (id: number) => {
    const student = studentsList.find(student => student.id === id);
    return student;
}

const addStudent = (student: Student) => {
    studentsList.push(student);
}

export { getAllStudents, getStudentById, addStudent };
