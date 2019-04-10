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

   students:Student[]=[]
 

  Allsubjects:Subject[]=[]
  OtherSubs:Subject[]=[]
 
  stdSub:Subjectdegrees=new Subjectdegrees();


  constructor(private StudentService:StudentService,
     private SubjectService: SubjectService,
     private SubjectdegreesService: SubjectdegreesService) {}

  ngOnInit() {
    this.StudentService.getAll().subscribe(
      (stds)=>{
        // console.log(stds)
        this.students=stds;
      }
      );

      this.SubjectService.getAll().subscribe(
        (subjs)=>{
          // console.log(subjs)
          this.Allsubjects=subjs; 
        }
        );
        this.SubjectdegreesService.getAll().subscribe(
          data=>this.AllSubjectdegrees=data
        );
  }
  selectedStdId:number;
  selectedSubsIds:number[]=[];
  selectedStdSubjets:Subject[]=[];
  AllSubjectdegrees:Subjectdegrees[]=[]

  onChange(stuId){
   
    console.log(this.Allsubjects)
    this.OtherSubs=[...this.Allsubjects];

    this.AllSubjectdegrees.forEach(stdDeg => {
      if(stdDeg.StdId==stuId)
      {
        this.OtherSubs.splice(this.OtherSubs.indexOf(this.OtherSubs.find(item=>item.Id==stdDeg.SubId)),1)
      }
    });
    console.log(this.OtherSubs)



    // this.subjects=[
    //   {Id:1,Name:"html"},{Id:2,Name:"js"},{Id:3,Name:"node"}];

    //  this.selectedStdSubjets=this.students.find(stb=>stb.Id==stuId).Subjects;
     
    // this.selectedStdSubjets.forEach(sub1 => {
    //   this.subjects.splice(this.subjects.indexOf(this.subjects.find(sub=>sub.Id==sub1.Id)),1);
      // this.subjects.push(this.subjects.find(sub=>sub.Id==sub1.Id));
        //  console.log(this.subjects.indexOf(this.subjects.find(sub=>sub.Id==sub1.Id)))
        //  console.log(this.subjects.indexOf(this.subjects.find(sub=>sub==sub1)))
       //}); 

 }

  Assign(stuId,subsIds){
    subsIds.forEach(subId => {
      this.stdSub.StdId=stuId;
      this.stdSub.SubId=subId;
      this.SubjectdegreesService.addSubject(this.stdSub).subscribe(
        (data)=>{
          console.log(data)
      }
    )

    });
    // this.stdSub.StdId=stuId;
    // this.stdSub.StdId=stuId;
    // this.SubjectdegreesService.addSubject(this.stdSub).subscribe(

    //   (data)=>{
    //     console.log(data)
    //   }
    // )


    // let selectedStd=this.students.find(stb=>stb.Id==stuId);
    // subsIds.forEach(subId => {      
    //     selectedStd.Subjects.push
    //     (
    //       this.subjects.find(sub=>sub.Id==subId)
    //     )
    //   console.log(this.students)
    // });

    // this.SubjectdegreesService.addSubject(this.nstd).subscribe(a=>this.subjectlist.push(a));
    

  }// Asign 

  // getAllstdDeg(){
  //   this.SubjectdegreesService.getAll().subscribe(
  //     data=>console.log(data)
  //   );

  // }


  
}