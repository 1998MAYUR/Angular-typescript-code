

interface Student 
{ 
    name:string, 
    college:string, 
    fun:()=>string 
 } 
 
 
 var obj1:Student = 
 { 
    name:"Piyush Khairnar",
    college:"Pune University", 
    fun: ():string =>{return "Welcome to Marvellous Infosystems"} 
 }
 
 
 console.log("Students Object obj1:") 
 console.log(obj1.name) 
 console.log(obj1.college) 
 console.log(obj1.fun())  
 
  
 var obj2:Student = 
 { 
    name:"Rahul Joshi",
    college:"Modern", 
    fun: ():string =>{return "Marvellous : Admission Confirmed"} 
 } 
   
 
 console.log("Students Object obj2") 
 console.log(obj2.name) 
 console.log(obj2.college)
 console.log(obj2.fun())  
 