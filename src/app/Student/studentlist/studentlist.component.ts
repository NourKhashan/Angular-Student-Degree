import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {
  studentlist:Student[]=[];
  nstd:Student=new Student(0,"","");
  constructor(private stdserv:StudentService) { }
  showAllStudent(){
   this.stdserv.getAll().subscribe(a=>this.studentlist=a);
  }
  addNewStudent(){
    this.stdserv.addStudent(this.nstd).subscribe(a=>this.studentlist.push(a))
  }
  getStudentData(id:number){
    return this.stdserv.getById(id).subscribe(
      a=>this.nstd=a
    )
  }
  DeleteStudent(id:number){
    return this.stdserv.deleteStudent(id).subscribe(
      a=>this.studentlist.splice((this.studentlist.findIndex(a=>a.Id==this.nstd.Id)),1)
    )
  }
  EditStudent(std:Student){

    console.log("Click Update" );
    this.stdserv.updateStudent(this.nstd).subscribe(
      (a)=>{
        console.log("Update",a)
      },
      ()=>{},// Eror
      ()=>this.ngOnInit()// On complter
    );
    
    // return this.stdserv.updateStudent(this.nstd).subscribe(
    //   a=>a=>this.nstd=a,
    //   e=>console.log(e),
    //   function(){ this.stdserv.getAll().subscribe(
    //     a=>this.studentlist=a)}
    // )
    
  }
  ngOnInit() {
    this.stdserv.getAll().subscribe(
      (stdList)=>{
        this.studentlist = stdList
      }
    );
  }

}
