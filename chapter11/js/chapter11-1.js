
class Lecture {
    constructor (hasTutor, lectID, members) { 
    this.hasTutor = hasTutor;
    this.lectID = lectID;
    this.members = members;
    }
}

const lecture1 = new Lecture(true, 'L001', ['Ahn', 'Han', 'Park'])
const lecture2 = new Lecture(false, 'L002', ['Choi','Kim'])

let tutor
let students

const getStudent = (lecture) =>{
    
    if(lecture.hasTutor){
        [tutor, ...students] = lecture.members
        console.log("강의 : " + lecture.lectID + ", 수강생 : " + students)
    }else {
        students = lecture.members
        console.log("강의 : " + lecture.lectID + ", 수강생 : " + students)
    }

}

getStudent(lecture1)
getStudent(lecture2)
