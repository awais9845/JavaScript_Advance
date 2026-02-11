// clases in js

class student {
    constructor(name,grade){
        this.name = name;
        this.grade = grade;
    }
    studentDetail(){
        console.log("Student" + " "+ this.name +" "+ "Grade" + " " +this.grade);
    }
    haspassed(){
        if(this.grade >= 50){
            console.log("Student :" + " "+ this.name +" "+ "has passed");
        }else{
            console.log("Student :" + " "+ this.name +" "+ "has failed");
        }
    }
}

let student1 = new student("waqar khan", 57);
let student2 = new student("awais khan", 47);


student1.studentDetail();
student1.haspassed();
student2.studentDetail();
student2.haspassed();