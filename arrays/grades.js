function Grades() {
  this.records = [];
  this.addGrade = add;
  this.average = gpa;
};

function add(grade){
  this.records.push(grade);
};

function gpa() {
  let  total = 0;
  this.records.map((value) => total += value);
  return total / this.records.length;
}

var Carly = new Grades();

Carly.addGrade(100);
Carly.addGrade(50);


