import { Component, OnInit } from '@angular/core';
import { Student } from '../Student/student';
import { Subject } from '../Subject/subject';
// import { Student } from '../student';
// import { Subject } from '../subject';
import { StudentService } from './../Student/student.service';
import { SubjectService } from './../Subject/subject.service';
import { SubjectdegreesService } from '../Subject/subjectdegrees.service';
import { Subjectdegrees } from '../Subject/subjectdegrees';


@Component({
  selector: 'app-ass-sub',
  templateUrl: './ass-sub.component.html',
  styleUrls: ['./ass-sub.component.css']
})
export class AssSubComponent implements OnInit {

  students:Student[]=[];

  subjects:Subject[]=[];
  Subjectdegrees:Subjectdegrees[]=[];

  constructor(private StudentService:StudentService,
     private SubjectService: SubjectService,
     private SubjectdegreesService: SubjectdegreesService) {}

  ngOnInit() {
    console.log("OnInit")
    this.StudentService.getAll().subscribe(
      (subjs)=>{
        console.log("hhh",subjs)
        this.students=subjs;

        
      },
      (error)=>{console.log(error)}
      );



      this.SubjectService.getAll().subscribe(
        (subjs)=>{
          console.log("sub", subjs)
          this.subjects=subjs;
          
        },
        (error)=>{console.log(error)}
        );
  }
  selectedStdId:number;
  selectedSubsIds:number[]=[];
  selectedStdSubjets:Subject[]=[];

  onChange(stuId){
    this.SubjectService.getAll().subscribe(// Get All bujects
      (subjs)=>{
        console.log("Subject: ",subjs)
        this.subjects=subjs;
        
      }, 
      ()=>{},//Error
      ()=>{
        this.SubjectdegreesService.getAll().subscribe(
          (subjs)=>{
            console.log("Subject Students: ",subjs)
            this.Subjectdegrees=subjs;
             this.Subjectdegrees.forEach((subj)=>{
                if(subj.StdId == stuId){
                  console.log()
                  this.selectedSubsIds.push(subj.SubId);
                }
             });// ForEach

            
          }
        );// GetAll Data

      }, //Complete
      );

    // this.subjects=[
    //   {Id:1,Name:"html"},{Id:2,Name:"js"},{Id:3,Name:"node"}];
    //  this.selectedStdSubjets=this.students.find(stb=>stb.Id==stuId).Subjects;
    // //  console.log(this.selectedStdSubjets)
    // this.selectedStdSubjets.forEach(sub1 => {
    //   this.subjects.splice(this.subjects.indexOf(this.subjects.find(sub=>sub.Id==sub1.Id)),1);
    //   // this.subjects.push(this.subjects.find(sub=>sub.Id==sub1.Id));
    //     //  console.log(this.subjects.indexOf(this.subjects.find(sub=>sub.Id==sub1.Id)))
    //     //  console.log(this.subjects.indexOf(this.subjects.find(sub=>sub==sub1)))
    //    }); 
    //    console.log(this.subjects)

 }

  Assign(stuId,subsIds){
    console.log("Assign", stuId, subsIds);
    // console.log(subsIds);
    this.Subjectdegrees=[];
    subsIds.forEach(subId => {      
      //   selectedStd.Subjects.push
      //   (
      //     this.subjects.find(sub=>sub.Id==subId)
      //   )
      // console.log(this.students)
      this.Subjectdegrees.push(new Subjectdegrees(stuId, subId));
    });

     this.SubjectdegreesService.addSubjectdegrees(this.Subjectdegrees).subscribe(a=>{});
    

  }// Asign 

  
}