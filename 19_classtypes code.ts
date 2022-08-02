
class Student 
{ 
    
    name:string; 
  
    
    constructor(value:string) 
    { 
       this.name = value 
    }  
 
    
    display():void 
    { 
       console.log("Name of student : "+this.name) 
    } 
 }

 
 var obj1 = new Student("Piyush Khairnar");
 obj1.display();