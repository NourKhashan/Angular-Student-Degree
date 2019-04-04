import { Subject } from '../Subject/subject';

export class Student {
    constructor(public Id: number=0, 
        public Name: String="", 
        public Image: String="",
        public Subjects?:Subject[]){}
}
