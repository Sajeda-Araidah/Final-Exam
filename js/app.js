'use strict'

//////////////////////////
////Global Declaration////
//////////////////////////

var studentForm = document.getElementById('student-form');
var studentTable = document.getElementById('student-table');
var tableParentHeader = ['id', 'Name', 'Email', 'Mobile', 'Age', 'tuition'];
var allStudentArray = [];


/////////////////////////////
////Student Constructor//////
/////////////////////////////

function Student(email , mobileNumber , tuition){
    this.id= getStudentId();
    this.name =
    this.email = email ;
    this . mobileNumber =  mobileNumber ;
    this.studentAge = getStudentAge();
    this .tuition =tuition ;
    allStudentArray.push(this); 
}
///////////////////////////////
////render Student function////
///////////////////////////////
Student.prototype.renderStudent = function (){
var studentRow = document.createElement('tr');
var studentData ;
var studentObject = [this.id ,this.name ,this.email ,this.mobileNumber, this.studentAge , this.tuition];
for (let index = 0; index <  studentObject.length; index++) {
    studentData = document.createElement('td');
    studentData.textContent=studentObject[index];
    studentRow.appendChild(studentData);

    console.log('yala ');
    
}
studentTable.appendChild(studentRow);

}
//renderStudent();

///////////////////////////////
////render All Student function////
///////////////////////////////
function renderAllStudent(){
    if(localStorage.getItem('Student')){
        allStudentArray=JSON.parse(localStorage.getItem('Student'));

    }
    else{
         var stdRow = document.createElement('tr');
         var studentIdTd;
       

         for (let index = 0; index < allStudentArray.length; index++) {
            studentIdTd = document.createElement('td');
            studentIdTd.textContent= allStudentArray[index].id;
            stdRow.appendChild(studentIdTd );

             var studentNameTd = document.createElement('td');
            studentNameTd.textContent= allStudentArray[index].name;
            stdRow.appendChild(studentNameTd );


             var studentEmailTd = document.createElement('td');
            studentEmailTd.textContent= allStudentArray[index].email; 
            stdRow.appendChild( studentEmailTd);

            var studentNumTd = document.createElement('td');
            studentNumTd.textContent= allStudentArray[index].mobileNumber;
            stdRow.appendChild(studentNumTd);

            var studentAgeTd = document.createElement('td');
            studentAgeTd.textContent=allStudentArray[index].studentAge;
            stdRow.appendChild(studentAgeTd);

            var tuitionTd = document.createElement('td');
            tuitionTd.textContent=allStudentArray[index].tuition;
            stdRow.appendChild(tuitionTd);
             
         }
         studentTable.appendChild(stdRow);
    }
}
renderAllStudent();


///////////////////////////////
////getStudentId function//////
///////////////////////////////

function  getStudentId(){
    
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
}

///////////////////////////////
////getStudentAge function//////
///////////////////////////////
 function getStudentAge (max,min){
     min = Math.ceil(min);
     max =Math.floor(max);

return Math.floor(Math.random() * (max - min + 1) ) + min;
console.log('Raondom')
 }


/////////////////////////////
////Header Table Function////
/////////////////////////////

function renderHeaderTable() {
    var headerRow = document.createElement('tr');
    var th;
    for (let index = 0; index < tableParentHeader.length; index++) {
        th = document.createElement('th');
        th.textContent = tableParentHeader[index];
        headerRow.appendChild(th);
        //console.log('Sajeda');
    }
    studentTable.appendChild(headerRow);
}
renderHeaderTable();

//////////////////////////////////////
//// handleFormSubmission Function////
/////////////////////////////////////


function handleFormSubmission(event) {
    event.preventDefault();

    var studentEmail = event.target.studentEmail.value;
    var studentNum = event.target.studentNum.value;
    var tuition = event.target. tuition.value;
    //console.log('sajeda');

    var newStudent = new Student(studentEmail,studentNum ,tuition);
    newStudent.renderStudent();
    localStorage.setItem('Student',JSON.stringify(allStudentArray));
    
}

studentForm.addEventListener('submit', handleFormSubmission);




