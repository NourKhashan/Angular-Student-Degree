import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  
  url:string = "http://localhost:57833/api/Students/";
  
  getAll(){
    console.log("Services Get All Students")
   return this.http.get<Student[]>(this.url);
  }// Get All Student

  getById(id: number){
    console.log("Click Details", id);

    return this.http.get<Student>(this.url+id);
  }
  addStudent(student:Student){
    console.log("Add Student Service", student)

    return this.http.post<Student>(this.url, student);
  }
  updateStudent( student:Student){
    return this.http.put(this.url+ student.Id,student);

  }
  deleteStudent(id: number){
    return this.http.delete(this.url+ id);
  }

  constructor(private http: HttpClient) { }
}
