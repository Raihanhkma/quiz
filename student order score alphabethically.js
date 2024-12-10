function gettopstudent(students){
const topstudent=
students.filter(student=>student.score>75);

topstudents.sort((a,b)=>
a.name.localecompare(b.name));
    return topstudents


}