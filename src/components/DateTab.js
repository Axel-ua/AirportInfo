var tomorrow = new Date();
tomorrow.setDate(new Date().getDate()+1);

var day = new Date('Apr 30, 2000');
console.log(day); 

var nextDay = new Date(day);
nextDay.setDate(day.getDate() + 1);
console.log(nextDay); 


var tomorrow = new Date();
tomorrow.setDate(new Date().getDate()-1);

var day = new Date('Apr 30, 2000');
console.log(day); 

var nextDay = new Date(day);
nextDay.setDate(day.getDate() - 1);
console.log(nextDay); 